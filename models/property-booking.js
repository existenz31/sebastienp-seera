// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const PropertyBooking = sequelize.define('propertyBooking', {
    bookingUuid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookingTypeEn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookingTypeAr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookingStatusEn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookingStatusAr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    propertyUnitNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    checkin: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    checkout: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    propertyNameEn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    propertyNameAr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    propertyOriginalNameEn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    propertyOriginalNameAr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    checkinFrom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    checkinTo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    checkoutFrom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    checkoutTo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hostEarning: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    seeraEarning: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    ownedBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    guestName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    guestEmail: {
      type: DataTypes.STRING,
    },
    guestMobile: {
      type: DataTypes.STRING,
    },
    totalPrice: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    propertyCurrency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userCurrency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currencyConvRate: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    vatPercentage: {
      type: DataTypes.DOUBLE,
      defaultValue: 15,
      allowNull: false,
    },
    vatAmount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    seeraCommissionPercentage: {
      type: DataTypes.DOUBLE,
      defaultValue: 6,
    },
    seeraCancellationPercentage: {
      type: DataTypes.DOUBLE,
    },
    hostCancellationPercentage: {
      type: DataTypes.DOUBLE,
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
    financeStatusEn: {
      type: DataTypes.STRING,
    },
    financeStatusAr: {
      type: DataTypes.STRING,
    },
    seeraCommissionAmount: {
      type: DataTypes.DOUBLE,
    },
    seeraCancellationAmount: {
      type: DataTypes.DOUBLE,
    },
    hostCancellationAmount: {
      type: DataTypes.DOUBLE,
    },
    bookingStatusId: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'property_booking',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  PropertyBooking.associate = (models) => {
    PropertyBooking.belongsTo(models.property, {
      foreignKey: {
        name: 'propertyIdKey',
        field: 'property_id',
      },
      as: 'property',
    });
    PropertyBooking.hasMany(models.propertyBookingMeta, {
      foreignKey: {
        name: 'bookingIdKey',
        field: 'booking_id',
      },
      as: 'bookingPropertyBookingMetas',
    });
    PropertyBooking.hasMany(models.propertyBookingMeta, {
      foreignKey: {
        name: 'propertyBookingIdKey',
        field: 'property_booking_id',
      },
      as: 'propertyBookingPropertyBookingMetas',
    });
    PropertyBooking.hasMany(models.bookingCancellationPolicy, {
      foreignKey: {
        name: 'bookingIdKey',
        field: 'booking_id',
      },
      as: 'bookingBookingCancellationPolicies',
    });
    PropertyBooking.hasMany(models.bookingCancellationPolicy, {
      foreignKey: {
        name: 'propertyBookingIdKey',
        field: 'property_booking_id',
      },
      as: 'propertyBookingBookingCancellationPolicies',
    });
  };

  return PropertyBooking;
};
