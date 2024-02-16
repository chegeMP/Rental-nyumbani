function searchCarRentals() {
    const location = document.getElementById('location').value;
    const pickupDate = document.getElementById('pickupDate').value;
    const returnDate = document.getElementById('returnDate').value;

    // Sample API endpoint for car rental data
    const apiUrl = `https://api.example.com/car-rentals?location=${location}&pickupDate=${pickupDate}&returnDate=${returnDate}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayCarRentals(data);
        })
        .catch(error => {
            console.error('Error fetching car rental data:', error);
        });
}

function displayCarRentals(data) {
    const carList = document.getElementById('carList');
    carList.innerHTML = ''; // Clear previous results

    data.forEach(car => {
        const carItem = document.createElement('li');
        carItem.textContent = `${car.name} - Price: ${car.price}`;
        carList.appendChild(carItem);
    });
}
