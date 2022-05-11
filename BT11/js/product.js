$result = document.getElementById("result");

var productJSON = sessionStorage.getItem("product");
var productList = JSON.parse(productJSON);

var editData = JSON.parse(sessionStorage.getItem('edit')) || [];

function showProduct() {
    var html = "";

    // if (productList[i].id === editData[0].id) {
    //     productList[i] = editData[0];
    // }

    for (var i = 0; i < productList.length; i++) {
        html += `<tr>
          <td>${i+1}</td> 
          <td>${productList[i].productName}</td>
          <td>${productList[i].manufactureName}</td>
          <td>${productList[i].categoryName}</td>
          <td>${productList[i].price}</td>
          <td>${productList[i].quantity}</td>
          <td><img src=${productList[i].images}></td>
          <td><a href = "edit.html" onclick = "editProduct(${i})">Edit</a></td>
          <td><button onclick = "deleteProduct(${i})">Delete</button></td>
		</tr>`
        $result.innerHTML = html;
    }
}
showProduct();

function deleteProduct(i) {
    if (confirm("Are you sure ?")) {
        productList.splice(i, 1);
    }
    location.reload();
    sessionStorage.setItem("product", JSON.stringify(productList));
}

function searchProduct() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toUpperCase();
    let table = document.getElementById("result");
    let tr = table.getElementsByTagName("tr");
    console.log(tr);
    for (let i = 0; i < tr.length; i++) {
        let td1 = tr[i].getElementsByTagName("td")[1];
        let td2 = tr[i].getElementsByTagName("td")[2];
        if (td1) {
            txtValue = td1.textContent || td1.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
        if (td2) {
            txtValue = td2.textContent || td2.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}