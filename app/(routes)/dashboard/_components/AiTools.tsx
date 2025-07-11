'use client';

import React from 'react';
import AiToolCard, { TOOL } from './AiToolCard';
import { Typewriter } from 'react-simple-typewriter';

const AiToolsList: TOOL[] = [
  {
    name: 'AI Career Q&A Chat',
    desc: 'Ask career questions',
    icon: '/chatbot.jpg',
    button: 'Ask Now',
    path: '/ai-tools/ai-chat',
  },
  {
    name: 'AI Resume Analyzer',
    desc: 'Improve your resume',
    icon: '/resumeanalyzer.png',
    button: 'Analyze Now',
    path: '/ai-resume',
  },
  {
    name: 'Career Roadmap Generator',
    desc: 'Build your roadmap',
    icon: '/roadmap.png',
    button: 'Generate Now',
    path: '/roadmap',
  },
  {
    name: 'Cover Letter Generator',
    desc: 'Write a cover letter',
    icon: '/coverletter.jpg',
    button: 'Create Now',
    path: '/cover-letter',
  },
];

function AiTools() {
  return (
    <div className="mt-7 p-5 bg-white border rounded-xl">
      <h2 className="font-bold text-lg">Available AI Tools</h2>
      <p className="text-sm text-gray-500 mb-4 h-6">
        <Typewriter
          words={[
            'Start building your future...',
            'Shape your tech career...',
            'Unlock premium AI tools...',
            'Level up your resume today!',
          ]}
          loop={0} // infinite
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {AiToolsList.map((tool, index) => (
          <AiToolCard tool={tool} key={index} />
        ))}
      </div>
    </div>
  );
}

export default AiTools;