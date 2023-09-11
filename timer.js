// Timer variables
let countdownInterval;
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
    const secondsInput = parseInt(document.getElementById("seconds").value);
    if (!isNaN(minutesInput) || !isNaN(secondsInput)) {
      totalSeconds = (minutesInput || 0) * 60 + (secondsInput || 0);
      if (totalSeconds > 0) {
        displayTimer();
        countdownInterval = setInterval(function () {
          if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            timerRunning = false;
            alert("Time's up!");
          } else {
            totalSeconds--;
            displayTimer();
          }
        }, 1000);
        timerRunning = true;
      } else {
        alert("Please enter a valid time (minutes or seconds).");
      }
    } else {
      alert("Please enter a valid time (minutes or seconds).");
    }
  }
});

// Stop timer
document.getElementById("stop").addEventListener("click", function () {
  clearInterval(countdownInterval);
  timerRunning = false;
});

// Reset timer
document.getElementById("reset").addEventListener("click", function () {
  clearInterval(countdownInterval);
  timerRunning = false;
  totalSeconds = 0;
  document.getElementById("minutes").value = "";
  document.getElementById("seconds").value = "";
  displayTimer();
});

// Initial timer display
displayTimer();
