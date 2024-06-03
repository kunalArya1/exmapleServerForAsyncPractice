import express from "express";
import dotenv from "dotenv";
import indexRouter from "./routes/indexRouter.js";
import bodyParser from "body-parser";

const app = express();

// dot Env Config
dotenv.config({ path: ".env" });

// body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// Router MiddleWare 
app.use("/", indexRouter);

app.listen(process.env.PORT, () =>
  console.log(`App is Running on Port ${process.env.PORT}`)
);
