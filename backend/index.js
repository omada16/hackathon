import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.port;

app.use(express.json({limit: "5mb"}));
app.use(express.static("frontend/dist"))
app.get("/", (req, res) => {});

app.listen(port, () => {
   console.log(`Server on ${port}`);
});