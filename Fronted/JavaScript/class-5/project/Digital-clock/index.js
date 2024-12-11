function updateClock(){
    const clock = document.getElementById("clock");
    const now =new Date();
    let hour =now.getHours();
    let minutes =now.getMinutes();  //ctrl+D
    let seconds =now.getSeconds();

    const currentTime = `${hour}:${minutes}:${seconds}`;
    clock.textContent = currentTime;
}
setInterval(updateClock , 1000); // invoke or call
