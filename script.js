function compute()
{
//principal variable

var principal = document.getElementById("principal").value; 
    
//rate variable
var rate = document.getElementById("rate").value;

//years variable
 
var years = document.getElementById("years").value;

//interest variable and calculation

var interest = principal * years * rate /100;    

//logic for conversion of years in the future

var year = new Date().getFullYear()+parseInt(years);

//display of range slider function
     
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    
    document.getElementById("rate_val").innerText=rateval;

//on change event to display range slider function

document.getElementById("rate_val").onchange = function() {myFunction()};
function myFunction() {
  var x = document.getElementById("rate_val").value;

//Text to be displayed upon pressing compute interest

  document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}
document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}
{
//validation for Principal box. Shows alert on 0 or negative 

if (Principal.value 0 or < 0) {
alert "Enter a positive number
principal.focus()";
return false;
}



}
        
