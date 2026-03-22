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