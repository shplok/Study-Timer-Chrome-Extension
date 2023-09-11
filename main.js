// Timer variables
let timerInterval;
let timerRunning = false;
let totalSeconds = 0;

// Display timer function
function displayTimer() {
  const timerDisplay = document.getElementById("timer");
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Start timer
document.getElementById("start").addEventListener("click", function () {
  if (!timerRunning) {
    const minutesInput = parseInt(document.getElementById("minutes").value);
    if (!isNaN(minutesInput) && minutesInput > 0) {
      totalSeconds = minutesInput * 60;
      displayTimer();
      timerInterval = setInterval(function () {
        if (totalSeconds <= 0) {
          clearInterval(timerInterval);
          timerRunning = false;
          alert("Time's up!");
        } else {
          totalSeconds--;
          displayTimer();
        }
      }, 1000);
      timerRunning = true;
    } else {
      alert("Please enter a valid number of minutes.");
    }
  }
});

// Stop timer
document.getElementById("stop").addEventListener("click", function () {
  clearInterval(timerInterval);
  timerRunning = false;
});

// Reset timer
document.getElementById("reset").addEventListener("click", function () {
  clearInterval(timerInterval);
  timerRunning = false;
  totalSeconds = 0;
  document.getElementById("minutes").value = "";
  displayTimer();
});

// Initial timer display
displayTimer();
