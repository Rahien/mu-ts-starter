import { app } from "mu-ts-utils";
import fs from "fs";

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.get("/answer", (_req, res) => {
  const configDir = process.env.CONFIG_DIR || "config";
  const configFile = `${configDir}/settings.json`;
  const jsonBuffer = fs.readFileSync(configFile);
  const jsonString = jsonBuffer.toString();
  const settings = JSON.parse(jsonString);
  res.send(`The answer is ${settings.answer}`);
});
