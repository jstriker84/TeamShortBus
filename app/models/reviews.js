
// Creates a "Review" model that matches up with DB

module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("review", {

  review: {
    type: DataTypes.STRING
  },
  
});
  return Review;
};


