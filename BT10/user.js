const url = "https://reqres.in/api/users";
const tbodyFetch = document.getElementById("tbody-fetch");
const tbodyAjax = document.getElementById("tbody-ajax");


function showUsers(users) {
    const content = users.map((user, index) => {
        return `<tr>
  <td>${index + 1}</td>
  <td><img src=${user.avatar} /></td>
  <td>${user.first_name} ${user.last_name}</td>
  <td>${user.email}</td>
  </tr>`;
    });
    tbodyFetch.innerHTML = content.join("");
    tbodyAjax.innerHTML = content.join("");
};

//Fetch
fetch(url)
    .then((res) => res.json())
    .then((result) => {
        const users = result.data;
        showUsers(users);
    })
    .catch((error) => {
        console.log(error);
    });



//Ajax
function loadDoc() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var items = JSON.parse(this.responseText).data;
            showUsers(items);
        }
    };
    http.open("GET", url, true);
    http.send();
};
loadDoc();
