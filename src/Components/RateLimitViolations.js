import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RateLimitViolations = () => {
  const [violations, setViolations] = useState([]);

  const fetchViolations = async () => {
    // Replace this URL with your API endpoint for fetching rate limit violations
    const res = await axios.get('http://localhost:3001/api/violating-phone-numbers');
    setViolations(res.data.violatingPhoneNumbers);
  };

  useEffect(() => {
    fetchViolations();
  }, []);

  return (
    <div className="p-4 border rounded shadow w-2/5">
      <div className='flex flex-row justify-between'>
        <h2 className="text-xl font-bold mb-2">Todays Rate Limit Violations Numbers</h2>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg" onClick={fetchViolations}>
          Refresh
        </button>
      </div>


      <ul>
        {violations.map((violation, index) => (
          <li key={index} className="text-red-600">
            {violation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RateLimitViolations;
