import express from "express";
import reciperoutes from "./api/v1/routes/reciperoutes";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./api/v1/swagger/swagger";
import { startScheduler } from "./api/v1/utils/scheduler";
import { scheduleCustomJob } from "./api/v1/utils/scheduleCustomJob";

const app = express();
app.use(express.json());
app.use("/api/v1/recipes", reciperoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
startScheduler();
scheduleCustomJob("*/5 * * * *", "Runs every 5 minutes");
export default app;