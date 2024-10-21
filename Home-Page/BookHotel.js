let hotels = [
    {
        "name": "Hotel Trident",
        "price": 5975,
        "location": "Bhubaneswar",
        "rating": "5.0",
        "stars": 5,
        "image": "https://www.tridenthotels.com/-/media/trident-hotel/Gallery-Images/bhubneswar/765x580/swimming-pool.jpg",
        "url": "https://www.makemytrip.com/hotels/trident_bhubaneswar-details-bhubaneshwar.html"
    },
    {
        "name": "Hotel Pushpak",
        "price": 3766,
        "location": "Bhubaneswar",
        "rating": "4.3",
        "stars": 4,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/6c/da/b7/hotel-front-view.jpg?w=700&h=-1&s=1",
        "url": "https://www.hotelpushpak.com"
    },
    {
        "name": "Hotel Mayfair",
        "price": 5165,
        "location": "Bhubaneswar",
        "rating": "5.0",
        "stars": 5,
        "image": "https://res.cloudinary.com/simplotel/image/upload/x_0,y_111,w_2756,h_1550,r_0/q_80,w_900,h_506,dpr_1,f_auto,fl_progressive,c_limit/mayfair-lagoon-bhubaneswar/P_RPX2944_e1r0ny",
        "url": "https://www.mayfairhotels.com"
    },
    {
        "name": "Swosti Premium",
        "price": 5845,
        "location": "Bhubaneswar",
        "rating": "4.9",
        "stars": 5,
        "image": "https://api.blessingsonthenet.com/uploads/hotels/0e4df7b96872013e31c7106cb0f9f50b-1686996286824-Hotel%20Swosti%20Premium,%20Bhubaneswar.jpg",
        "url": "https://www.swostihotels.com"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search-btn').addEventListener('click', function() {
        const priceRange = document.getElementById('price-range').value;
        const checkInDate = document.getElementById('check-in').value;
        const checkOutDate = document.getElementById('check-out').value;

        if (!isValidDate(checkInDate, checkOutDate)) {
            alert("Select Valid Dates");
            return;
        }

        const filteredHotels = filterHotels(priceRange);
        displayHotels(filteredHotels);
    });
});

function isValidDate(checkIn, checkOut) {
    if (checkIn && checkOut) {
        return new Date(checkIn) <= new Date(checkOut);
    }
    return true; // If either date is not set, consider it valid for now
}

function filterHotels(priceRange) {
    return hotels.filter(hotel => {
        if (priceRange === 'all') return true;

        const price = hotel.price;
        if (priceRange === '0-3000') return price < 3000;
        if (priceRange === '3000-6000') return price >= 3000 && price < 6000;
        if (priceRange === '6000-10000') return price >= 6000 && price < 10000;
        if (priceRange === '10000+') return price >= 10000;
    });
}

function displayHotels(hotels) {
    const hotelList = document.getElementById('hotel-list');
    hotelList.innerHTML = ''; // Clear previous results

    if (hotels.length === 0) {
        hotelList.innerHTML = '<p>No hotels found for this selection.</p>';
        return; // Early return if no hotels
    }

    hotels.forEach(hotel => {
        const hotelCard = document.createElement('div');
        hotelCard.className = 'hotel-card';
        hotelCard.innerHTML = `
            <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
            <a href="${hotel.url}" class="hotel-name" target="_blank">${hotel.name}</a>
            <p>Price: ₹${hotel.price}</p>
            <p>Location: ${hotel.location}</p>
            <p>Rating: ${hotel.rating} ${renderStars(hotel.stars)}</p>
        `;
        hotelList.appendChild(hotelCard);
    });
}

function renderStars(stars) {
    let starHTML = '';
    for (let i = 1; i <= 5; i++) {
        starHTML += `<span class="star">${i <= stars ? '★' : '☆'}</span>`;
    }
    return starHTML;
}
