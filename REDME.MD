# JavaScript Promise: Division Assignment

##  Project Overview
This project is a simple web-based demonstration of **JavaScript Promises**, asynchronous logic, and basic DOM manipulation. It implements a function that divides two numbers and uses a Promise to handle the mathematical operation. 

If the operation is valid, the Promise **resolves** and displays the result. If a division by zero is attempted, the Promise **rejects** and gracefully displays a custom error message without breaking the application.

## ✨ Features
* **Promise-Based Logic:** Utilizes `resolve` and `reject` to handle success and error states.
* **Arrow Functions:** Written using modern ES6+ arrow function syntax.
* **Graceful Error Handling:** Catches "Division by Zero" errors and displays a clear message to the user.
* **Dynamic DOM Manipulation:** Results and test cases are injected directly into the HTML without needing to check the browser console.
* **Clean UI:** Styled with pure CSS for a clean, readable, and responsive card-based layout.

##  Project Structure
The project follows a standard web development structure by separating structure, styling, and logic:
* `index.html` - The structural skeleton of the web page.
* `style.css` - The visual styling, including layout and success/error text colors.
* `script.js` - The core logic containing the Promise, mathematical operations, and DOM updates.

##  How to Run the Project
1. Download or clone all three files (`index.html`, `style.css`, `script.js`).
2. Ensure all three files are saved in the **exact same folder**.
3. Double-click on `index.html` to open it in any modern web browser (Chrome, Firefox, Edge, Safari).
4. The page will automatically run 5 test cases and display the output dynamically.

##  Test Cases Included
The script automatically runs the following test cases to demonstrate functionality:
1. `10 / 2 (Standard division - Expected: 5)
2. `10 / 0 (Division by zero - Expected: Error)
3. `15 / 3 (Standard division - Expected: 5)
4. `25 / 0 (Division by zero - Expected: Error)
5. `7 / 2 (Decimal output - Expected: 3.5)

##  Technologies Used
* **HTML5**
* **CSS3**
 **JavaScript (ES6+)**