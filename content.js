chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.command === "changeBackgroundColor") {
      document.body.style.backgroundColor = request.color;
      sendResponse({ result: "success" });
    }
  });