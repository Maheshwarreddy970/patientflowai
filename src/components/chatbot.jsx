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
import { IconMicrophone } from '@tabler/icons-react'

export default function Chatbot() {
    const [voiceMode, setVoiceMode] = useState(false)
    const [callActive, setCallActive] = useState(false)
    const [connecting, setConnecting] = useState(false)
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [messages, setMessages] = useState([])
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
        <div className="relative h-[80vh] w-[60vh] bg-green-100   shadow-inner p-2 mx-auto border-x">
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

            <div className='flex flex-col justify-between overflow-hidden h-full w-full py-4 px-2   shadow-xl border-[2px] bg-white rounded-2xl'>
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
                        className='overflow-hidden rounded-full border h-full   w-12 p-[3px] shadow flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                        <IconMicrophone className={cn('border p-1.5 text-zinc-600 shadow-green-500 rounded-full h-full w-full bg-neutral-100 shadow ')} />
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