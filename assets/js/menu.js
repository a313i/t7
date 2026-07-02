/* ==========================================
   FutureX Mobile Menu
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    if (!menuButton || !navMenu) return;

    menuButton.addEventListener("click", () => {

        menuButton.classList.toggle("active");
        navMenu.classList.toggle("active");

    });

    // إغلاق القائمة عند الضغط على أي رابط

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            menuButton.classList.remove("active");
            navMenu.classList.remove("active");

        });

    });

    // إغلاق القائمة عند الضغط خارجها

    document.addEventListener("click", (e) => {

        if (
            !menuButton.contains(e.target) &&
            !navMenu.contains(e.target)
        ) {

            menuButton.classList.remove("active");
            navMenu.classList.remove("active");

        }

    });

});
