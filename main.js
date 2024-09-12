function updateClock() {
    const currentDate = new Date();
   const hours = currentDate.getHours();
   const minutes = String(currentDate.getMinutes()).padStart(2, "0");
   const senconds = String(currentDate.getSeconds()).padStart(2, "0");
   console.log(currentDate);
   const timeString = `${hours}: ${minutes}: ${senconds}`;
   console.log(timeString);
   document.getElementById("clock").innerHTML = timeString;

   }
   updateClock();
   setInterval(updateClock,1000)
