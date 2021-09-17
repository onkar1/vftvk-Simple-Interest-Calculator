function compute()
{
    // Getting the Values for Calculation
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    // Creating Interest Text To see Results
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal +"</mark>,<br/>"+
    "at an interest rate of <mark>" + rate + "</mark>.<br> "+
    "You will receive an amount of <mark>" + interest + "</mark>,<br> " +
    "in the year <mark>" + year + "</mark>";
}

// Function for updating values
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//Check wheather positive or negative values
function valamt() {
    var principle = document.getElementById("principal").value;
    if(principle <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus()
        }
}
