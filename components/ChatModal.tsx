'use client';

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  role: 'user' | 'agent';
  content: string;
  suggestions?: string[];
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'agent',
      content: `Salut. Ici l'IA de Pierre. On ne va pas tourner autour du pot.

Ce diagnostic prend moins de 2 minutes.

Il n'est pas là pour te motiver, mais pour identifier précisément ce qui te bloque — et comment y remédier.

Pour commencer, comment tu t'appelles ?`,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Générer un ID de session unique au montage du composant
  useEffect(() => {
    if (!sessionId) {
      const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
      setSessionId(newSessionId);
    }
  }, [sessionId]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendToWebhook = async (message: string) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          sessionId,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return {
          content: data.response || "Je comprends. Continue à me parler de ta situation. Plus tu es précis, plus je peux t'aider à trouver la solution adaptée.",
          suggestions: data.suggestions || []
        };
      }
    } catch (error) {
      console.error('Error sending to webhook:', error);
    }
    return {
      content: "Je comprends. Continue à me parler de ta situation. Plus tu es précis, plus je peux t'aider à trouver la solution adaptée.",
      suggestions: []
    };
  };

  const handleSelectOption = async (option: string, label: string) => {
    setShowOptions(false);
    setMessages((prev) => [...prev, { role: 'user', content: label }]);
    setIsLoading(true);

    // Send to webhook and get response
    const webhookResponse = await sendToWebhook(label);

    setTimeout(() => {
      setMessages((prev) => [...prev, {
        role: 'agent',
        content: webhookResponse.content,
        suggestions: webhookResponse.suggestions
      }]);
      setIsLoading(false);
    }, 800);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setInputValue('');
    setIsLoading(true);

    // Send to webhook and get response
    const webhookResponse = await sendToWebhook(userMessage);

    setTimeout(() => {
      setMessages((prev) => [...prev, {
        role: 'agent',
        content: webhookResponse.content,
        suggestions: webhookResponse.suggestions
      }]);
      setIsLoading(false);
    }, 1000);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center opacity-100 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[560px] max-h-[90vh] bg-white text-black flex flex-col transform translate-y-0 transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-bebas text-2xl">DIAGNOSTIC</h3>
          <button
            onClick={onClose}
            className="w-10 h-10 border border-gray-200 flex items-center justify-center text-xl hover:bg-black hover:text-white hover:border-black transition-all"
          >
            ×
          </button>
        </div>

        {/* Chat Container */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-8 space-y-4 min-h-[300px]"
        >
          {messages.map((msg, idx) => (
            <div key={idx}>
              <div
                className={`max-w-[85%] p-4 text-[15px] leading-relaxed prose prose-sm max-w-none ${
                  msg.role === 'agent'
                    ? 'bg-gray-100 rounded-tr-2xl rounded-b-2xl prose-headings:text-gray-900 prose-p:text-gray-800 prose-strong:text-gray-900 prose-strong:font-semibold prose-ul:text-gray-800 prose-ol:text-gray-800'
                    : 'bg-black text-white ml-auto rounded-tl-2xl rounded-b-2xl prose-headings:text-white prose-p:text-white prose-strong:text-white prose-strong:font-semibold prose-ul:text-white prose-ol:text-white'
                }`}
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {msg.content}
                </ReactMarkdown>
              </div>
              {msg.role === 'agent' && msg.suggestions && msg.suggestions.length > 0 && (
                <div className="flex flex-col gap-2 mt-4">
                  {msg.suggestions.map((suggestion, suggIdx) => (
                    <button
                      key={suggIdx}
                      onClick={() => handleSelectSuggestion(suggestion)}
                      className="p-4 border border-gray-200 text-left text-sm hover:border-black hover:bg-gray-100 transition-all"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="max-w-[85%] p-4 bg-gray-100 rounded-tr-2xl rounded-b-2xl">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-6 border-t border-gray-200 flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ton prénom..."
            className="flex-1 p-4 border border-gray-200 text-[15px] outline-none focus:border-black transition-colors"
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading}
            className="px-6 py-4 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            Commencer
          </button>
        </div>
      </div>
    </div>
  );
}
