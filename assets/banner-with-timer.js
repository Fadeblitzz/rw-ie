document.addEventListener("DOMContentLoaded", function() {

    function createCountdown(endDate, divSelector) {
    const startTime = new Date().getTime();
    const endTime = new Date(endDate).getTime();

    if (isNaN(endTime) || startTime >= endTime) {
        console.error("Invalid end date.");
        return () => {};
    }

    const intervalId = setInterval(() => {
        const currentTime = new Date().getTime();
        const remainingTime = endTime - currentTime;

        if (remainingTime > 0) {
            const seconds = Math.floor((remainingTime / 1000) % 60);
            const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
            const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

            if (document.querySelector(divSelector + ' .timer')) {
                document.querySelector(divSelector + ' .day').innerText = days;
                document.querySelector(divSelector + ' .hour').innerText = hours;
                document.querySelector(divSelector + ' .minute').innerText = minutes;
                document.querySelector(divSelector + ' .second').innerText = seconds;
            }
        } else {
            clearInterval(intervalId);
        }
    }, 1000);

    return () => clearInterval(intervalId);
}

createCountdown(bannerDate.endDate,".timer-div");

});