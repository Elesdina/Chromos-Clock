document.addEventListener("DOMContentLoaded", () => {
  // HTML Elements
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let greeting = document.getElementById("greeting");

  // Initialize time variables
  let hoursTime;
  let minutesTime;
  let secondsTime;
  let hoursTimeTemp = hoursTime;

  // Greeting messages
  let greeting1 = document.getElementById("greeting1").value || "Good Morning";
  let greeting2 = document.getElementById("greeting2").value || "Good Afternoon";
  let greeting3 = document.getElementById("greeting3").value || "Good Evening";

  // Clock functions
  function updateTime() {
    let currentTime = new Date();
    hoursTime = currentTime.getHours();
    minutesTime = currentTime.getMinutes();
    secondsTime = currentTime.getSeconds();

    hours.innerHTML = hoursTime === 0 ? 12 : hoursTime > 12 ? hoursTime - 12 : hoursTime;
    minutes.innerHTML = (minutesTime < 10 ? "0" : "") + minutesTime;

    wasHoursChanged();
  }

  function wasHoursChanged() {
    if (hoursTime !== hoursTimeTemp) {
      updateDisplay();
      hoursTimeTemp = hoursTime;
    }
    return;
  }

  function updateDisplay() {
    if (hoursTime < 12) {
      document.documentElement.style.setProperty("--main-color", "#aae8ff");
      greeting.innerHTML = greeting1;
    } else if (hoursTime >= 12 && hoursTime < 20) {
      document.documentElement.style.setProperty("--main-color", "#ffebaa");
      greeting.innerHTML = greeting2;
    } else {
      document.documentElement.style.setProperty("--main-color", "#ffbbaa");
      greeting.innerHTML = greeting3;
    }
  }


    document.getElementById("greeting1").onkeyup = function() {
        greeting1 = this.value;
        updateDisplay();
    };
    document.getElementById("greeting2").onkeyup = function() {
        greeting2 = this.value;
        updateDisplay();
    };
    document.getElementById("greeting3").onkeyup = function() {
        greeting3 = this.value;
        updateDisplay();
    };

  updateDisplay();
  updateTime();
  setInterval(updateTime, 1000);

  // Extra stuff
  document.getElementById("fullscreen-btn").addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  });

  document.getElementById("settings-btn").addEventListener("click", () => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
  });
});
