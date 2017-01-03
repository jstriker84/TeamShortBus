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
  if (surveyData.length < 10) {
    alert("Please answer all questions")
  } else {
    tableData()
  };  // end else
};  // end captureData

function tableData(){
  //pull data from db
  $.get("/api/destinations", function(data) {
    console.log("three - pul from db");
    console.log(data);
    //destinations = data;
    var scoreArray = []
    for (var i=0, i<data.length, i++) {
    var travelMatch = []
    travelMatch.push(parseInt(data.themeParks),parseInt(data.roadTrip),parseInt(data.nightlife),parseInt(data.crowds),parseInt(data.warm),parseInt(data.sports),parseInt(data.outdoor),parseInt(data.water),parseInt(data.cities),parseInt(data.historic));
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
  }); // end .get
  getWeather()
};  // end tableData

function getWeather () {
  var location = match.destination
  console.log("seven - location")
  console.log(location)
  //Evan's weather code here!!
  popModal()
}

function popModal () {
  // set data and call modal
  $("#????").text(match.destination)
  $("#????").html('<img src="'+match.photo+'"">')
  $("#????").text(match.blurb)
  //more lines for weathe data calls
  $("#myModal").modal()  
}

//////////////////////////////////

//submit review

$("#submitReview").on("click", function() {
  $.post("/api/newReview", post, function() {
  });
 }); 