 'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EmptyState from './_components/EmptyState'; // ✅ correct path based on your file location
import axios from 'axios';

export default function AiChat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages([...messages, message]);
    setMessage('');
  };

  const handleNewChat = () => {
    setMessages([]);
    setMessage('');
  };

  const [userInput, setUserInput]=useState<string>();
  const[loading,setLoading]=useState(false);

  const onSend=async()=>{
      const result=await axios.post('/api/ai-career-chat-agent',{
        userInput:userInput
      });
      console.log(result.data);
      setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-16 lg:px-32 xl:px-48 py-10">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">AI Career Q/A Chat</h2>
            <p className="text-sm text-gray-500 mt-1 max-w-xl">
              Smarter career decisions start here — get tailored advice, real-time market insights,
              and a roadmap built just for you with the power of AI.
            </p>
          </div>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-md"
            onClick={handleNewChat}
          >
            + New Chat
          </Button>
        </div>
      </div>

      {/* Chat Box */}
      <div className="bg-white rounded-xl shadow-md h-[70vh] flex flex-col overflow-hidden">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {messages.length === 0 ? (
            <EmptyState onSelectQuestion={(q) => setMessages([q])} />
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className="bg-blue-100 text-blue-900 p-3 rounded-md max-w-lg ml-auto text-sm shadow-sm"
              >
                {msg}
              </div>
            ))
          )}
        </div>

        {/* Message Input */}
        <div className="border-t px-4 py-3 bg-gray-100 flex items-center gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={onSend}
            disabled={loading}
            className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
