document.addEventListener("DOMContentLoaded", () => {
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let greeting = document.getElementById("greeting");

    function updateTimeAndGreeting() {
        let currentTime = new Date();
        
        let hoursTime = currentTime.getHours();
        let minutesTime = currentTime.getMinutes();

        hours.innerHTML = (hoursTime === 0) ? 12 : (hoursTime > 12) ? hoursTime - 12 : hoursTime;
        minutes.innerHTML = (minutesTime < 10 ? "0" : "") + minutesTime;

        if (hoursTime < 12) {
            document.documentElement.style.setProperty('--main-color', '#aae8ff');
            greeting.innerHTML = "Good Morning";
        } else if (hoursTime >= 12 && hoursTime < 20) {
            document.documentElement.style.setProperty('--main-color', '#ffebaa');
            greeting.innerHTML = "Good Afternoon";
        } else {
            document.documentElement.style.setProperty('--main-color', '#ffbbaa');
            greeting.innerHTML = "Good Evening";
        }
    }

    // Call the function once to set the initial state
    updateTimeAndGreeting();

    // Update the time and greeting every second
    setInterval(updateTimeAndGreeting, 1000);

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
