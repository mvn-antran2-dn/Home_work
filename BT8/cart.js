$tbody = document.getElementById("tbody");

var cartJSON = sessionStorage.getItem("cart");
var cart = JSON.parse(cartJSON);

/**
 * It shows the cart items in the table.
 */
function showCart() {
    var html = "";
    for (var i = 0; i < cart.length; i++) {
        html +=
            "<tr>" +
            "<td>" + (cart.indexOf(cart[i]) + 1) + "</td>" +
            "<td>" + "<img src=" + cart[i][3] + ">" + cart[i][0] + "</td>" +
            "<td>" + cart[i][1] + "</td>" +
            "<td>" + cart[i][2] + "</td>" +
            '<td><button type="button" onclick="removeCartItem(this)"> Delete </button></td>' +
            "</tr>";
    }
    $tbody.innerHTML = html;
}
showCart();

/**
 * It removes the item from the cart
 * @param  - The current item that the user clicked on.
 */
function removeCartItem($this) {
    var $trParent = $this.closest("tr");
    var nameProduct = $trParent.children[1].outerText;
    /* This is the part of the code that checks if the user is sure to remove the item. */
    if (confirm("Are you sure ?")) {
        $tbody.removeChild($trParent);
    }
    /* It's looping through the cart array and remove the item that has the same name as the product
    that we want to remove. */
    for (var i = 0; i < cart.length; i++) {
        if (cart[i][0] == nameProduct) {
            cart.splice(i, 1);
        }
    }
    /* It reloads the page. */
    location.reload();
    /* Saving the cart to sessionStorage. */
    sessionStorage.setItem("cart", JSON.stringify(cart));
}