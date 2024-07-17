
// Obtain all the values for meal plan and save it into an object

// Collect name, email and goal for the week

// Validate Email
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    console.log(emailRegex.test(email.value));

    if (emailRegex.test(email.value)) {
        email.setCustomValidity("");
    } else {
        email.setCustomValidity("Please enter a valid email address");
    }
}

// Clear weekly planner

// Print Planner

// Download Planner

// Weekly Planner generation

// Next Slide

// Previous Slide