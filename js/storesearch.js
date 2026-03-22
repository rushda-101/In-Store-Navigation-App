async function searchLocation(query) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;
    
    const response = await fetch(url);
    const data = await response.json();

    return data[0]; // first result
}

const stores = [
    { name: "Stevenage", lat: 51.9038, lon: -0.2026 },
    { name: "Luton", lat: 51.8787, lon: -0.4200 },
    { name: "Watford", lat: 51.6565, lon: -0.3903 }
];

function getDistance(lat1, lon1, lat2, lon2) {
    return Math.sqrt(
        (lat2 - lat1) ** 2 + (lon2 - lon1) ** 2
    );
}

function findNearest(userLat, userLon) {
    let nearest = stores[0];
    let minDist = Infinity;

    stores.forEach(store => {
        const dist = getDistance(userLat, userLon, store.lat, store.lon);
        if (dist < minDist) {
            minDist = dist;
            nearest = store;
        }
    });

    return nearest;
}

let map = L.map('map').setView([51.5, -0.1], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

async function handleSearch() {
    const query = document.getElementById("searchInput").value;

    const location = await searchLocation(query);

    const userLat = location.lat;
    const userLon = location.lon;

    const nearest = findNearest(userLat, userLon);

    map.setView([userLat, userLon], 12);

    L.marker([userLat, userLon]).addTo(map)
        .bindPopup("You are here");

    L.marker([nearest.lat, nearest.lon]).addTo(map)
        .bindPopup(nearest.name);
}