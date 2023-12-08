# Keep-Alive Script

## Overview

This Keep-Alive Script is designed to periodically send a GET request to a specified URL to ensure that the application remains active. It's particularly useful for keeping server-side applications awake, especially those hosted on platforms that may have idle timeouts.

## Features

- **Periodic Requests**: Sends a GET request every 30 minutes.
- **Error Handling**: Catches and logs any errors that occur during the request.
- **Timezone Support**: Configured to operate based on the 'Africa/Johannesburg' timezone.

## Requirements

- Node.js
- npm (Node Package Manager)

## Setup

1. **Clone the Repository**

   - Clone this repository to your local machine or download the source code.

2. **Install Dependencies**
   - Navigate to the project directory in your terminal.
   - Run `npm install` to install the required Node.js packages.

## Configuration

- **URL Endpoint**: Ensure the URL in the `axios.get` call within the `keepAlive` function points to your desired keep-alive endpoint.
- **Schedule Adjustment**: If a different schedule is needed, modify the cron pattern in the `cron.schedule` call.

## Running the Script

1. Open a terminal and navigate to the project directory.
2. "start": "node app.js" for standard execution.
3. The script will now periodically send requests according to the defined schedule.

## Logging

- The script logs the status and data of each response to the console.
- Errors are also logged to the console.

## License

- This project is open-sourced under the [MIT License](LICENSE).
