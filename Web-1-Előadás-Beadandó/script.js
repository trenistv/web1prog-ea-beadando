
var selectedRow = null 
function onFormSubmit() { 
    if (validate()) { 
        var formData = readFormData(); 
        if (selectedRow == null) 
            insertNewRecord(formData); 
        else 
            updateRecord(formData); 
        resetForm(); 
    } 
} 

function sortTable(index) { 
    var table, rows, switching, i, x, y, shouldSwitch; 
    table = document.getElementById("table"); 
    switching = true; 
    while (switching) { 
        switching = false; 
        rows = table.rows; 
        for (i = 1; i < (rows.length - 1); i++) { 
            shouldSwitch = false; 
            x = rows[i].getElementsByTagName("TD")[index]; 
            y = rows[i + 1].getElementsByTagName("TD")[index]; 
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { 
                shouldSwitch = true; 
                break; 
            } 
        } 

        if (shouldSwitch) { 
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); 
            switching = true; 
        } 
    } 
} 


function myFunction() { 
    var input, filter, table, tr, td, i, txtValue; 
    input = document.getElementById("Kereső"); 
    filter = input.value.toUpperCase(); 
    table = document.getElementById("table"); 

    tr = table.getElementsByTagName("tr"); 


    for (i = 0; i < tr.length; i++) { 

        td = tr[i].getElementsByTagName("td")[0]; 

        if (td) { 

            txtValue = td.textContent; 

            if (txtValue.toUpperCase().indexOf(filter) > -1)  
                tr[i].style.display = ""; 
            else  
                tr[i].style.display = "none";                    
        }        
    } 
} 


function readFormData() { 
    var formData = {}; 
    formData["fullName"] = document.getElementById("fullName").value; 
    formData["email"] = document.getElementById("email").value; 
    formData["salary"] = document.getElementById("salary").value; 
    formData["city"] = document.getElementById("city").value; 
    return formData; 
} 

function insertNewRecord(data) { 
    var table = document.getElementById("table").getElementsByTagName('tbody')[0]; 
    var newRow = table.insertRow(table.length); 
    cell1 = newRow.insertCell(0); 
    cell1.innerHTML = data.fullName; 
    cell2 = newRow.insertCell(1); 
    cell2.innerHTML = data.email; 
    cell3 = newRow.insertCell(2); 
    cell3.innerHTML = data.salary; 
    cell4 = newRow.insertCell(3); 
    cell4.innerHTML = data.city; 
    cell4 = newRow.insertCell(4); 
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a> 
                       <a onClick="onDelete(this)">Delete</a>`; 
} 
 
function resetForm() { 
    document.getElementById("fullName").value = ""; 
    document.getElementById("email").value = ""; 
    document.getElementById("salary").value = ""; 
    document.getElementById("city").value = ""; 
    selectedRow = null; 
} 

function onEdit(td) { 

    selectedRow = td.parentElement.parentElement; 

    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML; 
    document.getElementById("email").value = selectedRow.cells[1].innerHTML; 
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML; 
    document.getElementById("city").value = selectedRow.cells[3].innerHTML; 
} 


function updateRecord(formData) { 
    selectedRow.cells[0].innerHTML = formData.fullName; 
    selectedRow.cells[1].innerHTML = formData.email; 
    selectedRow.cells[2].innerHTML = formData.salary; 
    selectedRow.cells[3].innerHTML = formData.city; 
} 
function onDelete(td) { 

    if (confirm('Are you sure to delete this record ?')) { 

        row = td.parentElement.parentElement; 
        document.getElementById("table").deleteRow(row.rowIndex); 
        resetForm(); 
    } 
} 
function validate() { 
    isValid = true; 

var selectedRow = null 

function onFormSubmit() { 

    if (validate()) { 

        var formData = readFormData(); 
        if (selectedRow == null) 
            insertNewRecord(formData); 
        else 
            updateRecord(formData); 

        resetForm(); 
    } 
} 
function readFormData() { 
    var formData = {}; 
    formData["fullName"] = document.getElementById("fullName").value; 
    formData["email"] = document.getElementById("email").value; 
    formData["salary"] = document.getElementById("salary").value; 
    formData["city"] = document.getElementById("city").value; 
    return formData; 
} 
function insertNewRecord(data) { 
    var table = document.getElementById("table").getElementsByTagName('tbody')[0]; 
    var newRow = table.insertRow(table.length); 
    cell1 = newRow.insertCell(0); 
    cell1.innerHTML = data.fullName; 
    cell2 = newRow.insertCell(1); 
    cell2.innerHTML = data.email; 
    cell3 = newRow.insertCell(2); 
    cell3.innerHTML = data.salary; 
    cell4 = newRow.insertCell(3); 
    cell4.innerHTML = data.city; 
    cell4 = newRow.insertCell(4); 
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a> 
                       <a onClick="onDelete(this)">Delete</a>`; 
} 

function resetForm() { 
    document.getElementById("fullName").value = ""; 
    document.getElementById("email").value = ""; 
    document.getElementById("salary").value = ""; 
    document.getElementById("city").value = ""; 
    selectedRow = null; 
}
function onEdit(td) { 
    selectedRow = td.parentElement.parentElement; 

    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML; 
    document.getElementById("email").value = selectedRow.cells[1].innerHTML; 
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML; 
    document.getElementById("city").value = selectedRow.cells[3].innerHTML; 
}
function updateRecord(formData) { 
    selectedRow.cells[0].innerHTML = formData.fullName; 
    selectedRow.cells[1].innerHTML = formData.email; 
    selectedRow.cells[2].innerHTML = formData.salary; 
    selectedRow.cells[3].innerHTML = formData.city; 
} 
function onDelete(td) { 

    if (confirm('Biztosan törölni szeretné ezt az elemet ?')) { 
        row = td.parentElement.parentElement; 
        document.getElementById("table").deleteRow(row.rowIndex); 
        resetForm(); 
    } 
} 
function validate() { 
    isValid = true; 
    if (document.getElementById("fullName").value == "") { 
        isValid = false; 
        document.getElementById("fullNameValidationError").classList.remove("hide"); 
    } else { 
        isValid = true; 
        if (!document.getElementById("fullNameValidationError").classList.contains("hide")) 
            document.getElementById("fullNameValidationError").classList.add("hide"); 
    }
    return isValid; 
}
    if (document.getElementById("fullName").value == "") { 
        isValid = false; 
        document.getElementById("fullNameValidationError").classList.remove("hide"); 
    } else { 

        isValid = true; 
        if (!document.getElementById("fullNameValidationError").classList.contains("hide")) 
            document.getElementById("fullNameValidationError").classList.add("hide"); 
    } 
    
    const email = document.getElementById("email").value;
    const emailPattern = /^[^@\s]+@[^@\s]+\.(com|hu)$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById("emailValidationError").classList.remove("hide");
    } else {
        document.getElementById("emailValidationError").classList.add("hide");
    }
    
    const fizetes = document.getElementById("salary").value;
    const fminta = /^[0-9]+$/;
    if(!fminta.test(fizetes))
    {
        isValid = false;
        document.getElementById("salaryValidationError").classList.remove("hide");
    } else{
        document.getElementById("salaryValidationError").classList.add("hide");
    }

    const varos = document.getElementById("city").value;
    const vminta = /^[A-Za-zÁÉÍÓÖŐÚÜŰáéíóöőúüű\s]+$/;

    if(!vminta.test(varos))
    {
     isValid=false;
     document.getElementById("cityValidationError").classList.remove("hide");   
    }
    else {
        document.getElementById("cityValidationError").classList.add("hide");
    }

    return isValid; 
} 

function allowDrop(ev) { 
    ev.preventDefault(); 
    } 
    function drag(ev) { 
        ev.dataTransfer.setData("text", ev.target.id); 
    } 
        function drop(ev) { 
        ev.preventDefault(); 
        var data = ev.dataTransfer.getData("text"); 
        ev.target.appendChild(document.getElementById(data)); 
    }


function Canvas(){ 
    var canvas = document.getElementById('canvas'); 
    if (canvas.getContext){
        var ctx = canvas.getContext('2d'); 
        ctx.fillRect(25,25,100,100); 
        ctx.clearRect(45,45,60,60); 
        ctx.strokeRect(50,50,50,50); 
    } 
    else  
        alert('A Canvas nem támogatott.'); 
} 