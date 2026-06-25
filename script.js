document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        message.textContent =
            "Thank you for contacting Void Heart Labs. We'll be in touch soon.";

        form.reset();
    });
});
