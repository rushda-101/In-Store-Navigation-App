window.onload = function () {
    const store = localStorage.getItem("selectedStore");
    const product = localStorage.getItem("selectedProduct");

    if (!store || !product) {
        alert("Please select a store and product first.");
        window.location.href = "homepage.html";
        return;
    }

    console.log("Store:", store);
    console.log("Product:", product);

    loadStoreMap(store, product);
};

// MAIN FUNCTION
function loadStoreMap(store, product) {
    const map = document.getElementById("storeMap");

    map.innerHTML = "";

    store = store.trim().toLowerCase();

    if (store === "stevenage") {
        stevenageLayout(map, product);
    } 
    else if (store === "luton") {
        lutonLayout(map, product);
    } 
    else if (store === "watford") {
        watfordLayout(map, product);
    }
}

// STEVENAGE
function stevenageLayout(map, product) {
    map.innerHTML = `
        <div class="map-box entrance" style="top:10px; left:10px; width:90px; height:40px;">Entrance</div>
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

// LUTON
function lutonLayout(map, product){

    map.innerHTML = `
        <div class="map-box entrance" style="top:10px; left:120px; width:120px; height:40px;">Entrance</div>

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

// WATFORD
function watfordLayout(map, product) {
    map.innerHTML = `
        <div class="map-box entrance" style="top:10px; left:120px; width:120px; height:40px;">Entrance</div>
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

// Navigation
function applyNavigation(product, defaultTarget){

    const boxes = document.querySelectorAll(".map-box");

    // highlight selected department
    boxes.forEach(box => {
        if (box.textContent.trim().toLowerCase() === product.toLowerCase()) {
            box.classList.add("highlight");
        }
    });

    // fallback (if product name doesn't match exactly)
    if (!product) {
        document.querySelector("." + defaultTarget)?.classList.add("highlight");
    }

    // YOU ARE HERE
    const entrance = document.querySelector(".entrance");
    if (entrance) {
        entrance.classList.add("you");
        entrance.innerHTML += "<br>YOU ARE HERE";
    }

    // SIMPLE ROUTE (visual)
    createRoute();
}

// ROUTE
function createRoute() {
    const entrance = document.querySelector(".entrance");
    const target = document.querySelector(".highlight");

    if (!entrance || !target) return;

    const mapRect = document.getElementById("storeMap").getBoundingClientRect();
    const start = entrance.getBoundingClientRect();
    const end = target.getBoundingClientRect();

    const route = document.createElement("div");

    route.style.position = "absolute";
    route.style.background = "#01ABDD";

    // horizontal first
    const hLine = document.createElement("div");
    hLine.style.position = "absolute";
    hLine.style.height = "4px";
    hLine.style.background = "#01ABDD";

    hLine.style.left = (start.left - mapRect.left) + "px";
    hLine.style.top = (start.top - mapRect.top + start.height/2) + "px";
    hLine.style.width = (end.left - start.left) + "px";

    // vertical line
    const vLine = document.createElement("div");
    vLine.style.position = "absolute";
    vLine.style.width = "4px";
    vLine.style.background = "#01ABDD";

    vLine.style.left = (end.left - mapRect.left) + "px";
    vLine.style.top = (start.top - mapRect.top + start.height/2) + "px";
    vLine.style.height = (end.top - start.top) + "px";

    const map = document.getElementById("storeMap");
    map.appendChild(hLine);
    map.appendChild(vLine);
}