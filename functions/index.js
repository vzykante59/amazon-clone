const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HSwq9JviBnQHOJoSqaq7WsedyCeSD5VOEPJYctgL7WJ2QUrGkCnFbVU1xVlltzbQAWaC7WPYV9cA7TmE6Hk9Ycn00vRHcFaHD"
);

//API

//APP config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received BOOM for time amount ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: "usd",
  });
  //OK - created
  response.status(201).send({
    clientSecret: paymentIntent.clientSecret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example end point:
// http://localhost:5001/challenge-67650/us-central1/api
