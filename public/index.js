"use strict";
(function() {
  window.addEventListener("load", init);

  function init() {
    buttons();
    countdown();
  }

  function buttons() {
    id("english").addEventListener("click", flipToEnglish);
    id("spanish").addEventListener("click", flipToSpanish);
  }

  function flipToSpanish() {
    console.log("Switched to Spanish");
    qsa(".english-text").forEach(function(item) {
      item.classList.add("hidden-text");
    });
    qsa(".spanish-text").forEach(function(item) {
      item.classList.remove("hidden-text");
    });
  }

  function flipToEnglish() {
    console.log("Switched to English");
    qsa(".spanish-text").forEach(function(item) {
      item.classList.add("hidden-text");
    });
    qsa(".english-text").forEach(function(item) {
      item.classList.remove("hidden-text");
    });
  }

  function countdown() {
    // Set the target date (April 11th of the current year)
    const currentYear = new Date().getFullYear();
    const targetDate = new Date(`April 11, ${currentYear} 00:00:00`).getTime();

    // Update the countdown every second
    const interval = setInterval(() => {
      // Get the current time
      const now = new Date().getTime();

      // Calculate the time difference
      const timeRemaining = targetDate - now;

      // Check if the countdown has reached zero
      if (timeRemaining <= 0) {
        clearInterval(interval);
        id("timer").innerHTML = "The event has started!";
        return;
      }

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Update the timer element
      id("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
  }

  function id(item) {
    return document.getElementById(item);
  }

  function qsa(selector) {
    return document.querySelectorAll(selector);
  }
})();