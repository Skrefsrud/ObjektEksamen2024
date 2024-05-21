import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  class Terning {
    verdi: number;
    constructor() {
      this.verdi = 0;
    }

    kast(beholdverdi: number): void {
      if (beholdverdi !== this.verdi) {
        this.verdi = Math.floor(Math.random() * 6 + 1);
      }
    }

    hentVerdi(): number {
      return this.verdi;
    }
  }

  const initialTerninger = [
    new Terning(),
    new Terning(),
    new Terning(),
    new Terning(),
    new Terning(),
  ];

  const [terninger, setTerninger] = useState(initialTerninger);

  function kastTerninger(verdi: number) {
    const newTerninger = terninger.map((terning) => {
      terning.kast(verdi);
      return terning;
    });
    setTerninger([...newTerninger]);
  }

  return (
    <div className='App'>
      <button onClick={() => kastTerninger(1)}>Enere</button>
      <button onClick={() => kastTerninger(2)}>Toere</button>
      <button onClick={() => kastTerninger(3)}>Trere</button>
      <button onClick={() => kastTerninger(4)}>Firrere</button>
      <button onClick={() => kastTerninger(5)}>Femmere</button>
      <button onClick={() => kastTerninger(6)}>Seksere</button>

      <div className='terninger'>
        {terninger.map((terning, index) => (
          <div key={index}>
            Terning {index + 1}: {terning.hentVerdi()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
