module.exports = function (sequelize, Datatypes) {
  var Flowers = sequelize.define("review", {

    FlowerName: {
      type: Datatypes.STRING,
      allowNull: false,
      len: [64],
    },
    NumberOf: {
      type: Datatypes.STRING,
      allowNull: false,
      len: [64],
    }
  });
  return Flowers;
};