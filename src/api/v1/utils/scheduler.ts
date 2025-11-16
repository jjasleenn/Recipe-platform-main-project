import cron from "node-cron";

type ScheduledTask = ReturnType<typeof cron.schedule>;
interface JobInfo {
  name: string;
  schedule: string;
  description: string;
  active: boolean;
  nextRun?: string; 
}

const jobs: Record<string, { task: ScheduledTask; info: JobInfo }> = {};

export const createJob = (
  name: string,
  schedule: string,
  description: string,
  fn: () => void
) => {
  const task = cron.schedule(schedule, fn)

  jobs[name] = {
    task,
    info: {
      name,
      schedule,
      description,
      active: true,
      nextRun: "Next runtime not supported by node-cron",
    },
  };
};
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

cron.schedule("* * * * *", () => {
        console.log("Running custom scheduled task...");
        // Add your task logic here
});


export const getAllJobs = () => {
  return Object.values(jobs).map(({ task, info }) => ({
    ...info,
    status: task.getStatus()
  }));
};
