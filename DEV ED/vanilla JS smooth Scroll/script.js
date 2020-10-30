function smoothScroll(target, duration){
    
    var target= document.querySelector(target);
    var targetposition = target.getBoundingClientRect();
    var startPosition = window.pageYOffset;
    var distance = targetposition -startPosition;
    var startTimr = null;
    function animation(currentTime){
        if(startTime === null) startTimr = currentTime;
        var timeElapsed = currentTime-startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if 
    };
    
        function ease(t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t + b;
            t--;
            return -c/2 * (t*(t-2) - 1) + b;
        };

    requestAnimationFrame(animation)
}
document.querySelector('.section1').addEventListener('click', (e){
    e.preventDefault();
    smoothScroll('.section2',1000)
})






