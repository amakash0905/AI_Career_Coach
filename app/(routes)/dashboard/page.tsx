import React from 'react';
import WelcomeBanner from './_components/WelcomeBanner';
import AiTools from './_components/AiTools';
import History from './_components/History';

function Dashboard() {
  return (
    <div className="space-y-6 p-4">
      <WelcomeBanner/>
      <AiTools/>
      <History/>
    </div>
  );
}

export default Dashboard;