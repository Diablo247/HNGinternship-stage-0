function updateUTCTime() {
    const currentTime = new Date();
    const utcTime = currentTime.toUTCString();
    document.getElementById('currentTimeUTC').textContent = `${utcTime}`;
  }
  
//update time when the page loads
updateUTCTime();
//update tme automatically
setInterval(updateUTCTime, 1000);
