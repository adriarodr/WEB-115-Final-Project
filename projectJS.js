$(document).ready(function () {
    // Obtain all the values for meal plan and save it into an object

    // Collect name, email and goal for the week
    const email = document.getElementById("email");

    // Stores the current slide
    let currentStep = 0;

    // Add a click handler to Next button
    $("#nextSlide").click(nextSlide);

    // Add a click handler to Previous button
    $("#previousSlide").click(PreviousSlide);

    // Validate Email
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (emailRegex.test(email.value)) {
            email.setCustomValidity("");
        } else {
            email.setCustomValidity("Please enter a valid email address");
        }
    }

    // Reset Form

    // Print Planner

    // Download Planner

    // Weekly Planner generation

    // Next Slide
    function nextSlide(e) {
        e.preventDefault();

        if (currentStep < 7) {
            // Removes the active class from the currentStep and adds it to the next sibling
            $($("#mealPlan fieldset")[currentStep]).removeClass("active").next("fieldset").addClass("active").hide().show(400);

            $($(".desktop.steps ul > li")[currentStep]).addClass("completed");
            $($(".mobile.steps ul > li")[currentStep]).addClass("completed");

            currentStep++;

            // If the current step is 7 (last step), hide the next button and show the submit button
            if (currentStep === 7) {
                $("#nextSlide").hide();
                $("#submitButton").show();
            }
        }
    }

    // Previous Slide
    function PreviousSlide(e) {
        e.preventDefault();

        if (currentStep > 0) {
            // Removes the active class from the currentStep and adds it to the previous sibling
            $($("#mealPlan fieldset")[currentStep]).removeClass("active").prev("fieldset").addClass("active").hide().show(400);

            currentStep--;

            $($(".desktop.steps ul > li")[currentStep]).removeClass("completed");
            $($(".mobile.steps ul > li")[currentStep]).removeClass("completed");

            // If the current step falls below 7, show the next button and hide the submit button
            if (currentStep < 7) {
                $("#nextSlide").show();
                $("#submitButton").hide();
            }
        }
    }
});