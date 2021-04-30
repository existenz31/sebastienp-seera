// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const SeeraHostConfig = sequelize.define('seeraHostConfig', {
    hostId: {
      type: DataTypes.STRING,
      allowNull: false,
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
      defaultValue: "system",
    },
  }, {
    tableName: 'seera_host_config',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  SeeraHostConfig.associate = (models) => {
    SeeraHostConfig.belongsTo(models.seeraCommission, {
      foreignKey: {
        name: 'seeraCommissionIdKey',
        field: 'seera_commission_id',
      },
      as: 'seeraCommission',
    });
    SeeraHostConfig.belongsTo(models.vatConfig, {
      foreignKey: {
        name: 'vatConfigIdKey',
        field: 'vat_config_id',
      },
      as: 'vatConfig',
    });
    SeeraHostConfig.hasMany(models.propertyBookingMeta, {
      foreignKey: {
        name: 'seeraHostConfigIdKey',
        field: 'seera_host_config_id',
      },
      as: 'seeraHostConfigPropertyBookingMetas',
    });
    SeeraHostConfig.hasMany(models.bookingTransactionMeta, {
      foreignKey: {
        name: 'seeraHostConfigIdKey',
        field: 'seera_host_config_id',
      },
      as: 'seeraHostConfigBookingTransactionMetas',
    });
  };

  return SeeraHostConfig;
};
