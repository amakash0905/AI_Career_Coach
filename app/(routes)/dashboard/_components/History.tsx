'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

function History() {
  const [userHistory, setUserHistory] = useState([]);

  return (
    <div className="mt-5 p-6 bg-white border rounded-xl shadow-sm">
      <div className="mb-4">
        <h2 className="font-bold text-2xl text-gray-800">Your Activity</h2>
        <p className="text-sm text-gray-500">Find your previously used tools and sessions here.</p>
      </div>

      {userHistory.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center gap-4 py-10">
          <Image
            src="/work.webp"
            alt="No history"
            width={120}
            height={120}
            className="opacity-80"
          />
          <h3 className="text-lg font-semibold text-gray-700">
            No history found
          </h3>
          <p className="text-sm text-gray-500 max-w-sm">
            You haven’t used any tools yet. Start exploring our AI tools and your usage history will appear here.
          </p>
          <Button className="mt-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded hover:opacity-90">
            Explore AI Tools
          </Button>
        </div>
      ) : (
        <div>
          {/* map userHistory data when available */}
        </div>
      )}
    </div>
  );
}

export default History;