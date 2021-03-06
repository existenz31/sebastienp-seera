// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const BookingTransactionMeta = sequelize.define('bookingTransactionMeta', {
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
    referenceGuestId: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'booking_transaction_meta',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  BookingTransactionMeta.associate = (models) => {
    BookingTransactionMeta.belongsTo(models.bookingTransaction, {
      foreignKey: {
        name: 'bookingTransactionIdKey',
        field: 'booking_transaction_id',
      },
      as: 'bookingTransaction',
    });
    BookingTransactionMeta.belongsTo(models.hostPenality, {
      foreignKey: {
        name: 'hostPenalityIdKey',
        field: 'host_penality_id',
      },
      as: 'hostPenality',
    });
    BookingTransactionMeta.belongsTo(models.seeraHostConfig, {
      foreignKey: {
        name: 'seeraHostConfigIdKey',
        field: 'seera_host_config_id',
      },
      as: 'seeraHostConfig',
    });
    BookingTransactionMeta.belongsTo(models.seeraPenality, {
      foreignKey: {
        name: 'seeraPenalityIdKey',
        field: 'seera_penality_id',
      },
      as: 'seeraPenality',
    });
  };

  return BookingTransactionMeta;
};
