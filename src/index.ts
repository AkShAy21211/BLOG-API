import App from "./infrastructure/config/app";
import dotenv from "dotenv";
import path = require("path");

dotenv.config({ path: path.resolve(__dirname, "./.env") });


function run() {
  try {
    const PORT = (process.env.PORT || 5000) as number;
    const app = new App();
    app.start(PORT);
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
}

run();
