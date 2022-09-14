//**Controller**

//get the user's input when Start button is clicked
const getInput = () => {

    document.querySelector('#submitBtn').disabled = true;

    const days = +document.querySelector('#days').value;
    const hours = +document.querySelector('#hours').value;
    const mins = +document.querySelector('#mins').value;
    const secs = +document.querySelector('#secs').value;
  

    validate(days, hours, mins, secs);

}

//Refresh page when error message is ok'ed or when Reset button is clicked
const refresh = () => {
    window.location.reload(); 
}



//**Model**

//check if inputs are valid
const validate = (days, hours, mins, secs) => {

        //inputs must be positive values
    if(days<0 || hours<0 || mins<0 || secs<0) {

        alert('Values cannot be negative'); 
        refresh();

        //all inputs cannot be 0
    } else if(days===0 && hours===0 && mins===0 && secs===0){

        alert('Try a numbers above 0');
        refresh();

        //no decimals
    } else if(!Number.isInteger(days)||!Number.isInteger(hours) ||!Number.isInteger(mins)||!Number.isInteger(secs)){
       
        alert('No decimals please!');
        refresh();        

    }   //if the value is a positive integer, proceed
    else {

        updateClock(days, hours, mins, secs);
        calculateCount(days, hours, mins, secs);
    }
}

//convert all values into seconds and count down in intervals of 1 sec
const calculateCount = (days, hours, mins, secs) => {

    let totalSecs = secs + (mins*60) + (hours*60*60) + (days*60*60*24);

    const clearInt = setInterval(() => { 
        
        totalSecs--;
        countDown(totalSecs);
        if(totalSecs===0) clearInterval(clearInt);
    
    },"1000", totalSecs);

}

//after every second, re-evaluate the display
const countDown = (runningTotal) => {

    let secsLeft = Math.floor(runningTotal%60);
    runningTotal -= secsLeft;

    let daysLeft = Math.floor(runningTotal/86400);
    runningTotal -= daysLeft*86400;

    let hoursLeft = Math.floor(runningTotal/3600);
    runningTotal -= hoursLeft*3600;

    let minsLeft = Math.floor(runningTotal/60);
    

    updateClock(daysLeft, hoursLeft, minsLeft, secsLeft);    
}



//**View**

//update each corresponding display
const updateClock = (daysLeft, hoursLeft, minsLeft, secsLeft) => {

    let clockDays = document.querySelector('#clock-days');
    let clockHours = document.querySelector('#clock-hours');
    let clockMins = document.querySelector('#clock-mins');
    let clockSecs = document.querySelector('#clock-secs');
    let Displayclock = document.querySelector('#displayClock');
    
    Displayclock.style = 'Display: block';
    clockDays.innerText = daysLeft;
    clockHours.innerText = hoursLeft;
    clockMins.innerText = minsLeft;
    clockSecs.innerText = secsLeft;


    //End message alert is delayed 500ms so display can show 00:00:00:00
    if(daysLeft===0 && hoursLeft===0 && minsLeft===0 && secsLeft===0){

        setTimeout(() => {

            alert('Countdown Done!!!');
            refresh();

        }, '500'); 

    }
}