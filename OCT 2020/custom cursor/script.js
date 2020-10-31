const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove',(e)=>{
    cursor.style.left = e.pageX+"px";
    cursor.style.top = e.pageY+"px";
    cursor.setAttribute('data-fromtop', (cursor.offsetTop - scrollY))
});

window.addEventListener('scroll',()=>{
    const fromTop = parseInt(cursor.getAttribute('data-fromtop'));
    cursor.style.top = scrollY+fromTop+"px";
});

window.addEventListener('click',()=>{
    if(cursor.classList.contains('click')){
        cursor.classList.remove('click');
        void cursor.offsetWidth;
        cursor.classList.add('click');
    } else {
        cursor.classList.add('click');
    }
    
})