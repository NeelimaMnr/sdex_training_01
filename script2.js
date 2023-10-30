function addRow() {
   
    var userid = document.getElementById("userid").value;
    var id = document.getElementById("id").value;
    var title = document.getElementById("title").value;
    var completed = document.getElementById("completed").checked;

    var tabledata1 = document.querySelector(".tabledata1");


    var newRow = tabledata1.insertRow(-1);


    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = userid;
    cell2.innerHTML = id;
    cell3.innerHTML = title;
    cell4.innerHTML = completed ? "Yes" : "No";

    document.getElementById("userid").value = "";
    document.getElementById("id").value = "";
    document.getElementById("title").value = "";
    document.getElementById("completed").checked = false;
}
