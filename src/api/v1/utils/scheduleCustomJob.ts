import cron from "node-cron";

export function scheduleCustomJob(cronTime: string, message: string) {
  cron.schedule(cronTime, () => {
    console.log(`Cron Job Triggered: ${message}`);
  });
}
