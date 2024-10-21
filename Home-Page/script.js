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

const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');

// Set the sidebar to be collapsed on initial load
sidebar.classList.add('collapsed');
toggleBtn.textContent = ' >> '; // Set the toggle button to the collapsed icon

// Toggle the sidebar state on button click
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');

    // Change button text based on sidebar state
    if (sidebar.classList.contains('collapsed')) {
        toggleBtn.textContent = ' >> '; // Show collapse icon when collapsed
    } else {
        toggleBtn.textContent = ' << '; // Show expand icon when expanded
    }
});

// Show/hide the city input section when Local Travel Guide button is clicked
// const localTravelGuideBtn = document.getElementById('localTravelGuideBtn');
// const cityInput = document.getElementById('cityInput');

// localTravelGuideBtn.addEventListener('click', function () {
//     cityInput.style.display = cityInput.style.display === 'none' ? 'block' : 'none';
// });

const localTravelGuideBtn = document.getElementById('localTravelGuideBtn');
const cityInput = document.getElementById('cityInput');
const submitCityBtn = document.getElementById('submitCityBtn');
const cityName = document.getElementById('cityName');

localTravelGuideBtn.addEventListener('click', function () {
    cityInput.style.display = cityInput.style.display === 'none' ? 'block' : 'none';
});

submitCityBtn.addEventListener('click', function () {
    const city = cityName.value.toLowerCase();  // Convert input to lowercase for consistency
    if (city === "bhubaneswar") {
        window.location.href = "local-attractionBbsr.html"; 
    } else if (city === "rourkela") {
        window.location.href = "local-attractionRkl.html";
    } else {
        alert("City not found.");  
    }
});
