export async function bookTimeSlot(name, date, time) {
  try {
    const response = await fetch('http://localhost:3001/api/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, date, time })
    });

    if (!response.ok) {
      throw new Error('Error booking time slot');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An error occurred while processing your request.');
  }
}