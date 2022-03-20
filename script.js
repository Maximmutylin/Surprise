'use strict'
$(document).ready(function(){ 

    $('.wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
    })

    const heart = document.querySelector('.heart');
    const container = document.querySelector('.first-screen');
  
    function animationHeart() {
        const countdownContainer = document.createElement('div');
        container.append(countdownContainer);
        countdownContainer.classList.add("first-title");

        let counter = 3;
        let timer = setInterval(() => {
            countdownContainer.innerHTML = `Магия начнется через
            ${counter--}`;
            }, 1000);
        setTimeout(() => { clearInterval(timer);  }, 5000);
        
        heart.classList.add('heart__active');
    }
    heart.addEventListener('click', animationHeart);

    const photos = document.querySelectorAll('.none');

    function animationFirstPhoto(){
        container.style = "display:none";
        photos[0].classList.add('first-img');
        photos[0].addEventListener('animationend', function() {
            photos[0].classList.add('visible-first-img');
            setTimeout(() => {
                photos[0].style = 'display: none;';
            }, 5000);
            photos[0].addEventListener('animationend', function() {
                photos[1].classList.add('second-img');
                photos[1].addEventListener('animationend', function(){
                    setTimeout(() => {
                        photos[1].classList.add('visible-second-img')
                        setTimeout(() => {
                            photos[1].style = 'display: none;';
                        }, 3000);
                    }, 2000);  
                })
                photos[1].addEventListener('animationend', function(){
                    photos[2].classList.add('third-img');
                    photos[2].addEventListener('animationend', function() {
                        photos[2].style = 'display: none;';
                    })
                    photos[2].addEventListener('animationend', function() {
                        const finalText = document.querySelector('.text');
                        finalText.classList.add('text__animation');
                        const slider = document.querySelector('.wrapper');
                        slider.classList.add('wrapper__animation');
                    })
                })
            })
        })
    }
    heart.addEventListener('animationend', animationFirstPhoto);
   
    
})