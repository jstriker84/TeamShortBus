$( document ).ready(function() {

  //on click
  $("#submit").on("click", function() {
    console.log("one - click?")
    console.log("clicked")
    captureData()
  });  // end click

  //capture data from form
  function captureData(){
    var surveyData = [
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
    ];
    console.log("two - survey data?")
    console.log(surveyData.length)
    console.log(surveyData)
    var blank = surveyData.indexOf("");
    if (blank == -1) {
        console.log("next step!!")
        tableData(surveyData)
    } else {
      clearModal()
      $("#dest").text("Please answer all questions")
    };  // end else
  };  // end captureData

  function tableData(surveyData){
    //pull data from db
    $.get("/api/findDest", function(data) {
    console.log("two/three - survey data?")
    console.log(surveyData)
      console.log("three - pull from db");
      console.log(data);
      console.log(data[3].destination)    
      var scoreArray = []
      for (var i=0; i<data.length; i++) {
      var travelMatch = []
      travelMatch.push(data[i].themeParks,data[i].roadTrip,data[i].nightlife,data[i].crowds,data[i].warm,data[i].sports,data[i].outdoor,data[i].water,data[i].cities,data[i].historic);
      console.log("four - vals from db")
      console.log(i, travelMatch)
      var score = 0
        for (var j=0; j<travelMatch.length; j++) {
        score += Math.abs(surveyData[j]-travelMatch[j]);
        }  // end for j
        console.log("five - data comp")
        console.log(i,score)
        scoreArray.push(score);
      }  // end for i
      console.log("six - score array and pick")
      console.log(scoreArray)
      //find position of lowest value in new array
      var matchLoc =scoreArray.indexOf(Math.min.apply(Math, scoreArray))
      console.log(matchLoc)
      //select destination at that position
      var match = data[matchLoc]
      console.log(match)
      getWeather(match)
   }); // end .get
  };  // end tableData

  function getWeather(match) {
    var location = match.locName
    console.log("seven - location")
    console.log(location)
      //lat/lon info from google
    var queryWeatherURL = "http://api.apixu.com/v1/current.json?key=4fa30064f91c4277b4c225846162612&q=" + location
    console.log(queryWeatherURL)
    $.ajax({url: queryWeatherURL, method: 'GET'})
    //create object
    .done(function(weatherResponse) {
      console.log("eight - weather object")
      console.log(weatherResponse);
      console.log("nine - weather data")    
      popModal(match, weatherResponse)
    });
  }

  function popModal(match, weatherResponse) {
      // set data and call modal
      clearModal()
      $("#dest").text(match.destination)
      $("#pic").html('<img src="'+match.photo+'"">')
      $("#blurb").text(match.blurb)
      console.log("11b - check data")
      console.log(match.destination)
      console.log(match.photo)
      console.log(match.blurb)
      console.log(weatherResponse.current.temp_f);
      console.log(weatherResponse.current.humidity);
      console.log(weatherResponse.current.condition.text);
      console.log(weatherResponse.current.feelslike_f);
      console.log(weatherResponse.current.precip_in);
      $("#weather1").text(weatherResponse.current.temp_f+"F    "+weatherResponse.current.condition.text)
      $("#weather2").text("Precipitation: "+weatherResponse.current.precip_in+" In.")
      $("#weather3").text("Humidity: "+weatherResponse.current.humidity+"%")
      $("#weather4").text("Feels like "+weatherResponse.current.feelslike_f+"F")
  }

  function clearModal() {
      $("#dest").text("")
      $("#pic").text("")
      $("#blurb").text("")
      $("#weather1").text("")
      $("#weather2").text("")
      $("#weather3").text("")
      $("#weather4").text("")
  }

  ////////////////////////////////




  //submit review

  $("#reviewSubmit").on("click", function() {
    console.log("one - review clicked")
    
    var reviewInput = $("#textArea");
    console.log("two - pull data")
    console.log(reviewInput)

    var newReview = {
        review: reviewInput.val().trim()
      };
    console.log("three - make model")
    console.log(newReview)

    $.post("/api/newReview", newReview, function() {
      
      $("#reviews").append('<tr><td class="tblReview">'+newReview.review+'</td></tr>')

    });
    
   }); 


});

   

  