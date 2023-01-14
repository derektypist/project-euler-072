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

/*
    Function to return the number of elements in the set of reduced proper
    fractions for d less than or equal to the limit
    countingFractions(8)       returns 21
    countingFractions(20000)   returns 121590395
    countingFractions(500000)  returns 75991039675
    countingFractions(1000000) returns 303963552391
*/
function countingFractions(limit) {
    const phi = {};
    let count = 0;
    for (let i=2;i<=limit;i++) {
        if (!phi[i]) phi[i] = i;
        if (phi[i] === i) {
            for (let j=i;j<=limit;j+=i) {
                if (!phi[j]) phi[j] = j;
                phi[j] = (phi[j]/i) * (i-1);
            }
        }
        count += phi[i];
    }
    return count;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("limitinfo").innerHTML = txt;
}