function scrollBarLeft(){
    const container = document.getElementById("deptScroll");
    container.scrollLeft -= 150;
}

function scrollBarRight(){
    const container = document.getElementById("deptScroll");
    container.scrollLeft += 150;
}


const productData = {
    Womens: ["Dresses", "Fleeces", "Bags", "Jewellery", "Jeans", "Jackets", "Heels", "Boots", "Pyjamas", "Skirts", "Gym-wear", "Leggings"],

    Mens: ["T-Shirts", "Jeans", "Hoodies", "Jackets", "Shoes", "Suits", "Shorts", "Shirts", "Underwear", "Sportswear", "Accessories", "Pajamas"],
    Kids: ["Tops", "Bottoms", "Shoes", "Schoolwear", "Coats", "Pajamas", "Dresses", "Accessories", "Sportswear", "Hoodies", "Jeans", "Shorts"],
    Babys: ["Bodysuits", "Sleepwear", "Sets", "Shoes", "Hats", "Blankets", "Jackets", "Toys", "Accessories", "Socks", "Outfits", "Swimwear"],
    Home: ["Bedding", "Cushions", "Throws", "Storage", "Decor", "Kitchen", "Lighting", "Bath", "Rugs", "Candles", "Frames", "Mirrors"],
    Beauty: ["Makeup", "Skincare", "Haircare", "Nails", "Fragrance", "Tools", "Brushes", "Accessories", "Bodycare", "Bath", "Lips", "Eyes"]
};

function loadProducts(category){
    const grid = document.getElementById("productsGrid");
    grid.innerHTML = ""; // clear previous items

    const items = productData[category];

    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("product-item");

        div.innerHTML = `
            <img src="../images/wdresses.png" alt="${item}">
            <p>${item}</p>
        `;

        grid.appendChild(div);
    });
}