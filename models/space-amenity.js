// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const SpaceAmenity = sequelize.define('spaceAmenity', {
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'space_amenity',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  SpaceAmenity.associate = (models) => {
    SpaceAmenity.belongsTo(models.amenity, {
      foreignKey: {
        name: 'amenityIdKey',
        field: 'amenity_id',
      },
      as: 'amenity',
    });
    SpaceAmenity.belongsTo(models.space, {
      foreignKey: {
        name: 'spaceIdKey',
        field: 'space_id',
      },
      as: 'space',
    });
  };

  return SpaceAmenity;
};
