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
    parseInt($("#q1").val()),
    parseInt($("#q2").val()),
    parseInt($("#q3").val()),
    parseInt($("#q4").val()),
    parseInt($("#q5").val()),
    parseInt($("#q6").val()),
    parseInt($("#q7").val()),
    parseInt($("#q8").val()),
    parseInt($("#q9").val()),
    parseInt($("#q10").val())
  ];
  console.log("two - survey data?")
  console.log(surveyData.length)
  console.log(surveyData)
  //fix this to check for NaN
  var a = surveyData.indexOf("NaN");
  alert(a)

  if (surveyData.length < 10) {
    alert("Please answer all questions")
  } else {
    console.log("next step!!")
    tableData(surveyData)
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
    travelMatch.push(parseInt(data[i].themeParks),parseInt(data[i].roadTrip),parseInt(data[i].nightlife),parseInt(data[i].crowds),parseInt(data[i].warm),parseInt(data[i].sports),parseInt(data[i].outdoor),parseInt(data[i].water),parseInt(data[i].cities),parseInt(data[i].historic));
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
    // set data and call modal
    //$("#????").text(match.destination)
    //$("#????").html('<img src="'+match.photo+'"">')
    //$("#????").text(match.blurb)
    //$("#myModal").modal()
    console.log("11b - check data")
    console.log(match.destination)
    console.log(match.photo)
    console.log(match.blurb)
    getWeather(match)
 }); // end .get
};  // end tableData

function getWeather(match) {
  var location = match.destination
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
    console.log(weatherResponse.current.temp_f);
    console.log(weatherResponse.current.humidity);
    console.log(weatherResponse.current.wind_dir);
    console.log(weatherResponse.current.wind_mph);
    console.log(weatherResponse.current.feelslike_f);
    console.log(weatherResponse.current.precip_in);
    var temp = weatherResponse.current.temp_f;
    var humidity = weatherResponse.current.humidity;
    var windDir = weatherResponse.current.wind_dir;
    var windMph = weatherResponse.current.wind_mph;
    var feelsLike = weatherResponse.current.feelslike_f;
    var precip = weatherResponse.current.precip_in;
    console.log("ten - variables")
    console.log(temp);
    console.log(humidity);
    console.log(windDir);
    console.log(windMph);
    console.log(feelsLike);
    console.log(precip);
    // set data and call modal
    //$("#????").text(temp)
    //$("#????").text(humidity)
    //$("#????").text(windDir)
    //$("#????").text(windMph)
    //$("#????").text(feelsLike)
    //$("#????").text(precip)
    //$("#myModal").modal() 
    console.log("11b - check data")
    console.log(temp)
    console.log(humidity)
    console.log(windDir)
    console.log(windMph)
    console.log(feelsLike)
    console.log(precip)    
  });
  
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
    console.log("in")
  });
  console.log("out")
 }); 


});

   

  