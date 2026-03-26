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
        { name: "Makeup", img: "../images/makeup.png" },
        { name: "Skincare", img: "../images/skincare.png" }
    ]
};

// FUNCTION TO LOAD CATEGORY
function loadCategory(category) {
    const container = document.getElementById("productsGrid");
    container.innerHTML = "";

    if (!items[category]) return;

    const categoryItems = items[category];

    // Loop through 12 slots (3x4 grid)
    for (let i = 0; i < 12; i++) {
        const div = document.createElement("div");
        div.classList.add("product-item");

        if (categoryItems[i]) {
            // real item
            div.innerHTML = `
                <img src="${categoryItems[i].img}" alt="${categoryItems[i].name}">
                <p>${categoryItems[i].name}</p>
            `;
        } else {
            // empty placeholder (keeps layout perfect)
            div.innerHTML = `
                <img src="" style="visibility:hidden;">
                <p style="visibility:hidden;">empty</p>
            `;
        }

        container.appendChild(div);
    }
}
