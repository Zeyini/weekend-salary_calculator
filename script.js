// global variable to add the annual salary input by user to the exisiting value in totalMonthlySalary
let totalMonthlySalary = 0;

// the function is referencing the HTML and defining what events should be evalued when user clicks submit 
function submitID(event) {
    // event.preveent defalut is stopping the refershing of the site when user clicks submit
    event.preventDefault();
// referencing the HTML and commanding dom to get the value of the element referenced by the getElementById and assigning the value user inputs to new variables
    let fnameTextinput = document.getElementById("FnameInputID").value;
    let lnameTextinput = document.getElementById("LnameInputID").value;
    let idTextinput = document.getElementById("IDinputID").value;
    let titleTextinput = document.getElementById("TitleInputID").value;
    let annualTextinput = document.getElementById("annualSalaryID").value;
    
 console.log([fnameTextinput,lnameTextinput,idTextinput,titleTextinput,annualTextinput]);

    let newTablerow = `
    <tr>
      <td>${fnameTextinput}</td>
      <td>${lnameTextinput}</td>
      <td>${idTextinput}</td>
      <td>${titleTextinput}</td>
      <td>${annualTextinput}</td>

      <td><button onclick="deleteRow(event)">❌</button></td>
    </tr>
    `
    let tableLocation = document.getElementById("tableSpot");
    tableLocation.innerHTML += newTablerow;

     // Set our two inputs' values back to empty string.
  document.getElementById("FnameInputID").value = '';
  document.getElementById("LnameInputID").value = '';
  document.getElementById("IDinputID").value = '';
  document.getElementById("TitleInputID").value = '';
  document.getElementById("annualSalaryID").value = '';

 
  let wheretoAddmonthlySalary = document.getElementById('monthlySalaryspot');
  let string = "Total Monthly Salary:";
  totalMonthlySalary += Math.round(Number(annualTextinput/12))


  wheretoAddmonthlySalary.innerHTML = string + ' ' + totalMonthlySalary 
// ---------------- section two -----------------------------------
//If the total monthly cost **exceeds $20,000**, 
// apply an `over-budget` CSS class to the footer element


function isTotalsalarBiggerthan20k(totalSalary) {
if (totalMonthlySalary < 20000) {
    console.log ('total monthly salary is less than 20k');
  
    } else {
    console.log('total monthly salary is bigger than 20k');

    let footerCSS = document.getElementsByClassName('over-budget')[0];
    let Footerclass0 = footerCSS.style.backgroundColor = 'red';
    console.log(Footerclass0);

    }

}
console.log(isTotalsalarBiggerthan20k(totalMonthlySalary))

}

// ------section update total monthly salary when employee is deleted-----------------

// function checks if deleteRow(event) evalutes to true  
// if true 
//totalMonthlySalary - subtract annualTextinput
// how to knows input to delete row

// if (deleteRow(event) === annualTextinput)
// for (let i = 0; i<length-1; i++) {
    
//}
// loop through employeeinputclass

// [fnameTextinput,lnameTextinput,idTextinput,titleTextinput,annualTextinput]

console.log([fnameTextinput,lnameTextinput,idTextinput,titleTextinput,annualTextinput]);

 


if (form) {
// Iterate through the form elements
    for (let i = 0; i < fnameTextinput.length; i++) {
    // Get the current form element
    let firstNamevalue = firstnameArray.value;

    // Log the name and value of the current element
    console.log(firstNamevalue);   
    }
} else {console.log('fom not found')
}





// ----------- delete employee button -------------------------


  function deleteRow(event) {
    
    let buttonclicked = event.target;
    let toDelete = buttonclicked.parentElement.parentElement;
    toDelete.remove();

  }


 