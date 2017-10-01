/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('animal', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    non_shelter: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    hold_until: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    hold_until_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: true
    },
    estimated_age: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    lookup_sex_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    lookup_animal_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    lookup_animal_category_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    lookup_spiecies_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'animal'
  });
};
