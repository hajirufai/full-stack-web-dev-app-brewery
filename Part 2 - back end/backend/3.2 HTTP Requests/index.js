"use strict";

import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening at port ${port}...`);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/About", (req, res) => {
    res.send("About Page");
  });
