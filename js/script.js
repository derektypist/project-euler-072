// Function to Get Limit (Number) Information (including Invalid Input)
function getLimitInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mylimit").value;
    // Check if Input is Valid
    if (isNaN(num) || num.length==0 || num<2 || num>1000000 || (num.length>1 && num[0]=="0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 1000000.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the limit of ${num}.<p>`;
        txt += `There are ${countingFractions(num)} elements in the set of reduced proper fractions for d ≤ ${num}.`;
    }

    // Display Information in the Browser
    document.getElementById("limitinfo").innerHTML = txt;
}