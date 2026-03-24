function scrollLeft(){
    document.getElementById("deptScroll").scrollBy({
        left: -200,
        behavior: "smooth"
    });
}

function scrollRight(){
    document.getElementById("deptScroll").scrollBy({
        left: 200,
        behavior: "smooth"
    });
}