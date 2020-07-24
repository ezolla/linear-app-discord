// Importing packages
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request-promise");

// Initializing express app
const app = express();

// Setting port
const port: string | number = process.env.PORT || 3000;

// Parse the request body
app.use(bodyParser.json());

// Receive HTTP POST requests
app.post("/linear", (req: any, res: any) => {
  // TEMP: logging to learn types
  console.log(`Request Type: ${typeof req}`);
  console.log(`Response Type: ${typeof res}`);

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

function newIssue(payload: any) {
  // TEMP: logging to learn types
  console.log(`Payload Type: ${typeof payload}`);

  return new Promise((resolve, reject) => {
    request({
      url: process.env.WEBHOOK,
      method: "POST",
      json: {
        embeds: [
          {
            color: 0x4752b2,
            author: {
              name: `Issue Created [${getID(payload.url)}]`,
            },
            title: payload.data.title,
            url: payload.url,
            fields: [
              {
                name: "Priority",
                value: getPriorityValue(payload.data.priority),
                inline: true,
              },
              {
                name: "Points",
                value: payload.data.estimate,
                inline: true,
              },
              {
                name: "Labels",
                value: prettifyLabels(payload.data.labels),
                inline: false,
              },
            ],
            timestamp: new Date(),
            footer: {
              text: `Linear App`,
              icon_url:
                "https://pbs.twimg.com/profile_images/1121592030449168385/MF6whgy1_400x400.png",
            },
          },
        ],
      },
    })
      .then(() => {
        console.log("Sent Hook");
        resolve();
      })
      .catch(console.error);
  });
}

/**
 * Get the Priority Value translated
 * @param {int} priority number for priority
 */
function getPriorityValue(priority: any) {
  // TEMP: logging to learn types
  console.log(`Payload Type: ${typeof priority}`);

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
function getID(link: any) {
  // TEMP: logging to learn types
  console.log(`Link Type: ${typeof link}`);

  var id = link.split("/");

  return id[5];
}

/**
 * Formats and prettifies label(s)
 * @param {Array} labels connected labels
 */
function prettifyLabels(labels: any) {
  // TEMP: logging to learn types
  console.log(`Labels Type: ${typeof labels}`);

  let payload = "";

  labels.forEach((label: any) => {
    // TEMP: logging to learn types
    console.log(`Label Type: ${typeof label}`);

    payload += `${label.name}, `;
  });

  payload = payload.substring(0, payload.length - 2);

  return payload;
}
