var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand')

// TODO: fix rotation so it flows correctly from 60 to 0

function setDate() {
    
    var now = new Date();

    // adding 90 offsets 90 degree rotation from css
    var seconds = now.getSeconds();
    var secondsDegrees = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    var minutes = now.getMinutes();
    var minuteDegrees = ((minutes/60) * 360 + 90);
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    
    var hours = now.getHours();
    var hourDegrees = ((hours/12) * 360 + 90);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    

}

setInterval(setDate, 1000);