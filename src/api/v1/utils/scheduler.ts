import cron from "node-cron";

// Example task: log message every minute
cron.schedule("* * * * *", () => {
  console.log("Task running every minute:", new Date().toLocaleString());
});

// Example task: run every day at midnight
cron.schedule("0 0 * * *", () => {
  console.log(" Midnight task executed:", new Date().toLocaleString());
});

// Example function that you might call in app.ts
export const startScheduler = () => {
  console.log("Scheduler started...");
};
