import express from "express";
import reciperoutes from "./api/v1/routes/reciperoutes";

const app = express();
app.use(express.json());
app.use("/api/v1/recipes", reciperoutes);

export default app;