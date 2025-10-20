"use client"

import { useEffect, useRef, useState } from "react"
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ui/conversation"
import { Message, MessageContent } from "@/components/ui/message"
import { Response } from "@/components/ui/response"
import VoiceAnimation from "./ui/voiceanimation"


const allMessages =[
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
  {
    id: "11",
    role: "assistant",
    parts: [
      {
        type: "text",
        text: `🎙️ Hey there, voice wizard! 🪄
Tap the MIC ICON below 🎤
to SPEAK with your AI Assistant 🤖✨
Say anything - I'll listen, understand, & reply instantly!
OR keep typing in the chat box 📝
Ready to chat? Let's make some magic! 🚀💬`
      },
    ],
  }
]

export default function ConversationDemo({ messages, setMessages }) {
  const [streamingMessageIndex, setStreamingMessageIndex] = useState(null)
  const [streamingContent, setStreamingContent] = useState("")

  // Keep index in ref so the effect closure always sees latest value
  const currentMessageIndexRef = useRef(0)

  useEffect(() => {
    const timeouts = []
    const intervals = []

    const addNextMessage = () => {
      const currentIndex = currentMessageIndexRef.current
      if (currentIndex >= allMessages.length) return

      const message = allMessages[currentIndex]
      const part = message.parts[0]

      // If assistant message, stream tokens on the go
      if (message.role === "assistant") {
        setStreamingMessageIndex(currentIndex)
        setStreamingContent("")

        // Divide text into words on the go
        const words = part.text.split(/\s+/)
        let currentContent = ""
        let tokenIndex = 0

        const streamInterval = window.setInterval(() => {
          if (tokenIndex < words.length) {
            currentContent += words[tokenIndex] + (tokenIndex < words.length - 1 ? " " : "")
            setStreamingContent(currentContent)
            tokenIndex++
          } else {
            // finished streaming tokens
            clearInterval(streamInterval)
            // add final message to messages
            setMessages((prev) => [...prev, message])
            setStreamingMessageIndex(null)
            setStreamingContent("")
            currentMessageIndexRef.current += 1
            // schedule next message
            timeouts.push(window.setTimeout(addNextMessage, 500))
          }
        }, 100)

        intervals.push(streamInterval)
      } else {
        // immediate message (user)
        setMessages((prev) => [...prev, message])
        currentMessageIndexRef.current += 1
        timeouts.push(window.setTimeout(addNextMessage, 800))
      }
    }

    // start sequence
    timeouts.push(window.setTimeout(addNextMessage, 1000))

    return () => {
      // cleanup on unmount
      timeouts.forEach((t) => clearTimeout(t))
      intervals.forEach((i) => clearInterval(i))
    }
  }, [setMessages])

  return (
    <>
      <div className="flex h-full flex-col">
        <Conversation>
          <ConversationContent>
            {messages.length === 0 && streamingMessageIndex === null ? (
              <ConversationEmptyState
                icon={<VoiceAnimation className="h-12 w-12" />}
                title="Start a conversation"
                description="This is a simulated conversation"
              />
            ) : (
              <>
                {messages.map((message) => (
                  <Message from={message.role} key={message.id}>
                    <MessageContent>
                      {message.parts.map((part, i) => {
                        if (part.type === "text") {
                          return (
                            <Response key={`${message.id}-${i}`}>
                              {part.text}
                            </Response>
                          )
                        }
                        return null
                      })}
                    </MessageContent>

                    {message.role === "assistant" && (
                      <div
                        aria-hidden
                        className=" h-8 w-8 overflow-hidden flex justify-center items-center rounded-full"
                      >
                        <VoiceAnimation  className='scale-[0.3] '/>
                      </div>
                    )}
                  </Message>
                ))}

                {streamingMessageIndex !== null && (
                  <Message
                    from={allMessages[streamingMessageIndex].role}
                    key={`streaming-${streamingMessageIndex}`}
                  >
                    <MessageContent>
                      <Response>{streamingContent || "\u200B"}</Response>
                    </MessageContent>
                    {allMessages[streamingMessageIndex].role === "assistant" && (
                     <div
                        aria-hidden
                        className=" h-8 w-8 overflow-hidden flex justify-center items-center rounded-full"
                      >
                        <VoiceAnimation  className='scale-[0.3] '/>
                      </div>
                    )}
                  </Message>
                )}
              </>
            )}
          </ConversationContent>

          <ConversationScrollButton />
        </Conversation>
      </div>
    </>
  )
}