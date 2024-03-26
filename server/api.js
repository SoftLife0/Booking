import('node-fetch').then(({ default: fetch }) => {
  const express = require('express');
  const cors = require('cors');
  const app = express();
  const PORT = process.env.PORT || 3001;

  // Enable CORS for all routes
  app.use(cors());

  // Parse JSON bodies
  app.use(express.json());

  // Handle POST request to '/api/booking'
  app.post('/api/booking', (req, res) => {
      // Extract data from the request body
      const { name, phone, date, time } = req.body;

      // Log the received data to the console
      console.log(`Received data: name=${name}, phone=${phone}, date=${date}, time=${time}`);

      // Make another POST request to the provided API URL
      fetch('https://forms.central.edu.gh/api/booking', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(req.body)
      })
      .then(response => response.json())
      .then(data => {
          console.log('Response from API:', data);
      })
      .catch(error => {
          console.error('Error:', error);
      });

      // Construct response message
      const responseMessage = `Hello, ${name}! Your request has been approved successfully. Your session has been booked for ${date} at ${time}. Please be on time to attend the session. Have a great day!`;

      // Respond with success message and data
      res.json({ 
          data: responseMessage,
          message: "Your request has been approved successfully."
      });
  });

  // Start the server
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Error:', error);
});