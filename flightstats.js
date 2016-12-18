
$(document).ready(function() {
	// keys
	var fSappId = "3bb6e9e5"
	var fSappKey = "725fa65bd5d71ecd80d2acd493e4f562"
	
	//when airline button is clicked
	$("#airline").on("click", function() {
		// clear list
		$("#list").html("")
		// capture input, set case
		var input = $("#input").val().toLowerCase()
		//check for no input
		if (input != "") {
			// build query
			var queryAirline =  "https://api.flightstats.com/flex/airlines/rest/v1/json/active?appId="+fSappId+"&appKey="+fSappKey
			console.log(queryAirline)
			// get data from api
			$.ajax({url: queryAirline, method: 'GET'})
			//create object
			.done(function(aLResponse) {
				// loop thru data
				for (i=0; i<aLResponse.airlines.length; i++){
					// get name from response, set case, check for match to user input
					var name = aLResponse.airlines[i].name.toLowerCase()
					var check = name.search(input);
					if (check != -1) {
						//if match, add to table
						$("#choice").html("Airline")
						$("#list").append("<tr><td>"+aLResponse.airlines[i].name+"</td><td>"+aLResponse.airlines[i].fs+"</td></tr>")
					} //end if check
				}  // end for loop
			});  // end .done
			return false;
		}; // end if input
	}); // end on click

	//when airport button is clicked
	$("#airport").on("click", function() {
		// clear list
		$("#list").html("")
		// capture input, set case
		var input = $("#input").val().toLowerCase()
		//check for no input
		if (input != "") {
			// build query
			var queryAirport = "https://api.flightstats.com/flex/airports/rest/v1/json/active?appId="+fSappId+"&appKey="+fSappKey
			console.log(queryAirport)
			// get data
			$.ajax({url: queryAirport, method: 'GET'})
			//create object
			.done(function(aPResponse) {
				// loop thru data
				for (i=0; i<aPResponse.airports.length; i++){
					// get name from response, set case, check for match to user input
					var name = aPResponse.airports[i].name.toLowerCase()
					var check = name.search(input);
					if (check != -1) {
						//if match, add to table
						$("#choice").html("Airport")
						$("#list").append("<tr><td>"+aPResponse.airports[i].name+"</td><td>"+aPResponse.airports[i].fs+"</td></tr>")
					} //end if check
				}  // end for loop
			});  // end .done
			return false;
		}; // end if input
	}); // end on click

/*
console.log("airlines!!")
console.log("you asked for: " + input)
console.log(queryAirline)
console.log(aLResponse)
console.log("a.l"+aLResponse.airlines.length)
console.log("XXXXXXXXXXXXXXX")
console.log([i]+": "+aLResponse.airlines[i].name);
console.log([i]+": "+aLResponse.airlines[i].fs);
console.log("XXXXXXXXXXXXXXX")

console.log("airports!!")
console.log("you asked for: " + input)	
console.log(queryAirport)
console.log(aPResponse)
console.log("a.l"+aPResponse.airports.length)
console.log("XXXXXXXXXXXXXXX")
console.log([i]+": "+aPResponse.airports[i].name);
console.log([i]+": "+aPResponse.airports[i].fs);
console.log("XXXXXXXXXXXXXXX")
*/

});  // end document.ready
