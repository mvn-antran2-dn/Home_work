var productList = [];

function addProduct() {
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
    if (productName == "") {
        alert("Vui lòng nhập tên sản phẩm!");
        return false;
    }
    if (manufactureName == "") {
        alert("Vui lòng nhập tên nhà sản xuất!");
        return false;
    }
    if (categoryName == "") {
        alert("Vui lòng nhập tên loại thiết bị!");
        return false;
    }
    if (price == "") {
        alert("Vui lòng nhập giá sản phẩm");
        return false;
    }
    if (quantity == "") {
        alert("Vui lòng nhập số lượng sản phẩm!");
        return false;
    }
    if (images == "") {
        alert("Vui lòng nhập ảnh sản phẩm!");
        return false;
    }
    if (productList.push(product)) {
        alert("Thêm thành công");
    }
    sessionStorage.setItem("product", JSON.stringify(productList));
}