class Terning {
  verdi: number;
  constructor() {}

  kast(beholdverdi: number): void {
    if (beholdverdi !== this.verdi) {
      this.verdi = Math.floor(Math.random() * 6 + 1);
    }
  }

  hentVerdi(): number {
    return this.verdi;
  }
}

const terning1 = new Terning();
const terning2 = new Terning();
const terning3 = new Terning();
const terning4 = new Terning();
const terning5 = new Terning();

const terninger = [terning1, terning2, terning3, terning4, terning5];

let antallKast = 0;

function kasteTerninger(terninger: Terning[], verdi: number) {
  antallKast++;

  const kastContainer = document.createElement("div");
  const kasth1 = document.createElement("h1");
  kasth1.innerHTML = `Terningkast ${antallKast}`;
  kastContainer.appendChild(kasth1);

  const terningerContain = document.createElement("div");
  for (const terning of terninger) {
    const terningElem = document.createElement("p");
    terning.kast(verdi);
    terningElem.innerHTML = `Terning: ${terning.hentVerdi()}`;
    terningerContain.appendChild(terningElem);
  }

  kastContainer.appendChild(terningerContain);
  console.log(kastContainer);
  document.body.appendChild(kastContainer);
}

kasteTerninger(terninger, 1);
