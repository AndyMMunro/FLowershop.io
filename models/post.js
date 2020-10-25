module.exports = function (sequelize, Datatypes) {
  var review = sequelize.define("review", {

    FlowerName: {
      type: Datatypes.STRING,
      allowNull: false,
      len: [64],
    }
  });
  return Post;
};