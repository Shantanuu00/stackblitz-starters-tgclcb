let express = require("express");
let cors = require("cors");
const sqlite3 = require('sqlite3').verbose();
let { open } = require("sqlite");
let app = express();
let PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

let db;

async function initDB() {
  try {
    db = await open({
      filename: "./BD4_Assignment2/database.sqlite",
      driver: sqlite3.Database,
    });
    console.log('Database connection established.');

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Failed to initialize the database:", error);
    process.exit(1);
  }
}

initDB();
