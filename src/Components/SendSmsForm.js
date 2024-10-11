import React, { useState } from 'react';
import axios from 'axios';

const SendSmsForm = (props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponse(null);

    try {
      const res = await axios.post('http://localhost:3001/api/send-sms', {
        phoneNumber,
        message,
      });
      setResponse(res.data.message);
    } catch (err) {
      setError(err.response.data.error || 'Error sending SMS');
    }
  };

  return (
    <div className="p-4 border rounded shadow w-1/5">
      <h2 className="text-xl font-bold mb-2">Send SMS</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Send SMS
        </button>
      </form>
      {response && <p className="text-green-600">{response}</p>}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default SendSmsForm;
