$productList = document.querySelector(".products-list");

var products = [{
        id: 1,
        title: "Lorem ipsum book four",
        price: 4.26,
        img: "https://flone.reactdemo.hasthemes.com/assets/img/product/books/4.jpg",
    },
    {
        id: 2,
        title: "Lorem ipsum book six",
        price: 4.95,
        img: "https://flone.reactdemo.hasthemes.com/assets/img/product/books/6.jpg",
    },
    {
        id: 3,
        title: "Lorem ipsum book eight",
        price: 8.07,
        img: "https://flone.reactdemo.hasthemes.com/assets/img/product/books/8.jpg",
    },
    {
        id: 4,
        title: "Lorem ipsum book five",
        price: 6.02,
        img: "https://flone.reactdemo.hasthemes.com/assets/img/product/books/5.jpg",
    },
    {
        id: 5,
        title: "Lorem ipsum book three",
        price: 4.26,
        img: "https://flone.reactdemo.hasthemes.com/assets/img/product/books/3.jpg",
    },
    {
        id: 6,
        title: "Lorem ipsum book one",
        price: 4.95,
        img: "https://flone.reactdemo.hasthemes.com/assets/img/product/books/1.jpg",
    },
    {
        id: 7,
        title: "Lorem ipsum book two",
        price: 8.07,
        img: "https://flone.reactdemo.hasthemes.com/assets/img/product/books/2.jpg",
    },
    {
        id: 8,
        title: "Lorem ipsum book seven",
        price: 6.02,
        img: "https://flone.reactdemo.hasthemes.com/assets/img/product/books/7.jpg",
    },
];

var html = "";
for (var i = 0; i < products.length; i++) {
    html +=
        '<li class="product-item col-3">' +
        '<div class="product-image">' +
        '<a href="#"><img src =' + products[i].img + ' class="product-img"></a>' +
        "</div>" +
        '<div class="product-info">' +
        '<h3 class="product-title">' + products[i].title + " </h3>" +
        '<p>$<span class="product-price">' + products[i].price + "</span></p>" +
        "</div>" +
        '<div class="item-btn">' +
        '<button class="btn-product btn-primary" onclick="addCart(this)" type="button">Add to Cart</button>' +
        "</div>" +
        "</li>";
}

$productList.innerHTML = html;

var myCart = [];

/**
 * Add the product to the cart
 * @param  - The button that was clicked.
 */
function addCart($this) {

    /* This is the code that add the product to the cart. */
    var current = $this.parentElement.parentElement;
    var productImage = current.children[0].children[0].children[0];
    var srcImage = productImage.src;
    var productInfo = current.children[1];
    var nameProduct = productInfo.children[0].outerText;
    var amountProduct = 1;
    var priceProduct = productInfo.children[1].lastElementChild.outerText;
    var itemCart = [nameProduct, amountProduct, priceProduct, srcImage];

    /* This is the code that add the product to the cart. */
    myCart.push(itemCart);
    var countProduct = myCart.length;
    document.querySelector(".count-product").textContent = countProduct;
    $this.disabled = true;
    sessionStorage.setItem("cart", JSON.stringify(myCart));
    console.log($this);
}

//save the number of products in the cart
function showCountProduct() {
    var cart = JSON.parse(sessionStorage.getItem("cart"));
    document.querySelector(".count-product").textContent = cart.length;
}

showCountProduct();