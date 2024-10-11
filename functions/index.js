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
const { defineString } = require("firebase-functions/params");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

const client_Secret = defineString("Client_Secret");

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true, Client_Secret: client_Secret?.value() });
  response.send("Hello from Firebase!");
});
