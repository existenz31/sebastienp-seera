// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const BookingCancellationPolicy = sequelize.define('bookingCancellationPolicy', {
    cancellationPolicyNameEn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cancellationPolicyNameAr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timeThreshold: {
      type: DataTypes.INTEGER,
    },
    percentage: {
      type: DataTypes.DOUBLE,
    },
    fee: {
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
      allowNull: false,
    },
  }, {
    tableName: 'booking_cancellation_policy',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  BookingCancellationPolicy.associate = (models) => {
    BookingCancellationPolicy.belongsTo(models.propertyBooking, {
      foreignKey: {
        name: 'bookingIdKey',
        field: 'booking_id',
      },
      as: 'booking',
    });
    BookingCancellationPolicy.belongsTo(models.propertyBooking, {
      foreignKey: {
        name: 'propertyBookingIdKey',
        field: 'property_booking_id',
      },
      as: 'propertyBooking',
    });
  };

  return BookingCancellationPolicy;
};
