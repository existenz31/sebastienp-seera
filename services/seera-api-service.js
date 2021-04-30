"use strict"
const parseDataUri = require("parse-data-uri");
const FormData = require('form-data');
const axios = require('axios');
const { uuid } = require('uuidv4');

const API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN;
const API_BASE_URL = process.env.API_BASE_URL;

function SeeraApiService() {


  this.uploadFiles = async function (files) {
    const formData = new FormData();
    for (const base64Data of files) {
      const fileExt = base64Data.split(';')[0].split('/')[1];
      const parsed = parseDataUri(base64Data);

      const fileBase64 = base64Data.replace(
        /^data:(image|application)\/\w+;base64,/,
        ""
      );
      const buffer = Buffer.from(fileBase64, "base64");
      const mimeType = parsed.mimeType;
  
      const filename = uuid() + '.' + fileExt // generate a random file name
      formData.append('files', buffer, {
        type: mimeType,
        filename
      });
  
    }
    let headers = formData.getHeaders();
    headers.accessToken = API_ACCESS_TOKEN;

    return new Promise(async (resolve, reject) => {
      // Call the Seera Java API here
      await axios.post(API_BASE_URL + '/upload', formData, {
        headers
      }).then((response) => {
        if (response.data.code) { // error detected
          response.data.subErrors = response.data.subErrors || [];
          const errorMessage = response.data.message + ' -> ' + response.data.subErrors.map(e => JSON.stringify(e));
          console.error(errorMessage);
          reject(new Error("Failed to upload file", errorMessage));
          return;
        }
        console.debug(response.data.result);
        resolve(response.data.result);
      })
      .catch(error => {
         console.error(error);
        reject(new Error("Failed to upload file", error));
      });  
    });
  };
}

module.exports = SeeraApiService;
