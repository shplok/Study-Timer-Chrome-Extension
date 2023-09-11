document.getElementById("reset").addEventListener("click", () => {
    chrome.storage.sync.set({ tasks: "" }, () => {
      console.log("Data Reset");
    });
  });