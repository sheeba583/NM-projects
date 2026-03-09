function addData() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let event = document.getElementById("event").value;
    let mode = document.getElementById("mode").value;

    let table = document.getElementById("table");
    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = email;
    row.insertCell(2).innerHTML = phone;
    row.insertCell(3).innerHTML = event;
    row.insertCell(4).innerHTML = mode;
    row.insertCell(5).innerHTML = dob;

    document.getElementById("form").reset();
}