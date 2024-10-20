document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-button");
    const content = document.querySelector(".content");

    toggleButton.addEventListener("click", function () {
        if (content.style.display === "none") {
            content.style.display = "block"; // Show content
            toggleButton.textContent = "See Less..."; // Change button text
        } else {
            content.style.display = "none"; // Hide content
            toggleButton.textContent = "See More..."; // Change button text
        }
    });
});
