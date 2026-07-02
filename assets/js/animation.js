/* ==========================================
   FutureX Animations
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const animatedItems = document.querySelectorAll(".animate");

    if (animatedItems.length === 0) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("fade-up");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    animatedItems.forEach(item => {

        observer.observe(item);

    });

});


/* ===============================
   Floating Effect
=============================== */

document.querySelectorAll(".float").forEach(item => {

    item.style.animationDelay =
        (Math.random() * 2).toFixed(2) + "s";

});


/* ===============================
   Hover Tilt
=============================== */

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height / 2) / 20;

        const rotateY = (x - rect.width / 2) / 20;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0)";

    });

});


/* ===============================
   Navbar Blur On Scroll
=============================== */

const navbar = document.querySelector("header");

if(navbar){

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.classList.add("glass");

}else{

navbar.classList.remove("glass");

}

});

}
