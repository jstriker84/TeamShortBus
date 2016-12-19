
$(document).ready(function() {
	// keys
	var fSappId = "3bb6e9e5"
	var fSappKey = "725fa65bd5d71ecd80d2acd493e4f562"
	
	// find an airline code
	//when airline button is clicked
	$("#airline").on("click", function() {
		// clear list
		$("#list").html("")
		// capture input, set case
		var input = $("#airPL").val().toLowerCase()
		//check for no input
		if (input != "") {
			// build query
			var queryAirline =  "https://api.flightstats.com/flex/airlines/rest/v1/json/active?appId="+fSappId+"&appKey="+fSappKey
			console.log(queryAirline)
			// get data from api
			$.ajax({url: queryAirline, method: 'GET'})
			//create object
			.done(function(aLResponse) {
				// log response
				console.log(aLResponse)
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
	// find an airline code

	// find an airport code
	//when airport button is clicked
	$("#airport").on("click", function() {
		// clear list
		$("#list").html("")
		// capture input, set case
		var input = $("#airPL").val().toLowerCase()
		//check for no input
		if (input != "") {
			// build query
			var queryAirport = "https://api.flightstats.com/flex/airports/rest/v1/json/active?appId="+fSappId+"&appKey="+fSappKey
			console.log(queryAirport)
			// get data
			$.ajax({url: queryAirport, method: 'GET'})
			//create object
			.done(function(aPResponse) {
				// log response
				console.log(aPResponse)
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
	// find an airport code

	// find an airline from code
	//when airline button is clicked
	$("#codeAL").on("click", function() {
		// clear list
		$("#list").html("")
		// capture input, set case
		var input = $("#code").val().toUpperCase()
		//check for no input
		if (input != "") {
			// build query
			var queryALCode = "https://api.flightstats.com/flex/airlines/rest/v1/json/fs/"+input+"?appId="+fSappId+"&appKey="+fSappKey
			console.log(queryALCode)
			// get data from api
			$.ajax({url: queryALCode, method: 'GET'})
			//create object
			.done(function(cALResponse) {
				// log response
				console.log(cALResponse)
				//add to table
				$("#choice").html("Airline")
				$("#list").append("<tr><td>"+cALResponse.airline.name+"</td><td>"+input+"</td></tr>")
			});  // end .done
		return false;	
		}; // end if input
	}); // end on click
	// find an airline from code

	// find an airport from code
	//when airport button is clicked
	$("#codeAP").on("click", function() {
		// clear list
		$("#list").html("")
		// capture input, set case
		var input = $("#code").val().toUpperCase()
		//check for no input
		if (input != "") {
			// build query
			var queryAPCode = "https://api.flightstats.com/flex/airports/rest/v1/json/fs/"+input+"?appId="+fSappId+"&appKey="+fSappKey
			console.log(queryAPCode)
			// get data
			$.ajax({url: queryAPCode, method: 'GET'})
			//create object
			.done(function(cAPResponse) {
				// log response
				console.log(cAPResponse)
				//add to table
				$("#choice").html("Airport")
				$("#list").append("<tr><td>"+cAPResponse.airport.name+"</td><td>"+input+"</td></tr>")
			});  // end .done
		return false;
		}; // end if input
	}); // end on click
	// find an airport from code	


	// find a flight
	$("#flights").on("click", function() {
		// clear list
		$("#list2").html("")
		// capture input, set case
		var dep = $("#dep").val().toUpperCase()
		var arr = $("#arr").val().toUpperCase()
		var month = $("#month").val().toUpperCase()
		var day = $("#day").val().toUpperCase()
		var year = $("#year").val().toUpperCase()
		// build query
		var queryFlights = "https://api.flightstats.com/flex/schedules/rest/v1/json/from/"+dep+"/to/"+arr+"/departing/"+year+"/"+month+"/"+day+"?appId="+fSappId+"&appKey="+fSappKey
		console.log(queryFlights)
		// get data
			$.ajax({url: queryFlights, method: 'GET'})
			//create object
			.done(function(fltResponse) {
				//log results
				console.log(fltResponse)
				//log data
				for (i=0; i<fltResponse.scheduledFlights.length; i++){
				// get data from response, push to table
					var depTime = fltResponse.scheduledFlights[i].departureTime
					var depStr = depTime.toString()
					var timeD = depStr.split("T")
					var arrTime = fltResponse.scheduledFlights[i].arrivalTime
					var arrStr = arrTime.toString()
					var timeA = arrStr.split("T")
					$("#list2").append("<tr><td>"+fltResponse.scheduledFlights[i].carrierFsCode+" "+fltResponse.scheduledFlights[i].flightNumber+"</td><td>"+timeD[1]+"</td><td>"+timeA[1]+"</td></tr>");
				}  // end for loop
			});  // end .done
		return false;		
	}); // end on click	
	// find a flight

	//flight status
	$("#fltStat").on("click", function() {
		// clear list
		$("#list3").html("")
		// capture input, set case
		var carCode = $("#carCode").val().toUpperCase()
		var fltNum = $("#fltNum").val().toUpperCase()
		var monthStat = $("#monthStat").val().toUpperCase()
		var dayStat = $("#dayStat").val().toUpperCase()
		var yearStat = $("#yearStat").val().toUpperCase()
		// build query
		var queryFltStat = "https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/"+carCode+"/"+fltNum+"/arr/"+yearStat+"/"+monthStat+"/"+dayStat+"?appId="+fSappId+"&appKey="+fSappKey+"&utc=false"
		console.log(queryFltStat)
		// get data
			$.ajax({url: queryFltStat, method: 'GET'})
			//create object
			.done(function(fltStatResponse) {
				//log results
				console.log(fltStatResponse);
				//log data
				for (i=0; i<fltStatResponse.flightStatuses.length; i++){
					// get data from response
					var status = fltStatResponse.flightStatuses[i].status
					var fltFrom = fltStatResponse.flightStatuses[i].departureAirportFsCode
					var fltTo = fltStatResponse.flightStatuses[i].arrivalAirportFsCode
					var depLate = fltStatResponse.flightStatuses[i].delays.departureRunwayDelayMinutes
					var arrLate = fltStatResponse.flightStatuses[i].delays.arrivalGateDelayMinutes
					//check if cancelled
					if (status === "C") {
						// get data from response, push to table
						$("#list3").append("<tr><td>"+fltNum+"</td><td>"+fltFrom+"</td><td>"+fltTo+"</td><td>CANCELLED</td></tr>");
					} else {
						// get data from response, push to table
						$("#list3").append("<tr><td>"+fltNum+"</td><td>"+fltFrom+"</td><td>"+fltTo+"</td><td>"+depLate+"</td><td>"+arrLate+"</td></tr>");
					} // end if
				}  // end for loop
			});  // end .done
		return false;		
	}); // end on click	
	//flight status

	//airport status
	$("#apStat").on("click", function() {
		// clear list
		$("#list4").html("")
		// capture input, set case
		var apCode = $("#apCode").val().toUpperCase()
		// build query
		var queryApStat = "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/"+apCode+"?appId="+fSappId+"&appKey="+fSappKey+"&classification=5"
		console.log(queryApStat)
		// get data
			$.ajax({url: queryApStat, method: 'GET'})
			//create object
			.done(function(apStatResponse) {
				//log results
				console.log(apStatResponse);
				// get data from response
				var score = apStatResponse.delayIndexes[0].normalizedScore
				var totFlt = apStatResponse.delayIndexes[0].flights
				var cancFlt = apStatResponse.delayIndexes[0].canceled
				var onTime = apStatResponse.delayIndexes[0].onTime
				var late15 = apStatResponse.delayIndexes[0].delayed15
				var late30 = apStatResponse.delayIndexes[0].delayed30
				var late45 = apStatResponse.delayIndexes[0].delayed45
				// push to table
				$("#list4").append("<tr><td>"+apCode+"</td><td>"+score+"</td><td>"+totFlt+"</td><td>"+cancFlt+"</td><td>"+onTime+"</td><td>"+late15+"</td><td>"+late30+"</td><td>"+late45+"</td></tr>");
			});  // end .done
		return false;		
	}); // end on click
	//airport status




});  // end document.ready
