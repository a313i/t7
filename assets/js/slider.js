/* ==========================================
   FutureX Slider
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelector(".slider");

    if (!slider) return;

    const slides = slider.querySelectorAll(".slide");

    const prev = slider.querySelector(".prev");

    const next = slider.querySelector(".next");

    let current = 0;

    function showSlide(index){

        slides.forEach((slide)=>{

            slide.classList.remove("active");

        });

        slides[index].classList.add("active");

    }

    showSlide(current);

    if(next){

        next.addEventListener("click",()=>{

            current++;

            if(current >= slides.length){

                current = 0;

            }

            showSlide(current);

        });

    }

    if(prev){

        prev.addEventListener("click",()=>{

            current--;

            if(current < 0){

                current = slides.length - 1;

            }

            showSlide(current);

        });

    }

    // Auto Play

    setInterval(()=>{

        current++;

        if(current >= slides.length){

            current = 0;

        }

        showSlide(current);

    },5000);

});
