/* ==========================================
   FutureX Contact Form
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".contact-form");

    if (!form) return;

    const inputs = form.querySelectorAll("input, textarea");

    const status = document.createElement("div");

    status.className = "contact-message";

    form.appendChild(status);

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                valid = false;

                input.style.border = "2px solid #ef4444";

            } else {

                input.style.border = "2px solid #22c55e";

            }

        });

        if (!valid) {

            status.textContent = "يرجى ملء جميع الحقول.";

            status.style.color = "#ef4444";

            return;

        }

        status.textContent = "تم إرسال رسالتك بنجاح.";

        status.style.color = "#22c55e";

        form.reset();

        inputs.forEach(input => {

            input.style.border = "";

        });

    });

});
