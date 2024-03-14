// Panier //
let articlesCount = 0;
let nbr_article = document.getElementById("nbr-article");
let btn_plus = document.querySelectorAll(".btn-plus");
let btn_minus = document.querySelectorAll(".btn-minus");
let prix_element = document.getElementById("prix");
let prix_initial = parseFloat(prix_element.innerText);

// Ajouter un article //
btn_plus.forEach(button => {
    button.addEventListener("click", () => {
        articlesCount++;
        nbr_article.innerText = `x ${articlesCount}`;
        updatePrice();
    });
});
// Retirer un article //
btn_minus.forEach(button => {
    button.addEventListener("click", () => {
        if (articlesCount > 0) {
            articlesCount--;
            nbr_article.innerText = `x ${articlesCount}`;
            updatePrice();
        }
    });
});

// Update //
function updatePrice() {
    let totalPrice = prix_initial * articlesCount;
    prix_element.innerText = totalPrice.toFixed(2) + " €";
}