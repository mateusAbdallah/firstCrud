var selectecRow = null;

function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();

    if(selectecRow === null){
        insertNewRecord(formData)
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["dataDeNascimento"] = document.getElementById("dataDeNascimento").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.name;

    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.email; 

    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.dataDeNascimento;

    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td){
    selectecRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectecRow.cells[0].innerHTML;
    document.getElementById("email").value = selectecRow.cells[1].innerHTML;
    document.getElementById("dataDeNascimento").value = selectecRow.cells[2].innerHTML; 
}

function updateRecord(formData){
    selectecRow.cells[0].innerHTML = formData.name;
    selectecRow.cells[1].innerHTML = formData.email;
    selectecRow.cells[2].innerHTML = formData.dataDeNascimento;
}

function onDelete(td){
    if(confirm("Tem certeza que deseja deletar?")){
        row = td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
    }   
    resetForm(); 
}

function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("dataDeNascimento").value = "";
} 