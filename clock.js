//Controller
const getInput = () => {
    const days = +document.querySelector('#days').value;
    const hours = +document.querySelector('#hours').value;
    const mins = +document.querySelector('#mins').value;
    const secs = +document.querySelector('#secs').value;
  

    validate(days, hours, mins, secs);

}

const validate = (days, hours, mins, secs) => {

    if(days<0 || hours<0 || mins<0 || secs<0) alert('Values cannot be negative');
    else if(days===0 && hours===0 && mins===0 && secs===0) alert('Try a numbers above 0');
    else calculateCount(days, hours, mins, secs);
}

const calculateCount = (days, hours, mins, secs) => {

    let totalSecs = secs + (mins*60) + (hours*60*60) + (days*60*60*24);

    while(totalSecs!==0){

        totalSecs--;

        setInterval(() => {
            countDown(totalSecs);
        },"1000", totalSecs)
    }
    
}

const countDown = (runningTotal) => {

    secsLeft = Math.floor(runningTotal%60);
    runningTotal -= secsLeft;

    daysLeft = Math.floor(runningTotal/86400);
    runningTotal -= daysLeft*86400;

    hoursLeft = Math.floor(runningTotal/3600);
    runningTotal -= hoursLeft*3600;

    minsLeft = Math.floor(runningTotal/60);
    


    return updateClock(daysLeft,hoursLeft,minsLeft,secsLeft);
    
}

//View
const updateClock = (daysLeft,hoursLeft,minsLeft,secsLeft) => {
    console.log(daysLeft,hoursLeft,minsLeft,secsLeft)
}

const render = () => {
    let clockDis = document.querySelector('#clock');
        
    clockDis.innerText = '00:00:00'
}

render();