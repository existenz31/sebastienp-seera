// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Space = sequelize.define('space', {
    nameAr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nameEn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.DOUBLE,
    },
    capacity: {
      type: DataTypes.INTEGER,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: "CURRENT_TIMESTAMP",
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: "CURRENT_TIMESTAMP",
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'space',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Space.associate = (models) => {
    Space.belongsTo(models.measurementUnit, {
      foreignKey: {
        name: 'measurementUnitIdKey',
        field: 'measurement_unit_id',
      },
      as: 'measurementUnit',
    });
    Space.belongsTo(models.spaceType, {
      foreignKey: {
        name: 'spaceTypeIdKey',
        field: 'space_type_id',
      },
      as: 'spaceType',
    });
    Space.hasMany(models.spaceAmenity, {
      foreignKey: {
        name: 'spaceIdKey',
        field: 'space_id',
      },
      as: 'spaceAmenities',
    });
  };

  return Space;
};