const express = require('express');
const cors = require('cors');
const { bookTimeSlot } = require('./api'); // Import the bookTimeSlot function from api.js

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Handle POST request to '/api/booking'
app.post('/api/booking', async (req, res) => {
  const { name, date, time } = req.body;

  try {
    const bookingSuccess = await bookTimeSlot(date, time);
    if (bookingSuccess) {
      const responseMessage = `Hello, ${name}! Your session has been booked for ${date} at ${time}. Please be on time.`;
      res.json({
        message: "Your request has been approved successfully.",
        data: responseMessage
      });
    } else {
      res.status(400).json({ error: 'The selected time slot is unavailable. Please choose another time.' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});