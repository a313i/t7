/* ==========================================
   FutureX Newsletter
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".newsletter-form");

    if (!form) return;

    const email = form.querySelector("input[type='email']");

    const message = document.createElement("div");

    message.className = "newsletter-message";

    form.appendChild(message);

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const value = email.value.trim();

        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value === "") {

            message.textContent = "يرجى إدخال البريد الإلكتروني.";

            message.style.color = "#facc15";

            return;

        }

        if (!pattern.test(value)) {

            message.textContent = "صيغة البريد الإلكتروني غير صحيحة.";

            message.style.color = "#ef4444";

            return;

        }

        message.textContent = "تم الاشتراك في النشرة البريدية بنجاح.";

        message.style.color = "#22c55e";

        form.reset();

    });

});
