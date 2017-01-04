
// Creates a "Destination" model that matches up with DB

module.exports = function(sequelize, DataTypes) {
var Destination = sequelize.define("Destination", {
  
  destination: {
    type: DataTypes.STRING
  },
  locName: {
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
  });

  return Destination;
};





