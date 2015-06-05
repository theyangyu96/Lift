document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('up');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {method: "up"}, function() {
       console.log("bye");
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('down');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {method: "down"}, function() {
       console.log("bye");
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('mark');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {method: "mark"}, function() {
       console.log("bye");
      });
    });
  });
});
