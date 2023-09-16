import express from "express";
import { plusFunction } from "./utils/plus";

const app = express();

app.get("/plus", (req, res) => {
  res.send(plusFunction(10, [10, 50, 30]));
});

app.listen(3000, () => console.log("Listening on port 3000"));
