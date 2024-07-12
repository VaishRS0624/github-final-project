// script.js
function calculateInterest() {
    // Get the values from the input fields
    const principal = document.getElementById('principal').value;
    const time = document.getElementById('time').value;
    const rate = document.getElementById('rate').value;

    const principalError = document.getElementById(
        "principal-error"
    );
    const timeError = document.getElementById(
        "time-error"
    );
    const interestError = document.getElementById(
        "interest-error"
    );
    
    principalError.textContent = "";
    timeError.textContent = "";
    interestError.textContent = "";

    let isValid = true;

    // Validate the input values
    if (principal === '')
    {
        principalError.textContent = "Please enter the principal value";
        isValid = false;
    }
    if (time === '')
    {
        timeError.textContent = "Please enter the number of years";
        isValid = false;
    }
    if (rate === '')
    {
        interestError.textContent = "Please enter percentage of interest";
        isValid = false;
    }
    
    // Calculate the simple interest
    const simpleInterest = (principal * time * rate) / 100;

    // Display the result
    document.getElementById('result').innerText = `Simple Interest: ${simpleInterest}`;

    return isValid;
}
