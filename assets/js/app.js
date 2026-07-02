/* ==========================================
   FutureX Main App
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // السنة الحالية في Footer
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // العودة إلى أعلى الصفحة
    const scrollTop = document.querySelector(".scroll-top");

    if (scrollTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {
                scrollTop.classList.add("show");
            } else {
                scrollTop.classList.remove("show");
            }

        });

        scrollTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    // تأثير ظهور العناصر عند التمرير
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("fade-up");
            }

        });

    }, {
        threshold: 0.2
    });

    document.querySelectorAll(".animate").forEach(el => {

        observer.observe(el);

    });

});
