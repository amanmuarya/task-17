const divideNumbers = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            // Reject if the second number is zero
            reject("Error: Division by zero is not allowed.");
        } else {
            // Resolve with the result otherwise
            resolve(num1 / num2);
        }
    });
};

// DOM Element to display the output
const outputContainer = document.getElementById('output');

// Helper function to run tests and render HTML dynamically
const runTestCase = (num1, num2, exampleNumber) => {
    // Create a container for this specific example
    const exampleDiv = document.createElement('div');
    exampleDiv.className = 'example-block';

    // Initial text showing the calculation intent
    let contentHTML = `<h3>Example ${exampleNumber}</h3>`;
    contentHTML += `<ul><li>Dividing ${num1} by ${num2}...</li>`;

    // Call the Promise-based function
    divideNumbers(num1, num2)
        .then(result => {
            // Handle successful resolution
            contentHTML += `<li>Result: <span class="success">${result}</span></li></ul>`;
            exampleDiv.innerHTML = contentHTML;
            outputContainer.appendChild(exampleDiv);
        })
        .catch(error => {
            // Handle rejection (division by zero)
            contentHTML += `<li><span class="error">${error}</span></li></ul>`;
            exampleDiv.innerHTML = contentHTML;
            outputContainer.appendChild(exampleDiv);
        });
};

// 2. Run for 5 dummy cases

// Case 1: Standard division (from sample output)
runTestCase(10, 2, 1);

// Case 2: Division by zero (from sample output)
runTestCase(10, 0, 2);

// Case 3: Another valid division
runTestCase(15, 3, 3);

// Case 4: Another division by zero
runTestCase(25, 0, 4);

// Case 5: Division resulting in a decimal
runTestCase(7, 2, 5);