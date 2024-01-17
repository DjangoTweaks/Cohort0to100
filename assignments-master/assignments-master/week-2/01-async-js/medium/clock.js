// HH:MM:SS
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    let time24 = `${hours}:${minutes}:${seconds}`;
    let time12 = `${hours % 12 || 12}:${minutes}:${seconds} ${hours < 12 ? 'AM' : 'PM'}`;
  
    // Display the time in HH:MM::SS and HH:MM::SS AM/PM formats
    console.clear();
    console.log(`Time (24-hour format): ${time24}`);
    console.log(`Time (12-hour format): ${time12}`);
  }
  
  // Update the time every second
  setInterval(updateTime, 1000);