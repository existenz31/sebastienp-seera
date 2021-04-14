// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const HostPenality = sequelize.define('hostPenality', {
    descriptionEn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descriptionAr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hostId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timeThreshold: {
      type: DataTypes.INTEGER,
    },
    penalityPercentage: {
      type: DataTypes.DOUBLE,
    },
    penalityFee: {
      type: DataTypes.DOUBLE,
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
      defaultValue: "system",
    },
    almCancellationFee: {
      type: DataTypes.DOUBLE,
    },
    almCancellationFeeVat: {
      type: DataTypes.DOUBLE,
    },
  }, {
    tableName: 'host_penality',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  HostPenality.associate = (models) => {
    HostPenality.belongsTo(models.cancellationPolicyType, {
      foreignKey: {
        name: 'cancellationPolicyTypeIdKey',
        field: 'cancellation_policy_type_id',
      },
      as: 'cancellationPolicyType',
    });
    HostPenality.hasMany(models.propertyBookingMeta, {
      foreignKey: {
        name: 'hostPenalityIdKey',
        field: 'host_penality_id',
      },
      as: 'hostPenalityPropertyBookingMetas',
    });
    HostPenality.hasMany(models.bookingTransactionMeta, {
      foreignKey: {
        name: 'hostPenalityIdKey',
        field: 'host_penality_id',
      },
      as: 'hostPenalityBookingTransactionMetas',
    });
  };

  return HostPenality;
};
