import mysql from "mysql2";

// Create a cache of connections to the mysql server.
// Read more about connection pools here: https://en.wikipedia.org/wiki/Connection_pool
export let pool = mysql.createPool({
  host: "namox.idi.ntnu.no",
  connectionLimit: 1, // Limit the number of simultaneous connections to avoid overloading the mysql server
  user: "gustaskr", // Replace "username" with your namox.idi.ntnu.no username
  password: "5KV7eJXA", // Replae "password" with your namox.idi.ntnu.no password
  database: "gustaskr", // Replace "username" with your namox.idi.ntnu.no username
});
