// Details //
let articleCount = 0;
let cart = document.getElementById("cart");
let btn_add_to_cart = document.getElementById("add_to_cart");

// Ajouter un article //
btn_add_to_cart.addEventListener("click", () => {
    articleCount++;
    cart.innerHTML = `<i class='bx bxs-shopping-bag'></i> ${articleCount}`;
});
