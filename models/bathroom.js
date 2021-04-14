// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Bathroom = sequelize.define('bathroom', {
    descriptionEn: {
      type: DataTypes.STRING,
    },
    descriptionAr: {
      type: DataTypes.STRING,
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
    bathroomTypeId: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
      allowNull: false,
    },
  }, {
    tableName: 'bathroom',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Bathroom.associate = (models) => {
    Bathroom.belongsTo(models.property, {
      foreignKey: {
        name: 'propertyIdKey',
        field: 'property_id',
      },
      as: 'property',
    });
    Bathroom.belongsTo(models.propertyRoom, {
      foreignKey: {
        name: 'roomIdKey',
        field: 'room_id',
      },
      as: 'room',
    });
    Bathroom.hasMany(models.bathroomAmenity, {
      foreignKey: {
        name: 'bathroomIdKey',
        field: 'bathroom_id',
      },
      as: 'bathroomAmenities',
    });
    Bathroom.hasMany(models.image, {
      foreignKey: {
        name: 'bathroomIdKey',
        field: 'bathroom_id',
      },
      as: 'images',
    });
  };

  return Bathroom;
};
