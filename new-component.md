### Node-Cron for Scheduled Tasks
This project uses Node-Cron to automate recurring background tasks such as data cleanup, sending notifications, or refreshing cached data. Node-Cron provides a simple cron-syntax scheduler directly in Node.js,
 without requiring any external services.

 ## Installation
 npm install node-cron

## How It Works
Scheduled jobs run automatically when the server starts.
You can define tasks to execute at specific intervals using cron expressions, such as:

| Cron Expression | Frequency                 |
| --------------- | ------------------------- |
| `* * * * *`     | Every minute              |
| `0 * * * *`     | Every hour                |
| `0 0 * * *`     | Every day at midnight     |
| `0 0 * * 0`     | Every Sunday              |
| `0 0 1 * *`     | On the 1st of every month |

## Best Practices
1.Keep each cron job in its own file for clarity
2.Use logging to track task execution
3.Avoid long-running synchronous code inside cron tasks
4.Double-check your cron expressions before deployment
5.When using Firebase or external APIs, always handle async/await correctly

## Common Use Cases
Node-Cron can be used for:
1.Automatically cleaning up old/expired recipe data
2.Sending scheduled email or in-app notifications
3.Removing unused images from Firebase Storage
4.Syncing recipe data with external sources
5.Refreshing cached content
6.Purging temporary or uploaded files
