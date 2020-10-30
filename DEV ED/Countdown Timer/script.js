const newYears="31 Oct 2020";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    
    var totalSeconds = Math.floor((newYearsDate-currentDate)/1000);
    
    var days = Math.floor(totalSeconds/3600/24);
    var hour = Math.floor( totalSeconds/3600)%24;
    var minutes = Math.floor( totalSeconds/60)%60;
    var seconds = Math.floor( totalSeconds%60);
    console.log(days, hour, minutes, seconds);

    document.querySelector('#days').innerHTML = formatTime(days);
    document.querySelector('#hours').innerHTML = formatTime(hour);
    document.querySelector('#minutes').innerHTML = formatTime(minutes);
    document.querySelector('#seconds').innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time<10?(`0${time}`):time;
}

setInterval(() => {
    countdown();
}, 1000);
