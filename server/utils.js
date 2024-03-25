// Mock database to store bookings
const mockDB = {
    bookings: []
  };
  
  async function bookTimeSlot(date, time) {
    const isAvailable = mockDB.bookings.every(booking => booking.date !== date || booking.time !== time);
  
    if (isAvailable) {
      mockDB.bookings.push({ date, time });
      return true;
    } else {
      return false;
    }
  }
  
  module.exports = { bookTimeSlot };
  