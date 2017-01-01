
// Creates a "Destination" model that matches up with DB

module.exports = function(sequelize, DataTypes) {
var Destination = sequelize.define("Destination", {
  
  destination: {
    type: DataTypes.STRING
  },
  themeParks: {
    type: DataTypes.INTEGER,
  },
  roadTrip: {
    type: DataTypes.INTEGER,
  },
  nightlife: {
    type: DataTypes.INTEGER,
  },
  crowds: {
    type: DataTypes.INTEGER,
  },
  warm: {
    type: DataTypes.INTEGER,
  },
  sports: {
    type: DataTypes.INTEGER,
  },
  outdoor: {
    type: DataTypes.INTEGER,
  },
  water: {
    type: DataTypes.INTEGER,
  },
  cities: {
    type: DataTypes.INTEGER,
  },
  historic: {
    type: DataTypes.INTEGER,
  },
  photo: {
    type: DataTypes.STRING
  },
  blurb: {
    type: DataTypes.STRING
  },
  createdAt: {
    type: DataTypes.DATE
  }
  });

 /* 
  Todo.bulkCreate([
{ destination: "New York City", themeParks: 2, roadTrip: 1, nightlife: 5, crowds: 5, warm: 3, sports: 5, outdoor: 2, water: 2, cities: 5, historic: 4, photo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZy0wL_EYYYwQM7jAYw9mg4IgOQUhuMTw4LTzkFfaFn3kvRXqa", blurb: "The city that never sleeps.  Whether you want world class museums, Broadway shows, restaurants, shopping, nightlife, or championship sports teams you can find it here." },
{ destination: "New Orleans", themeParks: 1, roadTrip: 2, nightlife: 5, crowds: 5, warm: 5, sports: 3, outdoor: 1, water: 1, cities: 5, historic: 4, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8dHetLV3b20clk8RDhHzR41yVtf6Z3TM9uXkI2UZxavV8hbTFQw", blurb: "The birthplace of jazz.  Come enjoy the music scene, world class restaurants, take a steamboat down the Mississippi and learn about the unique history of New Orleans." },
{ destination: "Los Angeles", themeParks: 4, roadTrip: 1, nightlife: 5, crowds: 5, warm: 5, sports: 4, outdoor: 1, water: 4, cities: 4, historic: 2, photo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQB3EY5dJv5xYhX9IYcAVq-8PhGZemmSjqK_JqsHLpQQK0wtHyQmg", blurb: "See the sights of Hollywood, take a trip to the beach, and don’t forget to visit Disneyland!" },
{ destination: "Washington DC", themeParks: 2, roadTrip: 1, nightlife: 4, crowds: 5, warm: 3, sports: 2, outdoor: 2, water: 1, cities: 5, historic: 5, photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGiZm5yNOnCo2vLcHemyOzxx8TbjpqqOSHsVZ-IvecD03aztyH", blurb: "Visit our nation’s capital.  Visit the Capitol and White House, see the monuments to our nation’s history, explore the Smithsonian and many other museums." },
{ destination: "San Francisco", themeParks: 3, roadTrip: 3, nightlife: 5, crowds: 5, warm: 2, sports: 2, outdoor: 2, water: 3, cities: 5, historic: 3, photo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTW992n1dUnVFVOS1FfCnSvGGzyzwuYfSbgTu-UCtMwEiQx_Rvu", blurb: "See the unique sights of San Francisco – the Golden Gate Bridge, Alcatraz, Fisherman’s Wharf, Chinatown and more." },
{ destination: "Las Vegas", themeParks: 4, roadTrip: 3, nightlife: 5, crowds: 5, warm: 4, sports: 1, outdoor: 1, water: 1, cities: 3, historic: 1, photo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcROLDiwv4PiPKObHXFJokc2xdnl0fJMJWqu4n5Ga3GNBEzz_Wbp", blurb: "Enjoy the gambling and Nightlife, take in a show, take a trip to Hoover Dam and the Grand Canyon." },
{ destination: "Oahu", themeParks: 1, roadTrip: 2, nightlife: 5, crowds: 2, warm: 5, sports: 2, outdoor: 4, water: 5, cities: 5, historic: 2, photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRrMJlZ4g0Ire5D8m1LT2sDzmXN-q4GNORj6RsPDp3PETf6DO8feg", blurb: "All the big city benefits of Honolulu, combined with world class beaches and stunning scenery." },
{ destination: "Maui", themeParks: 1, roadTrip: 3, nightlife: 2, crowds: 1, warm: 5, sports: 2, outdoor: 5, water: 5, cities: 1, historic: 1, photo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNV4FwWa2hNJ1TG6N9D889917MPP1K5kSTjUxHyiujNzNAD03B", blurb: "Enjoy snorkeling at breathtaking beaches, hike Haleakala crater, go whale watching, or learn to surf." },
{ destination: "Disney World", themeParks: 5, roadTrip: 3, nightlife: 3, crowds: 5, warm: 5, sports: 1, outdoor: 3, water: 3, cities: 1, historic: 1, photo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ4pT5JQ2F9ZY4Mqe51jmWK4aLzhQhI2RSZPbmQxrXE2IPYtMl_", blurb: "Visit all of Disney’s parks, enjoy your stay in their resort hotels, and enjoy their restaurants and nightlife." },
{ destination: "Florida Keys", themeParks: 1, roadTrip: 4, nightlife: 4, crowds: 3, warm: 5, sports: 2, outdoor: 4, water: 5, cities: 1, historic: 1, photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGzf7QFvyAxOrFILXDrLr6pLqfzDzqIpOOTXWZL1zPEfKaY8Pq3g", blurb: "Explore all 120 miles of islands - Enjoy beautiful beaches, fishing, diving and the nightlife of Key West." },
{ destination: "Central Texas", themeParks: 2, roadTrip: 4, nightlife: 3, crowds: 3, warm: 4, sports: 4, outdoor: 5, water: 4, cities: 3, historic: 5, photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOmbU5nUmsw9Mdnfvkq231q9ltzkQgja9ymnNeIjJP-I2sBqOB", blurb: "Central Texas has it all – History, dining and nightlife in Austin, wineries in hill country, hiking, boating and more." },
{ destination: "Mount Rushmore", themeParks: 1, roadTrip: 5, nightlife: 1, crowds: 1, warm: 2, sports: 2, outdoor: 5, water: 1, cities: 1, historic: 3, photo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTOgXmVKhB_xLGJoE9eKYLiEDw_lSPE69EDaCU1BziXsc9bosswJQ", blurb: "Come see Mount Rushmore and the Crazy Horse monument, and take a road trip through the Badlands." },
{ destination: "Grand Canyon", themeParks: 1, roadTrip: 5, nightlife: 1, crowds: 2, warm: 4, sports: 2, outdoor: 5, water: 1, cities: 1, historic: 1, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbPb7rEPrlRghMaQ12bTf53x4ECJcwn6UzXVNTGnjtXbA0w2h0cw", blurb: "Don’t just stop at the south rim! Enjoy hiking, camping, and rafting in the canyon.  Take a road trip to the Painted Desert." },
{ destination: "Vermont", themeParks: 1, roadTrip: 4, nightlife: 1, crowds: 3, warm: 1, sports: 3, outdoor: 5, water: 1, cities: 1, historic: 2, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEn-Ck76qq8VVx83434uR3rN7G_V-ELJTLn6vVTaSc-DHmKh-2g", blurb: "Enjoy hiking or skiing in our beautiful mountains.  Don’t forget to visit the Ben and Jerry’s factory." },
{ destination: "Glacier National Park", themeParks: 2, roadTrip: 5, nightlife: 1, crowds: 1, warm: 1, sports: 2, outdoor: 5, water: 1, cities: 1, historic: 1, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3ibz5EYn_6bcqI4ZC7VQu2p5rCaKF6YYoDh5LD9YRAqJFFUN", blurb: "Hiking, camping, cross country skiing and boating.  Hike on Many Glacier.  Cross the Continental Divide." },
{ destination: "Aspen", themeParks: 1, roadTrip: 3, nightlife: 3, crowds: 3, warm: 3, sports: 3, outdoor: 5, water: 1, cities: 1, historic: 1, photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRx0z9Q7oyklMU9BpjcPjDYWyXfn11Lx0MiMZnyzJd4BO-m7b1B", blurb: "Enjoy world class skiing, rafting, fly-fishing, hiking and biking and restaurants, shopping and concerts." }
]).then(function() {});
*/

  return Destination;
};





