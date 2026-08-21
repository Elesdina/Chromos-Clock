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
    let defaultMessage = "Open the menu to edit";

    let greeting1 = document.getElementById("greeting1").value || defaultMessage;
    let greeting2 = document.getElementById("greeting2").value || defaultMessage;
    let greeting3 = document.getElementById("greeting3").value || defaultMessage;

    // Clock functions
    function updateTime() {
        let currentTime = new Date();
        hoursTime = currentTime.getHours();
        minutesTime = currentTime.getMinutes();
        secondsTime = currentTime.getSeconds();

        hours.innerHTML = hoursTime === 0 ? 12 : hoursTime > 12 ? hoursTime - 12 : hoursTime;
        minutes.innerHTML = (minutesTime < 10 ? "0" : "") + minutesTime;

        document.title = `${hours.innerHTML}:${minutes.innerHTML} | Chromos Clock`;

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
            greeting.innerHTML = greeting1.replace(/</g, "&lt;").replace(/>/g, "&gt;") || defaultMessage;
        } else if (hoursTime >= 12 && hoursTime < 17) {
            document.documentElement.style.setProperty("--main-color", "#ffebaa");
            greeting.innerHTML = greeting2.replace(/</g, "&lt;").replace(/>/g, "&gt;") || defaultMessage;
        } else {
            document.documentElement.style.setProperty("--main-color", "#ffbbaa");
            greeting.innerHTML = greeting3.replace(/</g, "&lt;").replace(/>/g, "&gt;") || defaultMessage;
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
            document.getElementById("fullscreen-btn").querySelector("span").textContent = "fullscreen_exit";
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                document.getElementById("fullscreen-btn").querySelector("span").textContent = "fullscreen";
            }
        }
    });

    document.getElementById("settings-btn").addEventListener("click", () => {
        let sidebar = document.querySelector(".sidebar");
        if (sidebar.classList.contains("active")) {
            document.getElementById("settings-btn").querySelector("span").textContent = "density_medium";
        } else {
            document.getElementById("settings-btn").querySelector("span").textContent = "close";
        }
        sidebar.classList.toggle("active");
    });
});
