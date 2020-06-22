// Importing packages
const express = require("express");
const bodyParser = require("body-parser");
const Discord = require("webhook-discord");
const config = require("./config.json");

const webhook = new Discord.Webhook(config.Webhook);

// Initializing express app
const app = express();

// Setting port
const port = process.env.PORT || 3000;

// Parse the request body
app.use(bodyParser.json());

// Receive HTTP POST requests
app.post("/linear", (req, res) => {
  const payload = req.body;

  // Checking for new issue event
  if (payload.action == "create" && payload.type == "Issue") {
    console.log("New Issue");
    newIssue(payload);
  }

  // Responding with 200
  res.sendStatus(200);
});

app.listen(port, () =>
  console.log(`Webhook consumer listening on port ${port}!`)
);

function newIssue(payload) {
  // Defining Discord embed
  const msg = new Discord.MessageBuilder()
    .setName("Linear")
    .setColor("#606CCC")
    .setAuthor(`Issue Created [${getID(payload.url)}]`)
    .setTitle(payload.data.title)
    .setURL(payload.url)
    .addField("Priority", getPriorityValue(payload.data.priority), true)
    .addField("Points", payload.data.estimate, true)
    .addField("Labels", prettifyLabels(payload.data.labels), false)
    .setTime()
    .setFooter(
      "Linear App",
      "https://pbs.twimg.com/profile_images/1121592030449168385/MF6whgy1_400x400.png"
    );

  // Sending Discord embed
  webhook
    .send(msg)
    .then(() => {
      console.log("Webhook Sent");
    })
    .catch((err) => {
      console.log(`Error sending webhook: ${err}`);
    });
}

/**
 * Get the Priority Value translated
 * @param {int} priority number for priority
 */
function getPriorityValue(priority) {
  switch (priority) {
    case 0:
      return "None";
    case 1:
      return "Urgent";
    case 2:
      return "High";
    case 3:
      return "Medium";
    case 4:
      return "Low";
  }
}

/**
 * Get the task ID from url
 * @param {string} link task url
 */
function getID(link) {
  var id = link.split("/");

  return id[5];
}

/**
 * Formats and prettifies label(s)
 * @param {Array} labels connected labels
 */
function prettifyLabels(labels) {
  let payload = "";

  labels.forEach((label) => {
    payload += `${label.name}, `;
  });

  payload = payload.substring(0, payload.length - 2);

  return payload;
}
