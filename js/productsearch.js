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
        { name: "Leggings", img: "../images/wleggings.png" },
    ],
    Mens: [
        { name: "Shirts", img: "../images/shirts.png" },
        { name: "Trousers", img: "../images/trousers.png" },
        { name: "Shoes", img: "../images/mens-shoes.png" },
        { name: "Hats", img: "../images/mens-hats.png" },
        { name: "Accessories", img: "../images/mens-accessories.png" }
    ],
    Kids: [
        { name: "Tops", img: "../images/kids-tops.png" },
        { name: "Bottoms", img: "../images/kids-bottoms.png" },
        { name: "Shoes", img: "../images/kids-shoes.png" },
        { name: "Dresses", img: "../images/kids-dresses.png" }
        // add more as needed
    ],
    Babys: [
        { name: "Bodysuits", img: "../images/bodysuits.png" },
        { name: "Sleepwear", img: "../images/sleepwear.png" }
    ],
    Home: [
        { name: "Bedding", img: "../images/bedding.png" },
        { name: "Cushions", img: "../images/cushions.png" }
    ],
    Beauty: [
        { name: "Makeup", img: "../images/makeup.png" },
        { name: "Skincare", img: "../images/skincare.png" }
    ]
};

// FUNCTION TO LOAD CATEGORY
function loadCategory(category) {
    const container = document.querySelector(".products-grid");
    container.innerHTML = ""; // clear previous items

    if (!items[category]) return; // safety check

    items[category].forEach(item => {
        const div = document.createElement("div");
        div.classList.add("product-item");

        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <p>${item.name}</p>
        `;

        container.appendChild(div);
    });
}

// ATTACH BUTTON CLICK EVENTS
document.querySelectorAll(".departments-bar button").forEach(btn => {
    btn.addEventListener("click", () => {
        loadCategory(btn.textContent); // loads correct category
    });
});