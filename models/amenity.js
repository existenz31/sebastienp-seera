// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Amenity = sequelize.define('amenity', {
    nameAr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nameEn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
    rank: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    isFeatured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    url: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'amenity',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Amenity.associate = (models) => {
    Amenity.belongsTo(models.amenityType, {
      foreignKey: {
        name: 'amenityTypeIdKey',
        field: 'amenity_type_id',
      },
      as: 'amenityType',
    });
    Amenity.hasMany(models.spaceAmenity, {
      foreignKey: {
        name: 'amenityIdKey',
        field: 'amenity_id',
      },
      as: 'spaceAmenities',
    });
    Amenity.hasMany(models.propertyAmenity, {
      foreignKey: {
        name: 'amenityIdKey',
        field: 'amenity_id',
      },
      as: 'propertyAmenities',
    });
    Amenity.hasMany(models.bathroomAmenity, {
      foreignKey: {
        name: 'amenityIdKey',
        field: 'amenity_id',
      },
      as: 'bathroomAmenities',
    });
    Amenity.hasMany(models.poolAmenity, {
      foreignKey: {
        name: 'amenityIdKey',
        field: 'amenity_id',
      },
      as: 'poolAmenities',
    });
  };

  return Amenity;
};
