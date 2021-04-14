// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const BookingTransactionAud = sequelize.define('bookingTransactionAud', {
    rev: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    revtype: {
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
    },
    bookingStatus: {
      type: DataTypes.STRING,
    },
    checkin: {
      type: DataTypes.DATE,
    },
    checkout: {
      type: DataTypes.DATE,
    },
    currencyConvRate: {
      type: DataTypes.DOUBLE,
    },
    financeStatus: {
      type: DataTypes.STRING,
    },
    guestId: {
      type: DataTypes.STRING,
    },
    hostEarning: {
      type: DataTypes.DOUBLE,
    },
    hostId: {
      type: DataTypes.STRING,
    },
    hostPenalityPercentage: {
      type: DataTypes.DOUBLE,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
    propertyCurrency: {
      type: DataTypes.STRING,
    },
    propertyNameAr: {
      type: DataTypes.STRING,
    },
    propertyNameEn: {
      type: DataTypes.STRING,
    },
    seeraCommissionPercentage: {
      type: DataTypes.DOUBLE,
    },
    seeraEarning: {
      type: DataTypes.DOUBLE,
    },
    seeraPenalityPercentage: {
      type: DataTypes.DOUBLE,
    },
    totalPrice: {
      type: DataTypes.DOUBLE,
    },
    userCurrency: {
      type: DataTypes.STRING,
    },
    vatPercentage: {
      type: DataTypes.DOUBLE,
    },
    hostPenalityAmount: {
      type: DataTypes.DOUBLE,
    },
    seeraPenalityAmount: {
      type: DataTypes.DOUBLE,
    },
    vatAmount: {
      type: DataTypes.DOUBLE,
    },
    guestEmail: {
      type: DataTypes.STRING,
    },
    guestNameEn: {
      type: DataTypes.STRING,
    },
    guestNameAr: {
      type: DataTypes.STRING,
    },
    guestMobileNo: {
      type: DataTypes.STRING,
    },
    correlatinId: {
      type: DataTypes.STRING,
    },
    checkInFrom: {
      type: DataTypes.STRING,
    },
    checkInTo: {
      type: DataTypes.STRING,
    },
    checkOutFrom: {
      type: DataTypes.STRING,
    },
    checkOutTo: {
      type: DataTypes.STRING,
    },
    propertyId: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'booking_transaction_aud',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  BookingTransactionAud.associate = (models) => {
    BookingTransactionAud.belongsTo(models.revinfo, {
      foreignKey: {
        name: 'revKey',
        field: 'rev',
      },
      targetKey: 'rev',
      as: 'linkedRev',
    });
  };

  return BookingTransactionAud;
};
