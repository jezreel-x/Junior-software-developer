{   
    let wakeuptime = 7;
    let noon = 12;
    let lunchtime = 12;
    let naptime = lunchtime + 2;
    let partytime;
    let evening = 18;
    
    
    let currentTime = new Date();
        //console.log(currentTime);
    
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian;
    
    if (hours >= noon || hours >= lunchtime) {
            meridian = "PM";
        }

    if (hours < noon){
            meridian = "AM";
        }
    
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    
    if(seconds < 10){
            seconds = "0"+ seconds;
        }

    if (hours < 10) {
        hours = "0" + hours;
    }
        
    let clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
    console.log(clockTime);
    
    let x = document.getElementById("clock");
    x.innerText = clockTime;
    console.log(clockTime);
    
    
    let updateClock = function(){
        let time = currentTime.getHours();
        let messageText;
        let image;

        let timeEventJS = document.getElementById("timeEvent");
        let lolcatImageJS = document.getElementById("lolcatImage");

        if(time === partytime){
            image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
            messageText = "Let's party!";
        }else if(time === wakeuptime){
            image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
            messageText = "Wake up!";
        }else if(time === lunchtime){
            image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
            messageText = "Let's have some lunch!";
        }else if(time === naptime){
            image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
            messageText = "Sleep tight!";
        }else if(time < noon){
            image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpg";
            messageText = "Good Morning!";
        }else if(time >= evening){
            image = "https://upload.wikipedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
            messageText = "Good Evening!";
        }else{
            image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
            messageText = "Good Afternoon!";
        }
        timeEventJS.innerText = messageText;
        lolcatImageJS.src = image;
        console.log(messageText);

    }
    updateClock();
    

    
    function dynamic(){
        let x = document.getElementById("Partyover");
        x.textContent = "PARTY OVER!";
    }

    let y = dynamic();
    console.log(y);

    function changeTextBack(){
        console.log("PARTY OVER!");
    }
    changeTextBack();
    
    
    
    let oneSecond = 1000;
    console.log(setInterval(updateClock, oneSecond));
    
    let partyButton = document.getElementById("partyTimeButton");
    let partyEvent = function(){
        if (partytime < 0){
            partytime = new Date().getHours();
            partyButton.innerText = "PARTY OVER!";
            partyButton.style.backgroundColor = "#0A8DAB";
        }else{
            partytime = -1;
            partyButton.innerText = "PARTY TIME!";
            partyButton.style.backgroundColor = "#222";
        }
    }

    partyButton.addEventListener("click", partyEvent, useCapture);
    console.log(partyEvent());

    let wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
    let wakeUpEvent = function(){
        wakeuptime = wakeUpTimeSelector.nodeValue;
    }
    wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

    let lunchTimeSelector = document.getElementById("lunchTimeSelector");
    let lunchEvent = function(){
        lunchtime = lunchTimeSelector.nodeValue;
    }
    lunchTimeSelector.addEventListener("change", lunchEvent);

    let napTimeSelector = document.getElementById("napTimeSelector");
    let napEvent = function(){
        naptime = napTimeSelector.nodeValue;
    }
    napTimeSelector.addEventListener("change", napEvent);
    
    /*
    let eventListener = document.getElementById("btn2").addEventListener("click",  function() {
        console.log('HEY BEAUTIFUL!!');
    });

    console.log(eventListener);
    */
   

    


}
