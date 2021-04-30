const { collection } = require('forest-express-sequelize');
const models = require('../models');

collection('property', {
  actions: [{
    name: 'Upload image(s)',
    type: 'single',
    endpoint: '/forest/actions/property-upload-images',
    fields: [
      {
        field: 'Property Name En',
        type: 'String',
        isReadOnly: true
      },
      {
        field: 'Image Category En',
        type: 'String',
        reference: 'imageCategory.id',
        isRequired: true,
      },
      {
        field: 'Bathroom En',
        type: 'String',
        reference: 'bathroom.id'
      },
      {
        field: 'Property Room En',
        type: 'String',
        reference: 'propertyRoom.id'
      },
      {
        field: 'Rank',
        type: 'Number',
      },
      {
        field: 'Files',
        type: ['File']
      }
    ],
    hooks: {
      load: ({ fields, record }) => {
        fields['Property Name En'].value = record.dataValues.nameEn
        return fields;
      },
  
    }
  }],
  fields: [
    {
      field:'locationMap',
      type: 'String',
      get: (property) => {
        return `${property.latitude}, ${property.longitude}`;
      }
    },
    ],
  segments: [],
});
