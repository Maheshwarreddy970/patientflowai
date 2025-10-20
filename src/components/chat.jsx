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
import { Circle } from "lucide-react"




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
      if (currentIndex >= messages.length) return

      const message = messages[currentIndex]
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
                icon={<Circle className="h-12 w-12" />}
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
                        className="ring-border h-8 w-8 overflow-hidden rounded-full ring-1"
                      >
                        <Circle className="h-full w-full" />
                      </div>
                    )}
                  </Message>
                ))}

                {streamingMessageIndex !== null && (
                  <Message
                    from={messages[streamingMessageIndex].role}
                    key={`streaming-${streamingMessageIndex}`}
                  >
                    <MessageContent>
                      <Response>{streamingContent || "\u200B"}</Response>
                    </MessageContent>
                    {messages[streamingMessageIndex].role === "assistant" && (
                      <div
                        aria-hidden
                        className="ring-border h-8 w-8 overflow-hidden rounded-full ring-1"
                      >
                        <Circle className="h-full w-full" />
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