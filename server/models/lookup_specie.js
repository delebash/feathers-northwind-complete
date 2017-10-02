/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lookup_specie', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'lookup_specie'
  });
};
