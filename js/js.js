// ===================== BASIC VARIABLES ======================

// find navbar counters
let heartCount = document.getElementById("heartCount");
let coinCount = document.getElementById("coinCount");
let copyCount = document.getElementById("copyCount");

// store call history container
let historyList = document.getElementById("historyList");

// ===================== HEART BUTTON ======================

// get all heart buttons
let allHeartBtns = document.querySelectorAll(".heartBtn");

// loop through all heart buttons
allHeartBtns.forEach(function(button){
  button.addEventListener("click", function(){
    // increase the number by 1
    heartCount.innerText = parseInt(heartCount.innerText) + 1;
  });
});

// ===================== COPY BUTTON ======================

let allCopyBtns = document.querySelectorAll(".copyBtn");

allCopyBtns.forEach(function(button){
  button.addEventListener("click", function(){
    // get the phone number (previous element sibling is <p>)
    let number = button.parentElement.previousElementSibling.innerText;

    // copy number
    navigator.clipboard.writeText(number);

    // show alert
    alert("Number Copied: " + number);

    // increase copy counter
    copyCount.innerText = parseInt(copyCount.innerText) + 1;
  });
});

// ===================== CALL BUTTON ======================

let allCallBtns = document.querySelectorAll(".callBtn");

allCallBtns.forEach(function(button){
  button.addEventListener("click", function(){
    let serviceName = button.getAttribute("data-service");
    let serviceNumber = button.getAttribute("data-number");

    // check if enough coins
    let currentCoins = parseInt(coinCount.innerText);
    if(currentCoins < 20){
      alert("Not enough coins to make a call!");
      return; // stop here
    }

    // reduce 20 coins
    coinCount.innerText = currentCoins - 20;

    // show alert for call
    alert("Calling " + serviceName + " (" + serviceNumber + ")");

    // add to history with time
    let time = new Date().toLocaleTimeString();
    let li = document.createElement("li");
    li.innerText = serviceName + " - " + serviceNumber + " (" + time + ")";
    historyList.prepend(li); // add on top
  });
});

// ===================== CLEAR HISTORY ======================

let clearHistoryBtn = document.getElementById("clearHistoryBtn");

clearHistoryBtn.addEventListener("click", function(){
  historyList.innerHTML = ""; // empty list
});
