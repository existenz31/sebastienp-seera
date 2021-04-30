const express = require('express');
const { PermissionMiddlewareCreator } = require('forest-express-sequelize');
const { property, image } = require('../models');

const models = require('../models');
const SeeraApiService = require('../services/seera-api-service');

const router = express.Router();
const permissionMiddlewareCreator = new PermissionMiddlewareCreator('property');

// This file contains the logic of every route in Forest Admin for the collection property:
// - Native routes are already generated but can be extended/overriden - Learn how to extend a route here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/extend-a-route
// - Smart action routes will need to be added as you create new Smart Actions - Learn how to create a Smart Action here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/actions/create-and-manage-smart-actions

// Create a Property
router.post('/property', permissionMiddlewareCreator.create(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#create-a-record
  next();
});

// Update a Property
router.put('/property/:recordId', permissionMiddlewareCreator.update(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#update-a-record
  next();
});

// Delete a Property
router.delete('/property/:recordId', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#delete-a-record
  next();
});

// Get a list of Properties
router.get('/property', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-list-of-records
  next();
});

// Get a number of Properties
router.get('/property/count', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-number-of-records
  next();
});

// Get a Property
router.get('/property/:recordId(?!count)', permissionMiddlewareCreator.details(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-record
  next();
});

// Export a list of Properties
router.get('/property.csv', permissionMiddlewareCreator.export(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#export-a-list-of-records
  next();
});

// Delete a list of Properties
router.delete('/property', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#delete-a-list-of-records
  next();
});


router.post('/actions/property-upload-images', permissionMiddlewareCreator.smartAction(), async (req, res) => {
  let propertyIdKey = req.body.data.attributes.ids[0];
  const attrs = req.body.data.attributes.values;
  const username = req.user.email;
  const files = attrs['Files'];
  
  let images = [];
  let apiService = new SeeraApiService();
  apiService.uploadFiles(files)
  .then(async (files) => {
    try {
      await models.connections.default.transaction(async (t) => {
        for (const file of files) {
          const i = await image.create({
            propertyIdKey,
            url: file.url,
            height: file.height,
            width: file.width,
            size: file.size,
            imageCategoryIdKey: attrs['Image Category En'],
            roomIdKey: attrs['Property Room En'],
            bathroomIdKey: attrs['Bathroom En'],
            username,
          }, { transaction: t });
          images.push(i);
        }
    
      });      
    } 
    catch (error) {
      res.status(400).send({ error: 'Error when updating the images in database' });      
      return;
    }
    res.send({success: 'Images uploaded'});
  })
  .catch(error => {
    res.status(400).send({ error: 'Error when uploading the file' });
    console.error(error);
  })

});
module.exports = router;
