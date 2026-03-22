// List of stores with lat/lon and address
const stores = [
    { name: "Stevenage", lat: 51.9038, lon: -0.2026, address: "6 - 8 Town Square, Stevenage" },
    { name: "Luton", lat: 51.8787, lon: -0.4200, address: "10 High Street, Luton" },
    { name: "Watford", lat: 51.6565, lon: -0.3903, address: "5 Town Center, Watford" }
];

// Initialize map
let map = L.map('map').setView([51.5, -0.1], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Haversine formula to calculate distance in miles
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 3958.8; // Earth radius in miles
    const toRad = deg => deg * Math.PI / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon/2)**2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Sort stores by nearest distance
function sortStoresByDistance(userLat, userLon){
    return stores.map(store => {
        return {...store, distance: getDistance(userLat, userLon, store.lat, store.lon).toFixed(2)};
    }).sort((a,b) => a.distance - b.distance);
}

// Search using Nominatim
async function searchLocation(query){
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data[0];
}

// Handle search click
async function handleSearch(){
    const query = document.getElementById("searchInput").value;
    if(!query) return alert("Please enter a location.");

    const location = await searchLocation(query);
    const userLat = parseFloat(location.lat);
    const userLon = parseFloat(location.lon);

    map.setView([userLat, userLon], 12);

    // Clear old markers
    map.eachLayer(layer => { if(layer instanceof L.Marker) map.removeLayer(layer); });

    L.marker([userLat, userLon]).addTo(map).bindPopup("You are here");

    // Sort stores
    const sortedStores = sortStoresByDistance(userLat, userLon);

    // Add nearest store marker
    L.marker([sortedStores[0].lat, sortedStores[0].lon]).addTo(map).bindPopup(sortedStores[0].name);

    // Display info
    const storeContainer = document.getElementById("store-details");
    storeContainer.innerHTML = "";

    // Nearest store
    const nearestHTML = `
        <div class="store-info">
            <p class="store-name">${sortedStores[0].name}</p>
            <p class="store-distance">Distance: ${sortedStores[0].distance} miles</p>
            <p class="store-address">Address: ${sortedStores[0].address}</p>
        </div>
    `;
    storeContainer.innerHTML += nearestHTML;

    // Nearby stores
    if(sortedStores.length > 1){
        storeContainer.innerHTML += `<div class="nearby-stores"><h3>Nearby Stores</h3></div>`;
        sortedStores.slice(1).forEach(store => {
            storeContainer.innerHTML += `
            <div class="store-info">
                <p class="store-name">${store.name}</p>
                <p class="store-distance">Distance: ${store.distance} miles</p>
                <p class="store-address">Address: ${store.address}</p>
            </div>`;
        });
    }
}