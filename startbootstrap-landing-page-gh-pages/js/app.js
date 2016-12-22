$( document ).ready(function() {


//  RESULTS SECTION
  $("#matchResults").hide();

  $("#submit").on("click", function(){
    $("#matchResults").show();
  });

// GOOGLE MAP 
// function initMap() {
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 8,
//           center: {lat: 30.267153, lng: -97.743061},
//           styles: [{"featureType":"water","elementType":"all","stylers":[{"hue":"#7fc8ed"},{"saturation":55},{"lightness":-6},{"visibility":"on"}]},{"featureType":"water","elementType":"labels","stylers":[{"hue":"#7fc8ed"},{"saturation":55},{"lightness":-6},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"hue":"#83cead"},{"saturation":1},{"lightness":-15},{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"hue":"#f3f4f4"},{"saturation":-84},{"lightness":59},{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbbbbb"},{"saturation":-100},{"lightness":26},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#ffcc00"},{"saturation":100},{"lightness":-35},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#ffcc00"},{"saturation":100},{"lightness":-22},{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"hue":"#d7e4e4"},{"saturation":-60},{"lightness":23},{"visibility":"on"}]}]
//         });
//         var geocoder = new google.maps.Geocoder();

//         document.getElementById('submit').addEventListener('click', function() {
//           geocodeAddress(geocoder, map);
//         });
//       }

//       function geocodeAddress(geocoder, resultsMap) {
//         var address = document.getElementById('address').value;
//         geocoder.geocode({'address': address}, function(results, status) {
//           if (status === 'OK') {
//             resultsMap.setCenter(results[0].geometry.location);
//             var marker = new google.maps.Marker({
//               map: resultsMap,
//               position: results[0].geometry.location
//             });
//           } else {
//             alert('Geocode was not successful for the following reason: ' + status);
//           }
//         });
//       }

// initMap();


// SURVEY
var config = {
      ".chosen-select": {},
      ".chosen-select-deselect": { allow_single_deselect: true },
      ".chosen-select-no-single": { disable_search_threshold: 10 },
      ".chosen-select-no-results": { no_results_text: "Oops, nothing found!" },
      ".chosen-select-width": { width: "95%" }
    };
    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }
    // Capture the form inputs
    $("#submit").on("click", function() {
      // Form validation
      function validateForm() {
        var isValid = true;
        $(".form-control").each(function() {
          if ($(this).val() === "") {
            isValid = false;
          }
        });
        $(".chosen-select").each(function() {
          if ($(this).val() === "") {
            isValid = false;
          }
        });
        return isValid;
      }
      // If all required fields are filled
      if (validateForm()) {
        // Create an object for the user"s data
        var userData = {
          scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
          ]
        };
        // Grab the URL of the website
        var currentURL = window.location.origin;
        // AJAX post the data to the survey API.
        $.post(currentURL + "/api/survey", userData, function(data) {
          // Grab the result from the AJAX post so that the best match's name and photo are displayed.
          $("#matchName").text(data.name);
          $("#matchImg").attr("src", data.photo);
          // Show the modal with the best match
          $("#resultsModal").modal("toggle");
        });
      }
      else {
        alert("Please fill out all fields before submitting!");
      }
      return false;
    });

});