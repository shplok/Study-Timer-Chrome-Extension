document.addEventListener("DOMContentLoaded", function () {
    // Retrieve and display timer history
    chrome.storage.sync.get({ history: [] }, function (result) {
      const history = result.history;
      const historyList = document.getElementById("history-list");
  
      if (history.length > 0) {
        history.forEach(function (item) {
          const listItem = document.createElement("li");
          listItem.textContent = `${item.timestamp}: ${item.timerDuration}`;
          historyList.appendChild(listItem);
        });
      } else {
        const noHistoryItem = document.createElement("li");
        noHistoryItem.textContent = "No timer history available.";
        historyList.appendChild(noHistoryItem);
      }
    });
  });
  