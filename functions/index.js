/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
// eslint-disable-next-line object-curly-spacing
const { defineString, defineSecret } = require("firebase-functions/params");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

const clientId = defineString("CLIENT_ID");
const clientSecret = defineSecret("CLIENT_SECRET");


exports.helloWorld = onRequest(
    {secrets: [clientSecret]},
    (request, response) => {
      try {
        logger.info("Hello logs!", {structuredData: true, CLIENT_ID: clientId?.value()});
        logger.info("Client Secret: %o", clientSecret?.value());
      } catch (error) {
        logger.error(error);
      }
      logger.info("Hello logs!", {structuredData: true, Client_Secret: clientId?.value()});
      const res = `Client Secret: ${clientSecret?.value()} | Client ID: ${clientId?.value()}`;
      response.send(res);
    },
);
