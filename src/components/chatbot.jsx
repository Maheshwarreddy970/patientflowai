"use client"

import React, { useState, useRef, useEffect } from 'react'
import VoiceAnimation from './ui/voiceanimation'
import { Input } from './ui/input'
import ConversationDemo from './chat'
import { CornerRightUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BarVisualizer } from './ui/bar-visualizer'
import { vapi } from "@/lib/vapi"
import { AiChatBotCall } from '@/actions/chat'

export default function Chatbot() {
    const [voiceMode, setVoiceMode] = useState(false)
    const [callActive, setCallActive] = useState(false)
    const [connecting, setConnecting] = useState(false)
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [messages, setMessages] = useState([
  {
    id: "1",
    role: "user",
    parts: [{ type: "text", text: "Hello, I'd like to book an appointment." }],
  },
  {
    id: "2",
    role: "assistant",
    parts: [
      {
        type: "text",
        text: "Of course! I can help with that. Are you looking to book a dental appointment or a mental health therapy session?",
      },
    ],
  },
  {
    id: "3",
    role: "user",
    parts: [{ type: "text", text: "A dental check-up, please." }],
  },
  {
    id: "4",
    role: "assistant",
    parts: [
      {
        type: "text",
        text: "Great. To find the best time for you, could you let me know if you are a new or an existing patient?",
      },
    ],
  },
  {
    id: "5",
    role: "user",
    parts: [{ type: "text", text: "I'm a new patient." }],
  },
  {
    id: "6",
    role: "assistant",
    parts: [
      {
        type: "text",
        text: "Welcome! We're happy to have you. We have the following times available for new patient check-ups tomorrow: 10:00 AM, 11:30 AM, or 2:00 PM. Which time works best for you?",
      },
    ],
  },
  {
    id: "7",
    role: "user",
    parts: [{ type: "text", text: "10:00 AM sounds perfect." }],
  },
  {
    id: "8",
    role: "assistant",
    parts: [
      {
        type: "text",
        text: "Excellent. I've reserved the 10:00 AM slot for you. To finalize your booking, could you please provide your full name and email address?",
      },
    ],
  },
  {
    id: "9",
    role: "user",
    parts: [
      { type: "text", text: "My name is Alex, and my email is alex@email.com" },
    ],
  },
  {
    id: "10",
    role: "assistant",
    parts: [
      {
        type: "text",
        text: "Thank you, Alex. Your appointment for a new patient dental check-up is confirmed for tomorrow at 10:00 AM. A confirmation email has been sent to your email address with all the details and a link to fill out your new patient forms online to save time. You will also receive a reminder via WhatsApp. Is there anything else I can help you with today?",
      },
    ],
  },
])
    const [callEnded, setCallEnded] = useState(false)
    const [inputText, setInputText] = useState("")
    const [isGrokLoading, setIsGrokLoading] = useState(false)

    const messageContainerRef = useRef(null)

    // auto-scroll for messages
    useEffect(() => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight
        }
    }, [messages])

    // setup event listeners for VAPI
    useEffect(() => {
        const handleCallStart = () => {
            setConnecting(false)
            setCallActive(true)
            setCallEnded(false)
        }

        const handleCallEnd = () => {
            setCallActive(false)
            setConnecting(false)
            setIsSpeaking(false)
            setCallEnded(true)
            setVoiceMode(false)
        }

        const handleSpeechStart = () => {
            setIsSpeaking(true)
        }

        const handleSpeechEnd = () => {
            setIsSpeaking(false)
        }

        const handleMessage = (message) => {
            if (message.type === "transcript" && message.transcriptType === "final") {
                const newMessage = { 
                    id: `${Date.now()}-${Math.random()}`, 
                    role: message.role, 
                    parts: [{ type: "text", text: message.transcript }]
                }
                setMessages((prev) => [...prev, newMessage])
            }
        }

        const handleError = (error) => {
            const isEjectionEnd =
                error?.errorMsg === 'Meeting has ended' ||
                error?.error?.type === 'ejected' ||
                error?.msg === 'Meeting has ended'

            if (isEjectionEnd) {
                if (process.env.NODE_ENV === 'development') {
                    console.log("Vapi: Normal call ejection detected (ignored).", error)
                }
                return
            }

            console.error("Vapi Real Error:", error)
            setConnecting(false)
            setCallActive(false)
            setVoiceMode(false)
        }

        vapi
            .on("call-start", handleCallStart)
            .on("call-end", handleCallEnd)
            .on("speech-start", handleSpeechStart)
            .on("speech-end", handleSpeechEnd)
            .on("message", handleMessage)
            .on("error", handleError)

        return () => {
            vapi
                .off("call-start", handleCallStart)
                .off("call-end", handleCallEnd)
                .off("speech-start", handleSpeechStart)
                .off("speech-end", handleSpeechEnd)
                .off("message", handleMessage)
                .off("error", handleError)
        }
    }, [])

    const handleSendMessage = async () => {
        if (inputText.trim()) {
            const newMessage = {
                id: `${Date.now()}-${Math.random()}`,
                role: "user",
                parts: [{ type: "text", text: inputText.trim() }]
            }
            setMessages((prev) => [...prev, newMessage]);
            setInputText("");

            // If not in voice mode, send message to Grok via server action
            if (!voiceMode) {
                setIsGrokLoading(true);
                try {
                    // Map messages to server action format
                    const formattedMessages = [
                        ...messages,
                        newMessage
                    ].map(msg => ({
                        isBot: msg.role === "assistant",
                        text: msg.parts[0].text
                    }));

                    // Call server action
                    const grokResponse = await AiChatBotCall(formattedMessages, null);
                    const grokMessage = {
                        id: `${Date.now()}-${Math.random()}`,
                        role: "assistant",
                        parts: [{ type: "text", text: grokResponse.content }]
                    };
                    setMessages((prev) => [...prev, grokMessage]);
                } catch (error) {
                    console.error("Failed to get Grok response:", error);
                } finally {
                    setIsGrokLoading(false);
                }
            }
        }
    }

    const handleInputChange = (e) => {
        setInputText(e.target.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && inputText.trim() && !isGrokLoading && !connecting) {
            handleSendMessage()
        }
    }

    const toggleCall = async () => {
        if (callActive) {
            vapi.stop()
            return
        }

        try {
            setConnecting(true)
            setVoiceMode(true)
            setMessages([])
            setCallEnded(false)
            setCallActive(false)

            const timeoutId = setTimeout(() => {
                if (connecting) {
                    console.warn("Vapi: Connection timeout after 10s")
                    setConnecting(false)
                    setVoiceMode(false)
                    alert("Connection timed out. Check your network and try again.")
                    vapi.stop()
                }
            }, 10000)

            await vapi.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID)
            clearTimeout(timeoutId)
        } catch (error) {
            console.error("Failed to start call", error)
            setConnecting(false)
            setVoiceMode(false)
        }
    }

    const visualizerState = connecting 
        ? 'connecting' 
        : isSpeaking 
        ? 'speaking' 
        : callActive 
        ? 'listening' 
        : 'initializing'

    return (
        <div className="relative h-[80vh] w-[60vh] bg-black/5 shadow-black/20 shadow-inner p-2 mx-auto border-x">
            <div
                aria-hidden="true"
                className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -left-[3.5px] -top-[3.5px]"
            />
            <div
                aria-hidden="true"
                className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -right-[3.5px] -top-[3.5px]"
            />
            <div
                aria-hidden="true"
                className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -right-[3.5px]"
            />
            <div
                aria-hidden="true"
                className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -left-[3.5px]"
            />

            <div className='flex flex-col justify-between overflow-hidden h-full w-full py-4 px-2 shadow border-[3px] bg-white rounded-2xl'>
                <div className={cn('flex justify-end flex-col items-center', voiceMode ? 'h-[60%]' : 'h-[90%]')}>
                    <ConversationDemo messages={messages} setMessages={setMessages} />
                </div>
                {voiceMode && (
                    <BarVisualizer
                        state={visualizerState}
                        demo={true}
                        barCount={20}
                        minHeight={15}
                        maxHeight={90}
                        className="h-[32%] max-w-full bg-white"
                    />
                )}
                <div className='flex h-[8%] gap-2'>
                    <button 
                        onClick={toggleCall}
                        disabled={connecting}
                        className='overflow-hidden rounded-full border h-[88%] shadow my-auto w-10 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                        <VoiceAnimation className={cn('scale-[0.3]', voiceMode && 'opacity-50')} />
                    </button>
                    <button onClick={()=>{if (callActive) {
            vapi.stop()
            return
        }}} className='w-full relative shadow-sm  flex h-full overflow-hidden border rounded-full'>
                        <Input 
                            className="h-full focus-visible:border-ring-0 ring-0 w-full border-0 relative rounded-l-full"
                            value={inputText}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                            disabled={isGrokLoading || connecting}
                        />
                        <button 
                            onClick={handleSendMessage}
                            disabled={isGrokLoading || connecting}
                            className='flex absolute right-0.5 overflow-hidden justify-center p-1 items-center h-full'
                        >
                            <CornerRightUp className='border p-1.5 rounded-full h-full w-full bg-neutral-100 shadow-sm' />
                        </button>
                    </button>
                </div>
            </div>
        </div>
    )
}