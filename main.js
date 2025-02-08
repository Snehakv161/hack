// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    console.log("Accessible Learning Website Loaded Successfully!");

    // Smooth Scroll for Navigation Links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            const target = document.querySelector(this.hash);
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Add Keyboard Navigation for Accessibility
    document.querySelectorAll("section").forEach(section => {
        section.setAttribute("tabindex", "0"); // Makes sections focusable via Tab key

        // Click or Keyboard Activation for Notifications
        section.addEventListener("click", function () {
            showNotification('You are exploring "${this.querySelector("h1").innerText}" resources.');
        });

        section.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                showNotification('You are exploring "${this.querySelector("h1").innerText}" resources.');
            }
        });
    });

    // Function to Show Notifications
    function showNotification(message) {
        let existingNotification = document.querySelector(".notification");
        if (existingNotification) {
            existingNotification.remove();
        }

        let notification = document.createElement("div");
        notification.className = "notification";
        notification.setAttribute("aria-live", "polite"); // Accessibility for screen readers
        notification.innerText = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
});