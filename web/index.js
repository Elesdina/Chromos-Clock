document.addEventListener("DOMContentLoaded", () => {
    // HTML Elements
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let greeting = document.getElementById("greeting");

    // Initialize time variables
    let currentTime = new Date();
        
    let hoursTime;
    let minutesTime;
    let secondsTime;
    let hoursTimeTemp = hoursTime;

    // Greeting messages
    let greeting1 = "Good Morning";
    let greeting2 = "Good Afternoon";
    let greeting3 = "Good Evening";

    // Clock functions
    function updateTime() {
        hoursTime = currentTime.getHours();
        minutesTime = currentTime.getMinutes();
        secondsTime = currentTime.getSeconds();

        hours.innerHTML = (hoursTime === 0) ? 12 : (hoursTime > 12) ? hoursTime - 12 : hoursTime;
        minutes.innerHTML = (minutesTime < 10 ? "0" : "") + minutesTime;

        wasHoursChanged();
    }

    function wasHoursChanged() {
        if (hoursTime !== hoursTimeTemp) {
            updateDisplay();
            hoursTimeTemp = hoursTime;
        }

    }

    function updateDisplay() {

        if (hoursTime < 12) {
            document.documentElement.style.setProperty('--main-color', '#aae8ff');
            greeting.innerHTML = greeting1;
        } else if (hoursTime >= 12 && hoursTime < 20) {
            document.documentElement.style.setProperty('--main-color', '#ffebaa');
            greeting.innerHTML = greeting2;
        } else {
            document.documentElement.style.setProperty('--main-color', '#ffbbaa');
            greeting.innerHTML = greeting3;
        }
    }

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
});
