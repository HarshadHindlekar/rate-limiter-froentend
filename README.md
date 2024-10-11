# SMS API Dashboard

This is a simple React dashboard application to interact with an SMS API. It allows you to send SMS, view usage statistics for a specific phone number, and track phone numbers that have violated rate limits.

## Features

- **Send SMS**: Enter a phone number and a message, and send an SMS via an API.
- **Usage Statistics**: Fetch and display SMS usage statistics (number of SMS sent in the last minute and today) for a specific phone number.
- **Rate Limit Violations**: View phone numbers that have violated the SMS rate limits.

## Prerequisites

Before running the project, ensure you have the following:

- Node.js installed
- A backend API running to handle the SMS sending and statistics retrieval (for example, `http://localhost:3001/api/send-sms`, `http://localhost:3001/api/sms-usage/:number`, and `http://localhost:3001/api/violating-phone-numbers`)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/sms-api-dashboard.git
   cd sms-api-dashboard

2. **Install dependencies:**
    ```bash
    npm install

3. **Run the application:**
    ```bash
    npm start

    
4. **Access the dashboard:** Open your browser and go to `http://localhost:3000/`
    

## Project Structure

- `App.js`: The main application file that renders the components.
- `Components/SendSmsForm.js`: A form for sending SMS by entering a phone number and message.
- `Components/UsageStatistics.js`: Displays SMS usage statistics for a given phone number.
- `Components/RateLimitViolations.js`: Displays a list of phone numbers that violated rate limits.

## API Endpoints

- Send SMS: `POST http://localhost:3001/api/send-sms`
  - Body: `{ phoneNumber: string, message: string }`
  - Response: `{ message: string }`
- Usage Statistics: `GET http://localhost:3001/api/sms-usage/:phoneNumber`
  - Response: `{ phoneNumber: string, minuteCount: number, dayCount: number, messages: string[] }`
- Rate Limit Violations: `GET http://localhost:3001/api/violating-phone-numbers`
  - Response: `{ violatingPhoneNumbers: string[] }`

## Available Scripts

In the project directory, you can run:

 - `npm start`: Runs the app in the development mode.
 - `npm run build`: Builds the app for production.

## Customization
You can modify the following components as per your requirement:

 - SendSmsForm.js: Customize how the SMS is sent and processed.
 - UsageStatistics.js: Modify how the usage statistics are displayed or change the API endpoint.
 - RateLimitViolations.js: Customize the display of rate limit violation numbers.