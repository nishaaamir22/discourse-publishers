"use client";

import { FormEvent, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const initialMessage: Message = {
  role: "assistant",
  content:
    "Hello! Welcome to Discourse Publishers. 👋 How can I help you with publishing, books, or our services?",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: trimmedInput,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: data.message,
        },
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? `Error: ${error.message}`
              : "Unknown error occurred.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-5 right-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#183c32] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#102d26] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#183c32] focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
      >
        {isOpen ? (
          <span className="text-2xl leading-none">×</span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 8h10M7 12h6m-9 8 3.2-3.2A8.5 8.5 0 1 1 20.5 12c0 4.7-3.8 8.5-8.5 8.5A8.5 8.5 0 0 1 7 19.8L4 20Z"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-5 z-[90] flex h-[min(600px,calc(100vh-7rem))] w-[calc(100vw-2.5rem)] max-w-[390px] flex-col overflow-hidden rounded-lg border border-[#d8d1c5] bg-[#f7f4ef] shadow-2xl sm:right-6">
          <div className="flex items-center justify-between bg-[#183c32] px-5 py-4 text-white">
            <div>
              <p className="text-sm font-semibold tracking-wide">
                Discourse Publishers
              </p>
              <p className="mt-0.5 text-xs text-[#c7d3cd]">
                Publishing Assistant
              </p>
            </div>

            <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-[#c7d3cd]">
              <span className="h-2 w-2 rounded-full bg-[#9db5aa]" />
              Online
            </span>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5 sm:px-5">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "rounded-lg bg-[#183c32] text-white"
                      : "rounded-lg border border-[#d8d1c5] bg-white text-[#3f4843]"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-lg border border-[#d8d1c5] bg-white px-4 py-3">
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#7b8781]" />
                    <span
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#7b8781]"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#7b8781]"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-[#d8d1c5] bg-[#fbf9f5] p-3"
          >
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    event.currentTarget.form?.requestSubmit();
                  }
                }}
                placeholder="Ask about publishing..."
                rows={1}
                maxLength={1000}
                disabled={isLoading}
                className="min-h-[44px] flex-1 resize-none rounded-md border border-[#d8d1c5] bg-white px-3 py-2.5 text-sm text-[#1c1c1c] outline-none placeholder:text-[#8a928d] focus:border-[#183c32] disabled:opacity-60"
                aria-label="Chat message"
              />

              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#183c32] text-white transition-colors hover:bg-[#102d26] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5 12 14-7-3 14-4-5-7-2Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12 14 2-5"
                  />
                </svg>
              </button>
            </div>

            <p className="mt-2 text-center text-[10px] leading-4 text-[#8a928d]">
              AI assistant · For specific project details, our team can help.
            </p>
          </form>
        </div>
      )}
    </>
  );
}