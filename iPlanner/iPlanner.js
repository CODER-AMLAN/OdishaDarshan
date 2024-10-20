let dayCount = 1;

// Function to add a new day card dynamically
function addDay() {
    const itinerary = document.getElementById('itinerary');

    // Create the day card container
    const dayCard = document.createElement('div');
    dayCard.className = 'day-card';

    // Create the day label
    const dayLabel = document.createElement('div');
    dayLabel.className = 'day-label';
    dayLabel.innerText = `Day ${dayCount}:`;

    // Create the destination and time slot container
    const slotDestinationContainer = document.createElement('div');
    slotDestinationContainer.className = 'slot-destination-container';

    // Create the destination input
    const destinationDiv = document.createElement('div');
    destinationDiv.className = 'destination';

    const destinationLabel = document.createElement('label');
    destinationLabel.setAttribute('for', `destination-${dayCount}`);
    destinationLabel.innerText = 'Destination:';

    const destinationInput = document.createElement('input');
    destinationInput.type = 'text';
    destinationInput.id = `destination-${dayCount}`;
    destinationInput.placeholder = 'Enter destination';

    destinationDiv.appendChild(destinationLabel);
    destinationDiv.appendChild(destinationInput);

    // Create the time slot input
    const timeSlotDiv = document.createElement('div');
    timeSlotDiv.className = 'time-slot';

    const timeSlotLabel = document.createElement('label');
    timeSlotLabel.setAttribute('for', `slot-${dayCount}`);
    timeSlotLabel.innerText = 'Time Slot:';

    const timeSlotInput = document.createElement('input');
    timeSlotInput.type = 'text';
    timeSlotInput.id = `slot-${dayCount}`;
    timeSlotInput.placeholder = 'Enter time slot';

    timeSlotDiv.appendChild(timeSlotLabel);
    timeSlotDiv.appendChild(timeSlotInput);

    // Append the destination and time slot to the slot-destination container
    slotDestinationContainer.appendChild(destinationDiv);
    slotDestinationContainer.appendChild(timeSlotDiv);

    // Append the day label and slot-destination container to the day card
    dayCard.appendChild(dayLabel);
    dayCard.appendChild(slotDestinationContainer);

    // Append the day card to the itinerary
    itinerary.appendChild(dayCard);

    // Increment day count for the next day
    dayCount++;
}

// Function to validate date input
function validateDates() {
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);

    if (endDate < startDate) {
        alert('End date cannot be before start date!');
        return false;
    }
    return true;
}

// Function to download the itinerary with the trip name
function downloadItinerary() {
    const itinerary = document.getElementById('itinerary').innerText;
    const tripName = document.getElementById('trip-name').value || 'My_Trip'; // Get trip name or default

    const blob = new Blob([itinerary], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${tripName}.txt`;
    link.click();
}

// Event listener for submitting the itinerary
document.getElementById('submit-itinerary').addEventListener('click', function () {
    if (validateDates()) {
        downloadItinerary();
    }
});