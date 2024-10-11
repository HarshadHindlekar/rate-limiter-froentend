import './App.css';
import SendSmsForm from './Components/SendSmsForm';
import UsageStatistics from './Components/UsageStatistics';
import RateLimitViolations from './Components/RateLimitViolations';
import { useState } from 'react';

function App() {

  return (
    <div className="w-screen h-screen p-4 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">SMS API Dashboard</h1>
      <div className='flex flex-row h-full gap-2'>
        <SendSmsForm />
        <UsageStatistics />
        <RateLimitViolations />

      </div>

    </div>
  );
}

export default App;
