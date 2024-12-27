import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import { PORT } from "./constants.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log(`Run up with some error : ${err}`);
    });

    app.listen(PORT, () => {
      console.log(`🔥 server is running on port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`❌ MongoDB Connection Failed : ${err}`);
    throw err;
});