import React from 'react';
import { MessageSquare } from 'lucide-react';

const questionList = [
  'What skills do I need for a data analyst role?',
  'How do I switch careers to UX design?',
  'How can I prepare for a product manager interview?',
  'What are trending tech jobs in 2025?',
];

type EmptyStateProps = {
  onSelectQuestion: (question: string) => void;
};

export default function EmptyState({ onSelectQuestion }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Ask anything to <span className="text-blue-600">AI Career Agent</span>
      </h2>
      <p className="text-gray-500 mb-6 max-w-md">
        Tap a question below to get instant insights — powered by AI and market data.
      </p>

      <div className="grid w-full max-w-xl gap-4">
        {questionList.map((question, index) => (
          <div
            key={index}
            onClick={() => onSelectQuestion(question)}
            className="flex items-center gap-3 cursor-pointer p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200"
          >
            <MessageSquare className="text-blue-600 w-5 h-5" />
            <span className="text-gray-700 text-sm">{question}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
