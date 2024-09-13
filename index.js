// Hamburger Menu
const hamburgerCheckbox = document.querySelector('#hamburger');

const hamburgerToggle = () => {
    const bars = document.querySelector('.fa-bars');
    const xmark = document.querySelector('.fa-xmark');
    const navMenu = document.querySelector('.nav-menu');

    if(hamburgerCheckbox.checked){
        bars.style.display = 'none';
        xmark.style.display = 'block';
        navMenu.style.transform = 'translateY(100px)'
    } else {
        bars.style.display = 'block';
        xmark.style.display = 'none';
        navMenu.style.transform = 'translateY(-100%)'
    }
}

// Dark Mode
const darkmode = document.querySelector('#darkmode')
const darkmodeCircle = document.querySelector('.darkmode-circle');

const darkmodeToggle = () => {
    darkmode.checked
    ? darkmodeCircle.style.transform = 'translateX(100%)'
    : darkmodeCircle.style.transform = 'translateX(0%)';
}

// Custom Cursor
const cursor = document.querySelector('.cursor'),
cursorBig = document.querySelectorAll('.cursor-big');

let mouseX = 0, 
mouseY = 0;

gsap.to({}, 0.016,{
    repeat: -1,
    onRepeat: function(){
        gsap.set(cursor, {
            css:{
                left: mouseX,
                top:mouseY
            }
        })
    }
})

window.addEventListener('mousemove',function(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
})

cursorBig.forEach(link =>{
    link.addEventListener('mouseleave', ()=>{
        cursor.classList.remove('cursor-grow')
    })
    link.addEventListener('mousemove', ()=>{
        cursor.classList.add('cursor-grow')
    })
})

// Responsive Year
const copyrightYear = document.querySelector('.year')
copyrightYear.textContent = new Date().getFullYear();

// Prevent Scroll
setTimeout(()=>{
    document.body.style.overflowY = "auto"
    const overlay = document.querySelector('.overlay');
    
    const counter = document.querySelector('.counter');
    const nav = document.querySelector('.navigation')
    overlay.style.display = 'none';
    counter.style.display = 'none';

    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar)=>{
        bar.style.display = 'none';
    })  
},5000)

// Landing Page Reveal Animation
function startLoader(){
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;
    function updateCounter(){
        if(currentValue === 100){
            return
        }
        currentValue +=  Math.floor(Math.random()*10) + 1;

        if(currentValue > 100){
            currentValue = 100;
        }
        counterElement.textContent=currentValue;

        let delay = Math.floor(Math.random()*200) + 50;
        setTimeout(updateCounter, delay);

    }
    updateCounter()   
}
startLoader();
    gsap.to(".counter", 0.25, {
        delay: 2.5,
        opacity: 0,
    })
    gsap.to(".bar", 1.5, {
        delay: 2.5,
        height :0,
        stagger: {
            amount:0.5
        },
        ease:"power4.inOut"
    })