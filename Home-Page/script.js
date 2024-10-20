document.addEventListener("DOMContentLoaded", function () {

    // Function for toggling visibility of the top spots content
    function toggleContent(button, content) {
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
            button.textContent = "See Less...";
        } else {
            content.style.display = "none";
            button.textContent = "See More...";
        }
    }

    // For Top 5 Places (Top Spots)
    const spotsButton = document.querySelector('.toggle-button');
    const spotsContent = document.querySelector('.content');

    spotsButton.addEventListener('click', function () {
        toggleContent(spotsButton, spotsContent);
    });

    // For Top 5 Cuisines
    const cuisineButton = document.querySelector('.cuisine-toggle-button');
    const cuisineContent = document.querySelector('.cuisine-content');

    cuisineButton.addEventListener('click', function () {
        toggleContent(cuisineButton, cuisineContent);
    });

});
