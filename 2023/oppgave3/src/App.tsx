import React from "react";
import { pool } from "./mysql-pool";
import type { RowDataPacket } from "mysql2";

import "./App.css";

function App() {
  function testPool() {
    pool.query("SELECT * FROM Items", (error, results: RowDataPacket[]) => {
      if (error) return console.log(error);

      console.log(results);
    });
  }
  return <h1 onClick={testPool}>Hei</h1>;
}

export default App;
