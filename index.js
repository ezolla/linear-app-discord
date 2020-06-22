const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Parse the request body
app.use(bodyParser.json());

// Receive HTTP POST requests
app.post("/linear", (req, res) => {
  const payload = req.body;
  const { action, data, type, createdAt } = payload;

  // Logging data to see how hook formatting should be handled
  console.log(payload);
  console.log(`Payload Action: ${action}`);
  console.log(`Payload Data: ${data}`);
  console.log(`Payload Type: ${type}`);
  console.log(`Payload Created Time: ${createdAt}`);

  // Finally, respond with a HTTP 200 to signal all good
  res.sendStatus(200);
});

app.listen(port, () =>
  console.log(`My webhook consumer listening on port ${port}!`)
);
