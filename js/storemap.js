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
};