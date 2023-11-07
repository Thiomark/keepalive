const express = require("express");
const cron = require("node-cron");
const axios = require("axios");

const app = express();
const port = 6336;

// Define the keepalive function
function keepAlive() {
  axios
    .get("https://itumelengtsoela.co.za/api/keepalive", { timeout: 300000 })
    .then((response) => {
      // Log the response status and data
      console.log("KeepAlive Response:", response.status, response.data);
    })
    .catch((error) => {
      // Log any error
      console.error("Error hitting keepalive endpoint:", error);
    });
}

// Schedule the task to run every 2 hours
cron.schedule("0 */2 * * *", keepAlive, {
  scheduled: true,
  timezone: "Africa/Johannesburg",
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
