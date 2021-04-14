// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Region = sequelize.define('region', {
    nameAr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nameEn: {
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: 'region',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Region.associate = (models) => {
    Region.belongsTo(models.country, {
      foreignKey: {
        name: 'countryCodeKey',
        field: 'country_code',
      },
      targetKey: 'countryCode',
      as: 'countryCode',
    });
    Region.hasMany(models.city, {
      foreignKey: {
        name: 'regionIdKey',
        field: 'region_id',
      },
      as: 'cities',
    });
    Region.hasMany(models.location, {
      foreignKey: {
        name: 'regionIdKey',
        field: 'region_id',
      },
      as: 'locations',
    });
  };

  return Region;
};