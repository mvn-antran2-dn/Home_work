$edit = document.getElementsByClassName("create-product")[0];
var productJSON = sessionStorage.getItem("product");
var productList = JSON.parse(productJSON);

var html = "";
html += `<form method="post" class="MyForm">
            <h3>Edit Product</h3>
            
            <label>Product Name: </label>
            <input type="text" class="product-name" name="product-name" placeholder="Enter product name" value="${productList[0].productName}">

            <label>Manufacturer Name: </label>
            <input type="text" class="manufacturer-name" name="manufacturer-name" placeholder="Enter Manufacture name" value="${productList[0].manufactureName}">

            <label>Category Name: </label>
            <input type="text" class="category-name" name="Category-name" placeholder="Enter Category name" value="${productList[0].categoryName}">

            <div class="form-group">
                <label>Price:</label>
                <input type="number" name="price" class="price" placeholder="Enter price" value="${productList[0].price}">
            </div>
            <div class="form-group ">
                <label>Quantity:</label>
                <input type="number" name="quantity " class="quantity" placeholder="Enter quantity " value="${productList[0].quantity}">
            </div>
            <label>Images: </label>
            <input type="file" class="file-images" aria-label="File browser example " value="${productList[0].images}">

            <div class="form-group ">
                <button type="button" onclick="editProductItem()" class="btn-add">Edit Product</button>
                <a href="./product.html" type="back" class="btn-back">Back</a>
            </div>
        </form>`;

$edit.innerHTML = html;

var newData = [];

function editProductItem() {
    var productName = document.getElementsByClassName('product-name')[0].value;
    var manufactureName = document.getElementsByClassName('manufacturer-name')[0].value;
    var categoryName = document.getElementsByClassName('category-name')[0].value;
    var price = document.getElementsByClassName('price')[0].value;
    var quantity = document.getElementsByClassName('quantity')[0].value;
    var images = document.getElementsByClassName('file-images')[0].value;
    var product = {
        'productName': productName,
        'manufactureName': manufactureName,
        'categoryName': categoryName,
        'price': price,
        'quantity': quantity,
        'images': images
    };
    if (images == "") {
        alert("Vui lòng nhập ảnh sản phẩm!");
        return false;
    }
    if (newData.push(product)) {
        alert("Thêm thành công");
    }
    sessionStorage.setItem("edit", JSON.stringify(newData));
    console.log(newData);
}