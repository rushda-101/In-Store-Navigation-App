window.onload = function () {
    const store = localStorage.getItem("selectedStore");
    const product = localStorage.getItem("selectedProduct");

    if (!store || !product) {
        alert("Please select a store and product first.");
        window.location.href = "homepage.html";
        return;
    }

    loadStoreMap(store, product);

    // Setup listener for start department input
    setupStartDeptInput();
};

// Map product names to department names
const productToDepartment = {
    // Womens
    "Dresses": "Womens",
    "Shorts": "Womens",
    "Bags": "Womens",
    "Jewellery": "Womens",
    "Jackets": "Womens",
    "Heels": "Womens",
    "Jeans": "Womens",
    "Boots": "Womens",
    "Pyjamas": "Womens",
    "Skirts": "Womens",
    "Gym-Wear": "Womens",
    "Leggings": "Womens",
    // Mens
    "Shirts": "Mens",
    "Trousers": "Mens",
    "Shoes": "Mens",
    "Shorts": "Mens",
    "Hats": "Mens",
    "Accessories": "Mens",
    "Jeans": "Mens",
    "Formal Wear": "Mens",
    "Bags": "Mens",
    "Men's Grooming": "Mens",
    "Gym-Wear": "Mens",
    "Pyjamas": "Mens",
    // Kids
    "Girls Dresses": "Kids",
    "Girls Coats": "Kids",
    "Girls Trousers": "Kids",
    "Girls Shoes": "Kids",
    "Girls PJ's": "Kids",
    "Toys": "Kids",
    "Stationary": "Kids",
    "Boys Tops": "Kids",
    "Boys Coats": "Kids",
    "Boys Trousers": "Kids",
    "Boys Shoes": "Kids",
    "Boys PJ's": "Kids",
    // Babys
    "Girls Sets": "Babys",
    "Girls Leggings": "Babys",
    "Blankets": "Babys",
    "Towels": "Babys",
    "Feeding": "Babys",
    "Boys Sets": "Babys",
    "Boys Shorts": "Babys",
    "Boys Shoes": "Babys",
    // Home
    "Bedding": "Home",
    "Plates": "Home",
    "Mugs": "Home",
    "Lunch Bags": "Home",
    "Cushions": "Home",
    "Faux Plants": "Home",
    "Furniture": "Home",
    "Mirrors": "Home",
    "Bathroom": "Home",
    "Suitcases": "Home",
    "Tech": "Home",
    // Beauty
    "Foundation": "Beauty",
    "Concealer": "Beauty",
    "Eyeliner": "Beauty",
    "Mascara": "Beauty",
    "Lipstick": "Beauty",
    "Make-up Tools": "Beauty",
    "Nails": "Beauty",
    "Skincare": "Beauty",
    "Face Masks": "Beauty",
    "Hair": "Beauty",
    "Bath & Body": "Beauty",
    "Fragrance": "Beauty"
};

// ------------------------
// LOAD STORE MAP
// ------------------------
function loadStoreMap(store, product) {
    const map = document.getElementById("storeMap");
    map.innerHTML = "";

    store = store.trim().toLowerCase();

    if (store === "stevenage") {
        stevenageLayout(map, product);
    } else if (store === "luton") {
        lutonLayout(map, product);
    } else if (store === "watford") {
        watfordLayout(map, product);
    }
}

// ------------------------
// STORE LAYOUTS
// ------------------------
function stevenageLayout(map, product) {
    map.innerHTML = `
        <div class="map-box entrance" style="top:10px; left:10px; width:90px; height:40px;">Entrance </div>
        <div class="map-box lift" style="top:10px; right:10px; width:70px; height:40px;">Lift</div>
        <div class="map-box womens" style="top:60px; left:10px; width:140px; height:120px;">Womens</div>
        <div class="map-box mens" style="top:60px; right:10px; width:140px; height:120px;">Mens</div>
        <div class="map-box kids" style="top:190px; left:10px; width:110px; height:80px;">Kids</div>
        <div class="map-box babys" style="top:190px; left:130px; width:110px; height:60px;">Babys</div>
        <div class="map-box home" style="top:260px; right:10px; width:140px; height:80px;">Home</div>
        <div class="map-box beauty" style="top:350px; right:10px; width:140px; height:60px;">Beauty</div>
        <div class="map-box fitting" style="top:320px; left:10px; width:120px; height:50px;">Fitting</div>
        <div class="map-box till" style="top:415px; right:10px; width:120px; height:50px;">Till</div>
        <div class="map-box exit" style="top:470px; right:10px; width:90px; height:40px;">Exit</div>
    `;
    applyNavigation(product);
}

function lutonLayout(map, product) {
    map.innerHTML = `
        <div class="map-box entrance" style="top:10px; left:120px; width:120px; height:40px;">Entrance </div>
        <div class="map-box lift" style="top:10px; right:10px; width:60px; height:40px;">Lift</div>
        <div class="map-box womens" style="top:70px; left:10px; width:120px; height:170px;">Womens</div>
        <div class="map-box mens" style="top:70px; right:10px; width:120px; height:170px;">Mens</div>
        <div class="map-box kids" style="top:250px; left:10px; width:120px; height:80px;">Kids</div>
        <div class="map-box babys" style="top:250px; right:10px; width:120px; height:80px;">Babys</div>
        <div class="map-box home" style="top:340px; left:10px; width:120px; height:70px;">Home</div>
        <div class="map-box beauty" style="top:340px; right:10px; width:120px; height:70px;">Beauty</div>
        <div class="map-box fitting" style="top:420px; left:10px; width:100px; height:50px;">Fitting</div>
        <div class="map-box till" style="top:420px; right:10px; width:100px; height:50px;">Till</div>
        <div class="map-box exit" style="top:470px; left:120px; width:120px; height:40px;">Exit</div>
    `;
    applyNavigation(product);
}

function watfordLayout(map, product) {
    map.innerHTML = `
        <div class="map-box entrance" style="top:10px; left:120px; width:120px; height:40px;">Entrance </div>
        <div class="map-box lift" style="top:10px; right:10px; width:60px; height:40px;">Lift</div>
        <div class="map-box womens" style="top:60px; left:10px; width:150px; height:100px;">Womens</div>
        <div class="map-box mens" style="top:60px; right:10px; width:130px; height:100px;">Mens</div>
        <div class="map-box kids" style="top:180px; left:10px; width:120px; height:80px;">Kids</div>
        <div class="map-box babys" style="top:180px; right:10px; width:120px; height:60px;">Babys</div>
        <div class="map-box home" style="top:270px; left:50px; width:140px; height:70px;">Home</div>
        <div class="map-box beauty" style="top:260px; right:10px; width:140px; height:60px;">Beauty</div>
        <div class="map-box fitting" style="top:350px; left:10px; width:120px; height:50px;">Fitting</div>
        <div class="map-box till" style="top:350px; left:150px; width:120px; height:50px;">Till</div>
        <div class="map-box exit" style="top:430px; right:10px; width:90px; height:40px;">Exit</div>
    `;
    applyNavigation(product);
}


function resetBoxLabels() {
    document.querySelectorAll(".map-box").forEach(box => {
        // Get ONLY the original label (before any HTML was added)
        const label = box.innerText.split("(YOU ARE HERE)")[0].trim();

        box.innerHTML = label; // reset clean text
        box.classList.remove("you");
    });
}


// ------------------------
// NAVIGATION & ROUTE
// ------------------------
function applyNavigation(product) {
    const deptName = productToDepartment[product] || null;
    if (!deptName) return;

    const targetBox = document.querySelector(`.map-box.${deptName.toLowerCase()}`);
    if (targetBox) targetBox.classList.add("highlight");

    // Determine starting box
    const startInput = document.getElementById("startDept").value.trim().toLowerCase();
    let startBox;

    if (!startInput || startInput === "" || startInput === "entrance") {
        startBox = document.querySelector(".entrance");
    } else {
        startBox = document.querySelector(`.map-box.${startInput}`);
        if (!startBox) startBox = document.querySelector(".entrance");
    }

    // Clear previous "YOU ARE HERE"
    resetBoxLabels();

    // Mark current position
    if (startBox) {
        startBox.classList.add("you");
        startBox.innerHTML += " <br><span style='font-size:8px'>(YOU ARE HERE)</span>";
    }

    // Update header
    const fromDeptName = startBox?.textContent.trim().split(" ")[0] || "Entrance";
    updateHeaderInfo(product, fromDeptName);

    // Draw route
    requestAnimationFrame(() => drawRoute(startBox, targetBox));
}

// Header Info
function updateHeaderInfo(product, fromDept = "Entrance") {
    const toDept = productToDepartment[product] || "Unknown";
    const infoDiv = document.getElementById("navigationInfo");

    infoDiv.innerHTML = `
        From: ${fromDept} Department &nbsp;&nbsp;|&nbsp;&nbsp;
        To: ${toDept} Department &nbsp;&nbsp;|&nbsp;&nbsp;
        Floor: Ground Floor
    `;
}

// ------------------------
// DRAW ROUTE
// ------------------------
function drawRoute(entrance, target) {
    if (!entrance || !target) return;
    const map = document.getElementById("storeMap");

    // Remove old lines
    document.querySelectorAll(".route-line").forEach(el => el.remove());

    const mapRect = map.getBoundingClientRect();
    const start = entrance.getBoundingClientRect();
    const end = target.getBoundingClientRect();

    const startX = start.left - mapRect.left + start.width/2;
    const startY = start.top - mapRect.top + start.height/2;
    const endX = end.left - mapRect.left + end.width/2;
    const endY = end.top - mapRect.top + end.height/2;

    // horizontal line
    const hLine = document.createElement("div");
    hLine.className = "route-line";
    hLine.style.position = "absolute";
    hLine.style.left = Math.min(startX, endX) + "px";
    hLine.style.top = startY + "px";
    hLine.style.width = Math.abs(endX - startX) + "px";
    hLine.style.height = "2px";
    hLine.style.borderBottom = "2px dotted #01ABDD";
    map.appendChild(hLine);

    // vertical line
    const vLine = document.createElement("div");
    vLine.className = "route-line";
    vLine.style.position = "absolute";
    vLine.style.left = endX + "px";
    vLine.style.top = Math.min(startY, endY) + "px";
    vLine.style.width = "2px";
    vLine.style.height = Math.abs(endY - startY) + "px";
    vLine.style.borderRight = "2px dotted #01ABDD";
    map.appendChild(vLine);
}

function setupStartDeptInput() {
    const input = document.getElementById("startDept");

    input.addEventListener("input", () => {
        const dept = input.value.trim();
        let startBox;

        if (!dept) {
            startBox = document.querySelector(".entrance");
        } else {
            startBox = document.querySelector(`.map-box.${dept.toLowerCase()}`);
            if (!startBox) startBox = document.querySelector(".entrance"); // fallback
        }

        // Remove old "YOU ARE HERE" marker
        resetBoxLabels();

        // Add "YOU ARE HERE" to new start
        startBox.classList.add("you");
        startBox.innerHTML += "<br><span style='font-size:8px'> (YOU ARE HERE)</span>";

        // Redraw route from new start to target
        const product = localStorage.getItem("selectedProduct");
        const deptName = productToDepartment[product];
        const targetBox = document.querySelector(`.map-box.${deptName.toLowerCase()}`);
        drawRoute(startBox, targetBox);

        // Update header info
        updateHeaderInfo(product, dept);
    });
}

// Quit Navigation Button
document.getElementById("quitNavBtn").addEventListener("click", () => {
    // Optional: clear saved selections
    localStorage.removeItem("selectedStore");
    localStorage.removeItem("selectedProduct");

    // Redirect to homepage
    window.location.href = "homepage.html";
});