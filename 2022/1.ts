class Elev {
  navn: string;
  alder: number;
  klassetrinn: number;
  constructor(navn: string, alder: number, klassetrinn: number) {
    this.navn = navn;
    this.alder = alder;
    this.klassetrinn = klassetrinn;
  }

  skrivUt() {
    console.log(this.navn, this.alder, this.klassetrinn);
  }
}

const elev1 = new Elev("Rune", 16, 5);
const elev2 = new Elev("Birger", 15, 5);

elev1.skrivUt();
elev2.skrivUt();

class Ansatt {
  rolle: string;
  avdeling: string;
  månedslønn: number;

  constructor(rolle: string, avdeling: string, månedslønn: number) {
    this.rolle = rolle;
    this.avdeling = avdeling;
    this.månedslønn = månedslønn;
  }
}

class Lærer extends Ansatt {
  navn: string;
  alder: number;

  constructor(
    navn: string,
    alder: number,
    rolle: string = "underviser",
    avdeling: string = "fag",
    månedslønn: number = 25000
  ) {
    super(rolle, avdeling, månedslønn);

    this.navn = navn;
    this.alder = alder;
  }

  skrivUt(): void {
    console.log(
      this.navn,
      this.alder,
      this.rolle,
      this.avdeling,
      this.månedslønn
    );
  }
}

const LarsLærer = new Lærer("Lars", 28);

LarsLærer.skrivUt();

class Fag {
  fagnavn: string;
  elever: Elev[];
  lærere: Lærer[];

  constructor(fagnavn: string, elever: Elev[], lærere: Lærer[]) {
    this.fagnavn = fagnavn;
    this.elever = elever;
    this.lærere = lærere;
  }

  skrivUt(): void {
    console.log(this.fagnavn, this.elever, this.lærere);
  }
}

const fag1 = new Fag("samfunnsfag", [elev1, elev2], [LarsLærer]);
fag1.skrivUt();
