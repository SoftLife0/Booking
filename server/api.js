
const { Pool } = require('pg');

// PostgreSQL pool configuration
const pool = new Pool({
  user: 'yourusername',
  host: 'localhost',
  database: 'yourdatabase',
  password: 'yourpassword',
  port: 5432,
});

// Function to book a time slot
async function bookTimeSlot(date, time) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Check if the time slot is available before booking
    const checkAvailabilityQuery = `
      SELECT id FROM time_slots
      WHERE date = $1 AND time = $2 AND is_available = true
      FOR UPDATE SKIP LOCKED;
    `;
    const { rows } = await client.query(checkAvailabilityQuery, [date, time]);

    if (rows.length === 0) {
      // No available time slot found
      return false;
    }

    // Update the time slot to mark it as booked
    const updateQuery = `
      UPDATE time_slots
      SET is_available = false
      WHERE id = $1;
    `;
    await client.query(updateQuery, [rows[0].id]);

    await client.query('COMMIT');
    return true; // Booking was successful
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

module.exports = {
  bookTimeSlot
};
