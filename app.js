"use strict();"

const dataTable = document.getElementById('tabel'),
      rows = dataTable.children[1].getElementsByTagName('tr'),
      update = document.getElementById("users2")
    
    var status = document.getElementById('travel');
    let submitButton = document.querySelector("button");

    //CheckBox function
function checkBoxStatus(status) {
if (status.checked) {
 status.value = "YES";
 return false;
} else {
  status.value = "NO";
  return true;
}
}

//submitButton.addEventListener("button", ()=>{

    //if(document.getElementById('travel').checked){
   // document.getElementById('travelHid').disabled = true;
   // }
//})
//function that shows the submit form data in the table
function addRow() {
    let tableRows = document.createElement('tr'),
        td1 = document.createElement('td'),
        td2 = document.createElement('td'),
        td3 = document.createElement('td'),
        td4 = document.createElement('td'),
        td5 = document.createElement('td'),
        td6 = document.createElement('td');
    td1.innerHTML = document.getElementById('first-name').value + " " + document.getElementById('last-name').value;
    td2.innerHTML = document.getElementById('email').value;
    td3.innerHTML = document.getElementById('gender').value;
    td4.innerHTML = document.getElementById("travel").value;
    td5.innerHTML = "<input type='button' id='edt' class='actionBtn' value='Edit' onclick='onEdit(this)'>";
    td6.innerHTML = "<input type='button' id='dlt' class='actionBtn' value='Delete' onclick='onDelete(this)'>";
    tableRows.appendChild(td1);
    tableRows.appendChild(td2);
    tableRows.appendChild(td3);
    tableRows.appendChild(td4);
    tableRows.appendChild(td5);
    tableRows.appendChild(td6);
    
    document.getElementById("users").reset();
    
    dataTable.children[1].insertBefore(tableRows, dataTable.children[0].childNodes[tableRows.length]);
    dataTable.style.display = "block";
    return false;
};



//function that Edit form data in the table
    function onEdit(event){
    if(event.parentElement.parentElement.cells[3].innerHTML ==="YES"){
        document.getElementById("travel2").checked = true;
    }else {
            document.getElementById("travel2").checked = false;
        }
        
    document.getElementById("container").style.display ="none";
    document.getElementById("container2").style.display ="block";     
for(let i = 0; i < rows.length; i++) {
    rows[i].onclick = function editBtn() {
        let name = this.cells[0].innerHTML,
            fullName = name.split(" "),
            firstName = fullName[0],
            lastName = fullName[1],
            f1 = document.getElementById("first-name2"),
            f2 = document.getElementById("last-name2"),
            f3 = document.getElementById("email2"),
            f4 = document.getElementById("gender2");
        f1.value = firstName;
        f2.value = lastName;
        f3.value = this.cells[1].innerHTML;
        f4.value = this.cells[2].innerHTML; 
    }

//function that update form data in the table
 update.onsubmit = function updateRow(){
  document.getElementById("container").style.display = "block" ;
  document.getElementById("container2").style.display = "none";
    
    event.parentElement.parentElement.cells[0].innerHTML = document.getElementById("first-name2").value + " " + document.getElementById("last-name2").value;
    event.parentElement.parentElement.cells[1].innerHTML = document.getElementById("email2").value; 
    event.parentElement.parentElement.cells[2].innerHTML = document.getElementById("gender2").value;
    event.parentElement.parentElement.cells[3].innerHTML = document.getElementById("travel2").value;   
    return false;
 }
 }
    }

    //function that delete form data in the table
function onDelete(event) {
    if (confirm('Are you sure to delete this record ?')) {
         let del = event.parentNode.parentNode.rowIndex;
        document.getElementById("tabel").deleteRow(del);
    };
}

