const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies

app.post('/api/booking', (req, res) => {
  // Parse the form input from the request body
  const { name, phone, date, time } = req.body;

  // You can perform any necessary processing or validation here

  // Send the form input as a JSON response
  res.json({ name, phone, date, time, message: 'Booking received successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
