window.onload = function () {
    localStorage.removeItem("selectedProduct");
};


// SCROLL FUNCTIONS
function scrollBarLeft() {
    const container = document.getElementById("deptScroll");
    container.scrollLeft -= 150;
}

function scrollBarRight() {
    const container = document.getElementById("deptScroll");
    container.scrollLeft += 150;
}

// ITEMS DATA
const items = {
    Womens: [
        { name: "Dresses", img: "../images/wdresses.png" },
        { name: "Shorts", img: "../images/wshorts.png" },
        { name: "Bags", img: "../images/wbags.png" },
        { name: "Jewellery", img: "../images/wjewellery.png" },
        { name: "Jackets", img: "../images/wjackets.png" },
        { name: "Heels", img: "../images/wheels.png" },
        { name: "Jeans", img: "../images/wjeans.png" },
        { name: "Boots", img: "../images/wboots.png" },
        { name: "Pyjamas", img: "../images/wpyjamas.png" },
        { name: "Skirts", img: "../images/wskirts.png" },
        { name: "Gym-Wear", img: "../images/wgymwear.png" },
        { name: "Leggings", img: "../images/wleggings.png" }
    ],
    Mens: [
        { name: "Shirts", img: "../images/mshirts.png" },
        { name: "Trousers", img: "../images/mtrousers.png" },
        { name: "Shoes", img: "../images/mshoes.png" },
        { name: "Shorts", img: "../images/mshorts.png" },
        { name: "Hats", img: "../images/mhats.png" },
        { name: "Accessories", img: "../images/maccessories.png" },
        { name: "Jeans", img: "../images/mjeans.png" },
        { name: "Formal Wear", img: "../images/mformal.png" },
        { name: "Bags", img: "../images/mbags.png" },
        { name: "Men's Grooming", img: "../images/mgrooming.png" },
        { name: "Gym-Wear", img: "../images/mgymwear.png" },
        { name: "Pyjamas", img: "../images/mpyjamas.png" }
    ],
    Kids: [
        { name: "Girls Dresses", img: "../images/gdresses.png" },
        { name: "Girls Coats", img: "../images/gcoats.png" },
        { name: "Girls Trousers", img: "../images/gtrousers.png" },
        { name: "Girls Shoes", img: "../images/gshoes.png" },
        { name: "Girls PJ's", img: "../images/gpyjamas.png" },
        { name: "Toys", img: "../images/ktoys.png" },
        { name: "Stationary", img: "../images/kstationary.png" },
        { name: "Boys Tops", img: "../images/btops.png" },
        { name: "Boys Coats", img: "../images/bcoats.png" },
        { name: "Boys Trousers", img: "../images/btrousers.png" },
        { name: "Boys Shoes", img: "../images/bshoes.png" },
        { name: "Boys PJ's", img: "../images/bpyjamas.png" }
    ],
    Babys: [
        { name: "Girls Dresses", img: "../images/bgdresses.png" },
        { name: "Girls Sets", img: "../images/bgsets.png" },
        { name: "Girls Leggings", img: "../images/bgleggings.png" },
        { name: "Girls Shoes", img: "../images/bgshoes.png" },
        { name: "Blankets", img: "../images/bblankets.png" },
        { name: "Toys", img: "../images/btoys.png" },
        { name: "Towels", img: "../images/btowels.png" },
        { name: "Feeding", img: "../images/bfeeding.png" },
        { name: "Boys Tops", img: "../images/bbtops.png" },
        { name: "Boys Sets", img: "../images/bbsets.png" },
        { name: "Boys Shorts", img: "../images/bbshorts.png" },
        { name: "Boys Shoes", img: "../images/bbshoes.png" },

    ],
    Home: [
        { name: "Bedding", img: "../images/hbedding.png" },
        { name: "Plates", img: "../images/hplates.png" },
        { name: "Mugs", img: "../images/hmugs.png" },
        { name: "Lunch Bags", img: "../images/hlunchbags.png" },
        { name: "Blankets", img: "../images/hblankets.png" },
        { name: "Cushions", img: "../images/hcushions.png" },
        { name: "Faux Plants", img: "../images/hplants.png" },
        { name: "Furniture", img: "../images/hfurniture.png" },
        { name: "Mirrors", img: "../images/hmirrors.png" },
        { name: "Bathroom", img: "../images/hbathroom.png" },
        { name: "Suitcases", img: "../images/hsuitcases.png" },
        { name: "Tech", img: "../images/htech.png" }
    ],
    Beauty: [
        { name: "Foundation", img: "../images/mfoundation.png" },
        { name: "Concealer", img: "../images/mconcealer.png" },
        { name: "Eyeliner", img: "../images/meyeliner.png" },
        { name: "Mascara", img: "../images/mmascara.png" },
        { name: "Lipstick", img: "../images/mlipstick.png" },
        { name: "Make-up Tools", img: "../images/mmtools.png" },
        { name: "Nails", img: "../images/mnails.png" },
        { name: "Skincare", img: "../images/mskincare.png" },
        { name: "Face Masks", img: "../images/mfmasks.png" },
        { name: "Hair", img: "../images/mhair.png" },
        { name: "Bath & Body", img: "../images/mbathbody.png" },
        { name: "Fragrance", img: "../images/mfragrance.png" }
    ]
};

// FUNCTION TO LOAD CATEGORY
function loadCategory(category) {
    const container = document.getElementById("productsGrid");
    container.innerHTML = "";

    const categoryItems = items[category];

    for (let i = 0; i < 12; i++) {
        const div = document.createElement("div");
        div.classList.add("product-item");

        if (categoryItems[i]) {
            div.innerHTML = `
                <img src="${categoryItems[i].img}">
                <p>${categoryItems[i].name}</p>
            `;

            div.onclick = (e) => selectProduct(categoryItems[i].name, e);
        }

        container.appendChild(div);
    }
}

// NAVIGATION CONTROL
function checkAndGoToMap() {
    const store = localStorage.getItem("selectedStore");
    const product = localStorage.getItem("selectedProduct");

    if (store && product) {
        window.location.href = "storemap.html";
    }
}

// PRODUCT SELECTION
function selectProduct(productName, event) {
    localStorage.setItem("selectedProduct", productName);

    document.querySelectorAll(".product-item").forEach(item => {
        item.classList.remove("selected");
    });

    event.currentTarget.classList.add("selected");

    document.getElementById("continueBtn").style.display = "block";
}

// HANDLING NAVIGATION
function handleContinue() {
    const store = localStorage.getItem("selectedStore");
    const product = localStorage.getItem("selectedProduct");

    if (store && product) {
        window.location.href = "storemap.html";
    } else if (!store) {
        window.location.href = "storesearch.html";
    }
}