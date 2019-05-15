const functions = require('firebase-functions');
const express = require('express');
const app = express();
const engines = require('consolidate');

app.engine('ejs', engines.ejs);
app.set('view engine', 'ejs');

app.get('/quotes', async (request, response) => {
  let quotes = await getAllQuotes();
  response.render("quotes", {quotes});
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
