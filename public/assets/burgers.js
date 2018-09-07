// This script will handle the forms and button-clicks on the index page
// Reference the cats app, cats.js file (not cat.js)
// The main difference between assignments is that
// once the burger is eaten, we are not (necessarily)
// going to change its state BACK to "uneaten"
// This may explain why there are not separate "blocks" in the plan
// corresponding to 'eaten' and 'uneaten', the way 
// the cats app has blocks for "sleeping" and "awake."
$(document).ready(function() {
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    // This handler fires when the user clicks 
    // "Devour It!" or "Get Another" and toggles
    // the state of the "devoured" boolean at the
    // database AND on the page rendering.

    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        var newEaten = !$(this).data("neweaten");

        var newEatenState = {
            devoured: newEaten
        };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                console.log("changed eaten to ", newEaten);
                // Reload the page to update the burger list
                location.reload();
            }
        );
    });

    // This handler fires when the user submits the 
    // "Add a burger form" and sends the POST request

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#bur").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // Send the POST request
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
            }).then(
                function() {
                    console.log("added a new burger!");
                    // Reload the page to update the burger list
                    location.reload();
            });
        });
});

});