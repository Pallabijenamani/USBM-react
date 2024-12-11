let timer; // Variable to store the interval ID
function startTimer() {
  const timeInput = document.getElementById('timeInput').value;
  let timeLeft = parseInt(timeInput, 10); // Convert input to integer

    if (timeLeft <=0){
        alert  ("please enter a valid number of seconds.")
        return;
    }

clearInterval(timer); // Clear any existing timer before starting a new one
  document.getElementById('timerDisplay').textContent = timeLeft + " seconds remaining";

  timer = setInterval(() => {
    timeLeft--; // Decrement time by 1 every second

    if (timeLeft <= 0) {
      clearInterval(timer); // Stop the timer when it reaches zero
      document.getElementById('timerDisplay').textContent = "Time's up!";
    } else {
      document.getElementById('timerDisplay').textContent = timeLeft + " seconds remaining";
    }
  }, 1000); // Set interval to 1000 ms (1 second)
}