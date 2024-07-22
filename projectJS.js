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
        const emailRegex = /^\S+@\S+\.\S+$/;
        const isEmailValid = emailRegex.test(email.value);

        if (!isEmailValid) {
            alert("Please enter a valid email");
        }

        return isEmailValid;
    }

    // Reset the meal plan form
    function resetMealPlan(e) {
        // Display a confirmation window and store the response
        const response = confirm("This action will clear all your entries and reset the form. Are you sure you want to proceed?");

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
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">

                <link rel="stylesheet" href="css/styles.css">

                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
            </head>
            <body>

                <main>

                    <section id="mealPlanner">

                        <div id="personInfo">
                            <h1>Meal Plan for the week</h1>
                            <p>Welcome ${name}</p>
                            <p>Email: ${email}</p>
                            <p>Goal for the week: ${goal}</p>
                        </div>

                        <!-- List view for the meal plan for mobile layout -->
                        <div class="mobile" id="planner">
                            <h2>Monday</h2>
                            <ul>
                                <li><span class="bold">Breakfast: </span>${weekMealPlan.monBreakfast}</li>
                                <li><span class="bold">Snack: </span>${weekMealPlan.monSnack1}</li>
                                <li><span class="bold">Lunch: </span>${weekMealPlan.monLunch}</li>
                                <li><span class="bold">Snack: </span>${weekMealPlan.monSnack2}</li>
                                <li><span class="bold">Dinner: </span>${weekMealPlan.monDinner}</li>
                            </ul>

                            <h2>Tuesday</h2>
                            <ul>
                                <li><span class="bold">Breakfast: </span>${weekMealPlan.tuesBreakfast}</li>
                                <li><span class="bold">Snack: </span>${weekMealPlan.tuesSnack1}</li>
                                <li><span class="bold">Lunch: </span>${weekMealPlan.tuesLunch}</li>
                                <li><span class="bold">Snack: </span>${weekMealPlan.tuesSnack2}</li>
                                <li><span class="bold">Dinner: </span>${weekMealPlan.tuesDinner}</li>
                            </ul>

                            <h2>Wednesday</h2>
                            <ul>
                                <li><span class="bold">Breakfast: </span>${weekMealPlan.wedBreakfast}</li>
                                <li><span class="bold">Snack: </span>${weekMealPlan.wedSnack1}</li>
                                <li><span class="bold">Lunch: </span>${weekMealPlan.wedLunch}</li>
                                <li><span class="bold">Snack: </span>${weekMealPlan.wedSnack2}</li>
                                <li><span class="bold">Dinner: </span>${weekMealPlan.wedDinner}</li>
                            </ul>

                            <h2>Thursday</h2>
                            <ul>
                                <li><span class="bold">Breakfast: </span>${weekMealPlan.thursBreakfast}</li>
                                <li><span class="bold">Snack: </span>${weekMealPlan.thursSnack1}</li>
                                <li><span class="bold">Lunch: </span>${weekMealPlan.thursLunch}</li>
                                <li><span class="bold">Snack: </span>${weekMealPlan.thursSnack2}</li>
                                <li><span class="bold">Dinner: </span>${weekMealPlan.thursDinner}</li>
                            </ul>

                            <h2>Friday</h2>
                            <ul>
                                <li><span class="bold">Breakfast: </span>${weekMealPlan.friBreakfast}</li>
                                <li><span class="bold">Snack: </span>${weekMealPlan.friSnack1}</li>
                                <li><span class="bold">Lunch: </span>${weekMealPlan.friLunch}</li>
                                <li><span class="bold">Snack: </span>${weekMealPlan.friSnack2}</li>
                                <li><span class="bold">Dinner: </span>${weekMealPlan.friDinner}</li>
                            </ul>

                            <h2>Saturday</h2>
                            <ul>
                                <li><span class="bold">Breakfast: </span>${weekMealPlan.satBreakfast}</li>
                                <li><span class="bold">Snack: </span>${weekMealPlan.satSnack1}</li>
                                <li><span class="bold">Lunch: </span>${weekMealPlan.satLunch}</li>
                                <li><span class="bold">Snack: </span>${weekMealPlan.satSnack2}</li>
                                <li><span class="bold">Dinner: </span>${weekMealPlan.satDinner}</li>
                            </ul>

                            <h2>Sunday</h2>
                            <ul>
                                <li><span class="bold">Breakfast: </span>${weekMealPlan.sunBreakfast}</li>
                                <li><span class="bold">Snack: </span>${weekMealPlan.sunSnack1}</li>
                                <li><span class="bold">Lunch: </span>${weekMealPlan.sunLunch}</li>
                                <li><span class="bold">Snack: </span>${weekMealPlan.sunSnack2}</li>
                                <li><span class="bold">Dinner: </span>${weekMealPlan.sunDinner}</li>
                            </ul>
                        </div>

                        <!-- Table for the meal Planner for desktop layout -->
                        <table>

                            <tr>
                                <th></th>
                                <th>Breakfast</th>
                                <th>Snack</th>
                                <th>Lunch</th>
                                <th>Snack</th>
                                <th>Dinner</th>
                            </tr>

                            <tr>
                                <th>Monday</th>
                                <td>${weekMealPlan.monBreakfast}</td>
                                <td>${weekMealPlan.monSnack1}</td>
                                <td>${weekMealPlan.monLunch}</td>
                                <td>${weekMealPlan.monSnack2}</td>
                                <td>${weekMealPlan.monDinner}</td>
                            </tr>

                            <tr>
                                <th>Tuesday</th>
                                <td>${weekMealPlan.tuesBreakfast}</td>
                                <td>${weekMealPlan.tuesSnack1}</td>
                                <td>${weekMealPlan.tuesLunch}</td>
                                <td>${weekMealPlan.tuesSnack2}</td>
                                <td>${weekMealPlan.tuesDinner}</td>
                            </tr>

                            <tr>
                                <th>Wednesday</th>
                                <td>${weekMealPlan.wedBreakfast}</td>
                                <td>${weekMealPlan.wedSnack1}</td>
                                <td>${weekMealPlan.wedLunch}</td>
                                <td>${weekMealPlan.wedSnack2}</td>
                                <td>${weekMealPlan.wedDinner}</td>
                            </tr>

                            <tr>
                                <th>Thursday</th>
                                <td>${weekMealPlan.thursBreakfast}</td>
                                <td>${weekMealPlan.thursSnack1}</td>
                                <td>${weekMealPlan.thursLunch}</td>
                                <td>${weekMealPlan.thursSnack2}</td>
                                <td>${weekMealPlan.thursDinner}</td>
                            </tr>

                            <tr>
                                <th>Friday</th>
                                <td>${weekMealPlan.friBreakfast}</td>
                                <td>${weekMealPlan.friSnack1}</td>
                                <td>${weekMealPlan.friLunch}</td>
                                <td>${weekMealPlan.friSnack2}</td>
                                <td>${weekMealPlan.friDinner}</td>
                            </tr>

                            <tr>
                                <th>Saturday</th>
                                <td>${weekMealPlan.satBreakfast}</td>
                                <td>${weekMealPlan.satSnack1}</td>
                                <td>${weekMealPlan.satLunch}</td>
                                <td>${weekMealPlan.satSnack2}</td>
                                <td>${weekMealPlan.satDinner}</td>
                            </tr>

                            <tr>
                                <th>Sunday</th>
                                <td>${weekMealPlan.sunBreakfast}</td>
                                <td>${weekMealPlan.sunSnack1}</td>
                                <td>${weekMealPlan.sunLunch}</td>
                                <td>${weekMealPlan.sunSnack2}</td>
                                <td>${weekMealPlan.sunDinner}</td>
                            </tr>

                        </table>

                        <button onclick="print()" class="newWinBtn">Print my meal plan</button>

                    </section>

                </main>

            </body>
            </html>
        `);
    }

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