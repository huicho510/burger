$(function() {
    $(".devour").on("click", function(event) {
      let id = $(this).data("id");

      let ate = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: ate
      }).then(
        function() {
          location.reload();
        }
      );
    });
    
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      let newBurger = {
        burger_name: $("#burg").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
        );
      });
    });
  