import cors from "cors";
import path from "path";
import express from "express";
import * as dotenv from "dotenv";
import favicon from "serve-favicon";
import dalleRoutes from "./routes/dalle.routes.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: `Welcome to the ${process.env.APP_NAME} API!` });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
