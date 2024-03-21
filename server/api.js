const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

app.post('/api/booking', (req, res) => {
  const { name, phone, date, time } = req.body;

  // Construct response message
  const data = `Hello, ${name} your request has been approved successfully. Your session has been booked for ${date} at ${time}. Please be on time to attend the session. Have a great day!`;

  // Respond with success message and data
  res.json({ 
    data: data,
    message: "Your request has been approved successfully."
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
