$(document).ready(function () {
    const email = document.getElementById("email");

    // Stores the current slide
    let currentStep = 0;

    // Add a click handler to next button
    $("#nextSlide").click(nextSlide);

    // Add a click handler to Reset button
    $("#resetButton").click(resetMealPlan);

    // Add a click handler to previous button
    $("#previousSlide").click(PreviousSlide);

    // Add a click handler to submit button
    $("#submitButton").click(generatePlanner);

    // Validate Email
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const isEmailValid = emailRegex.test(email.value);

        if (!isEmailValid) {
            alert("Please enter a valid email");
        }

        return isEmailValid;
    }

    // Reset the meal plan form
    function resetMealPlan(e) {
        // Display a confirmation window and store the response
        const response = confirm("This will clear and reset the entire form. Are you sure you want to do this?");

        // If response is true, then reset the form
        if (response) {
            // Remove active class to the current step/fieldset
            $($("#mealPlan fieldset")[currentStep]).removeClass("active");

            // Add active class to the first step/fieldset and show it
            $("#mealPlan fieldset").first().addClass("active").hide().show(400);

            // Reset the currentStep
            currentStep = 0;

            // Iterates through all the list items with completed class and removes that class
            $(".steps li.completed").each(function() {
                $(this).removeClass("completed");
            });

            // Update the steps for mobile steps progress
            $("#currentSteps").text(currentStep + 1);
        } else {
            // If user cancels, then prevent the form from resetting
            e.preventDefault();
        }
    }

    // Generates the meal planner for the week
    function generatePlanner() {
        // Obtain all the values for meal plan and save it into an object
        const weekMealPlan = {
            monBreakfast: document.getElementById("monBreakfast").value,
            monSnack1: document.getElementById("monSnack1").value,
            monLunch: document.getElementById("monLunch").value,
            monSnack2: document.getElementById("monSnack2").value,
            monDinner: document.getElementById("monDinner").value,
            tuesBreakfast: document.getElementById("tuesBreakfast").value,
            tuesSnack1: document.getElementById("tuesSnack1").value,
            tuesLunch: document.getElementById("tuesLunch").value,
            tuesSnack2: document.getElementById("tuesSnack2").value,
            tuesDinner: document.getElementById("tuesDinner").value,
            wedBreakfast: document.getElementById("wedBreakfast").value,
            wedSnack1: document.getElementById("wedSnack1").value,
            wedLunch: document.getElementById("wedLunch").value,
            wedSnack2: document.getElementById("wedSnack2").value,
            wedDinner: document.getElementById("wedDinner").value,
            thursBreakfast: document.getElementById("thursBreakfast").value,
            thursSnack1: document.getElementById("thursSnack1").value,
            thursLunch: document.getElementById("thursLunch").value,
            thursSnack2: document.getElementById("thursSnack2").value,
            thursDinner: document.getElementById("thursDinner").value,
            friBreakfast: document.getElementById("friBreakfast").value,
            friSnack1: document.getElementById("friSnack1").value,
            friLunch: document.getElementById("friLunch").value,
            friSnack2: document.getElementById("friSnack2").value,
            friDinner: document.getElementById("friDinner").value,
            satBreakfast: document.getElementById("satBreakfast").value,
            satSnack1: document.getElementById("satSnack1").value,
            satLunch: document.getElementById("satLunch").value,
            satSnack2: document.getElementById("satSnack2").value,
            satDinner: document.getElementById("satDinner").value,
            sunBreakfast: document.getElementById("sunBreakfast").value,
            sunSnack1: document.getElementById("sunSnack1").value,
            sunLunch: document.getElementById("sunLunch").value,
            sunSnack2: document.getElementById("sunSnack2").value,
            sunDinner: document.getElementById("sunDinner").value
        };

        // Collect name, email and goal for the week
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const goal = document.getElementById("goalWeek").value;

        // Create a new window
        const newWin = window.open("", "Week Meal Plan");

        // Write onto the new window
        newWin.document.write(`
            <html>
                <head>
                    <link rel="stylesheet" href="css/styles.css">

                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
                </head>
                <body>
                    <h1>Meal Plan for the week</h1>
                    <p>Welcome ${name}</p>
                    <p>Email: ${email}</p>
                    <p>Goal for the week: ${goal}</p>
                    <table>
                        <tr>
                            <td></td>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                        </tr>
                        <tr>
                            <th>Breakfast</th>
                            <th>${weekMealPlan.monBreakfast}</th>
                            <th>${weekMealPlan.tuesBreakfast}</th>
                            <th>${weekMealPlan.wedBreakfast}</th>
                            <th>${weekMealPlan.thursBreakfast}</th>
                            <th>${weekMealPlan.friBreakfast}</th>
                            <th>${weekMealPlan.satBreakfast}</th>
                            <th>${weekMealPlan.sunBreakfast}</th>
                        </tr>
                        <tr>
                            <th>Snack</th>
                            <th>${weekMealPlan.monSnack1}</th>
                            <th>${weekMealPlan.tuesSnack1}</th>
                            <th>${weekMealPlan.wedSnack1}</th>
                            <th>${weekMealPlan.thursSnack1}</th>
                            <th>${weekMealPlan.friSnack1}</th>
                            <th>${weekMealPlan.satSnack1}</th>
                            <th>${weekMealPlan.sunSnack1}</th>
                        </tr>
                        <tr>
                            <th>Lunch</th>
                            <th>${weekMealPlan.monLunch}</th>
                            <th>${weekMealPlan.tuesLunch}</th>
                            <th>${weekMealPlan.wedLunch}</th>
                            <th>${weekMealPlan.thursLunch}</th>
                            <th>${weekMealPlan.friLunch}</th>
                            <th>${weekMealPlan.satLunch}</th>
                            <th>${weekMealPlan.sunLunch}</th>
                        </tr>
                        <tr>
                            <th>Snack</th>
                            <th>${weekMealPlan.monSnack2}</th>
                            <th>${weekMealPlan.tuesSnack2}</th>
                            <th>${weekMealPlan.wedSnack2}</th>
                            <th>${weekMealPlan.thursSnack2}</th>
                            <th>${weekMealPlan.friSnack2}</th>
                            <th>${weekMealPlan.satSnack2}</th>
                            <th>${weekMealPlan.sunSnack2}</th>
                        </tr>
                        <tr>
                            <th>Dinner</th>
                            <th>${weekMealPlan.monDinner}</th>
                            <th>${weekMealPlan.tuesDinner}</th>
                            <th>${weekMealPlan.wedDinner}</th>
                            <th>${weekMealPlan.thursDinner}</th>
                            <th>${weekMealPlan.friDinner}</th>
                            <th>${weekMealPlan.satDinner}</th>
                            <th>${weekMealPlan.sunDinner}</th>
                        </tr>
                    </table>
                    <button onclick="print()" class="newWinBtn">Print my meal plan</button>
                </body>
            </html>
        `);
    }

    // TODO: Allow user to download Planner
    // Download Planner

    // Next Slide
    function nextSlide() {
        if (validateEmail(email) && currentStep < 7) {
            // Removes the active class from the currentStep and adds it to the next sibling
            $($("#mealPlan fieldset")[currentStep]).removeClass("active").next("fieldset").addClass("active").hide().show(400);

            // Add completed class to the current step list item for desktop steps progress
            $($(".desktop.steps ul > li")[currentStep]).addClass("completed");

            currentStep++;

            // Update the steps for mobile steps progress
            $("#currentSteps").text(currentStep + 1);

            $("#mealPlan fieldset.active input")[0].focus();

            // If the current step is 7 (last step), hide the next button and show the submit button
            if (currentStep === 7) {
                $("#nextSlide").hide();
                $("#submitButton").show();
            }
        }
    }

    // Previous Slide
    function PreviousSlide() {
        if (currentStep > 0) {
            const currentSlide = $("#mealPlan fieldset")[currentStep];

            // Removes the active class from the currentStep and adds it to the previous sibling
            $(currentSlide).removeClass("active").prev("fieldset").addClass("active").hide().show(400);

            currentStep--;

            // Remove completed class to the current step list item for desktop steps progress
            $($(".desktop.steps ul > li")[currentStep]).removeClass("completed");

            // Update the steps for mobile steps progress
            $("#currentSteps").text(currentStep + 1);

            $("#mealPlan fieldset.active input")[0].focus();

            // If the current step falls below 7, show the next button and hide the submit button
            if (currentStep < 7) {
                $("#nextSlide").show();
                $("#submitButton").hide();
            }
        }
    }

    // // A quick function to populate the form for testings
    // function testForm() {
    //     document.getElementById("name").value = "Full Name";
    //     document.getElementById("email").value = "example@email.com";
    //     document.getElementById("goalWeek").value = "To get this project done";

    //     document.getElementById("monBreakfast").value = "Oatmeal with berries";
    //     document.getElementById("monSnack1").value = "Apple slices";
    //     document.getElementById("monLunch").value = "Chicken salad";
    //     document.getElementById("monSnack2").value = "Yogurt";
    //     document.getElementById("monDinner").value = "Grilled salmon with vegetables";

    //     document.getElementById("tuesBreakfast").value = "Smoothie bowl";
    //     document.getElementById("tuesSnack1").value = "Almonds";
    //     document.getElementById("tuesLunch").value = "Turkey wrap";
    //     document.getElementById("tuesSnack2").value = "Carrot sticks";
    //     document.getElementById("tuesDinner").value = "Stir-fried tofu with rice";

    //     document.getElementById("wedBreakfast").value = "Greek yogurt with granola";
    //     document.getElementById("wedSnack1").value = "Banana";
    //     document.getElementById("wedLunch").value = "Quinoa salad";
    //     document.getElementById("wedSnack2").value = "Cottage cheese";
    //     document.getElementById("wedDinner").value = "Baked chicken with sweet potatoes";

    //     document.getElementById("thursBreakfast").value = "Avocado toast";
    //     document.getElementById("thursSnack1").value = "Mixed nuts";
    //     document.getElementById("thursLunch").value = "Veggie wrap";
    //     document.getElementById("thursSnack2").value = "Hummus with cucumber";
    //     document.getElementById("thursDinner").value = "Spaghetti with marinara sauce";

    //     document.getElementById("friBreakfast").value = "Scrambled eggs with spinach";
    //     document.getElementById("friSnack1").value = "Orange slices";
    //     document.getElementById("friLunch").value = "Tuna salad";
    //     document.getElementById("friSnack2").value = "Cheese sticks";
    //     document.getElementById("friDinner").value = "Beef stir-fry with broccoli";

    //     document.getElementById("satBreakfast").value = "Pancakes with maple syrup";
    //     document.getElementById("satSnack1").value = "Berries";
    //     document.getElementById("satLunch").value = "Chicken Caesar salad";
    //     document.getElementById("satSnack2").value = "Apple slices";
    //     document.getElementById("satDinner").value = "Shrimp tacos";

    //     document.getElementById("sunBreakfast").value = "Smoothie";
    //     document.getElementById("sunSnack1").value = "Trail mix";
    //     document.getElementById("sunLunch").value = "Lentil soup";
    //     document.getElementById("sunSnack2").value = "Celery sticks with peanut butter";
    //     document.getElementById("sunDinner").value = "Roast beef with mashed potatoes";
    // }
});