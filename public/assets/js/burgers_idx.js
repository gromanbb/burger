// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).on("click", ".devour", function (event) {
  event.preventDefault();

  var id = $(this).val();

  // Send the PUT request.
  $.ajax({
    method: "PUT",
    url: "/api/burgers/" + id,
    success: function (req) {
      // Reload the page to get the updated list
      location.reload();
    }
  });
});

$("#submit").on("click", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  let newBurger = {
    name: $("#burger_name").val().trim()
  };

  // Send the POST request.
  $.post("/api/burgers", newBurger, function (req) {
    // Reload the page to get the updated list
    location.reload();
  });
});

