import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsageStatistics = () => {
  const [stats, setStats] = useState({ phoneNumber: "", minuteCount: 0, dayCount: 0, messages: [] });
  const [number, setNumber] = useState('')

  const fetchUsageStats = async () => {
    // Replace this URL with your API endpoint for fetching usage stats
    if (number) {
      const res = await axios.get(`http://localhost:3001/api/sms-usage/${number}`);
      setStats(res.data);
    }
  };

  useEffect(() => {
    fetchUsageStats();
  }, [number]);

  return (
    <div className="p-4 border rounded shadow w-2/5">
      <div className='flex flex-row gap-2'>
        <input
          type="text"
          placeholder="type number here to check stats"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded-lg" onClick={fetchUsageStats}>
          Refresh
        </button>

      </div>

      <h2 className="text-xl font-bold mb-2">Usage Statistics for number: {number}</h2>
      <p>Total SMS Sent Today: {stats.dayCount}</p>
      <p>SMS Sent in Last Minute: {stats.minuteCount}</p>
      <p>Messages: </p>
      <ul>
        {stats.messages.map((message, index) => (
          <li key={index} className="text-red-600">
            {message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsageStatistics;
