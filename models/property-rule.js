// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const PropertyRule = sequelize.define('propertyRule', {
    descriptionEn: {
      type: DataTypes.STRING,
    },
    descriptionAr: {
      type: DataTypes.STRING,
    },
    rank: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
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
    tableName: 'property_rule',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  PropertyRule.associate = (models) => {
    PropertyRule.belongsTo(models.property, {
      foreignKey: {
        name: 'propertyIdKey',
        field: 'property_id',
      },
      as: 'property',
    });
    PropertyRule.belongsTo(models.rule, {
      foreignKey: {
        name: 'ruleIdKey',
        field: 'rule_id',
      },
      as: 'rule',
    });
  };

  return PropertyRule;
};
