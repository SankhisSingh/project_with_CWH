// Select the clock hands
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

// Function to update the clock
function updateClock() {
  const now = new Date();

  // Get the current hours, minutes, and seconds
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate the degrees for each hand
  const hourDegrees = (hours % 12) * 30 + minutes * 0.5; // 360° / 12 hours + minute offset
  const minuteDegrees = minutes * 6; // 360° / 60 minutes
  const secondDegrees = seconds * 6; // 360° / 60 seconds

  // Rotate the hands
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
