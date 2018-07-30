$(document).ready(readyNow);
function readyNow(){


//'Add' Row function 



function addRow(){  
let newRow = document.getElementById('Table').insertRow(4);
let firstNameAdd=newRow.insertCell(0);
let lastNameAdd=newRow.insertCell(1);
let idAdd=newRow.insertCell(2);
let titleAdd=newRow.insertCell(3);
let salaryAdd=newRow.insertCell(4);
firstNameAdd.innerHTML= $('#firstNameInput').val(); //Calling input method 1
lastNameAdd.innerHTML=$('#lastNameInput').val(); //calling input method 2
idAdd.innerHTML=$('#idInput').val();
titleAdd.innerHTML=$('#titleInput').val();
salaryAdd.innerHTML=$('#annualSalaryInput').val();
}




$('#submit').on('click' , addRow );



/*Clear input fields after data submitted

function clearInputfields(){
$('#firstNameInput').val('');
$('#lastNameInput').val('');
$('#idInput').val('');
$('#titleInput').val('');
$('#annualSalaryInput').val('');
}

clearInputfields();
*/


// Delete First function and button
function deleteRow1(){
let row1 =document.getElementById('Table');
row1.deleteRow(1);
}

$('#removeRow1').on('click' , deleteRow1 );

// Delete Second Row function and button

function deleteRow2(){
let row2 = document.getElementById("Table");
row2.deleteRow(2);
}
    
$('#removeRow2').on('click' , deleteRow2 );
    
    

// Delete Third Row function and button

function deleteRow3(){
let row3 = document.getElementById("Table");
row3.deleteRow(3);
}
        
$('#removeRow3').on('click' , deleteRow3 );
        
  


}
