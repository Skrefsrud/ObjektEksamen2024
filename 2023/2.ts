class Bankkonto {
  protected kontonummer: number;
  protected navn: string;
  protected saldo: number;

  constructor(kontonummer: number, navn: string, saldo: number) {
    this.kontonummer = kontonummer;
    this.navn = navn;
    this.saldo = saldo;
  }

  settInnPenger(beløp: number) {
    this.saldo += beløp;
  }

  taUtPenger(beløp: number) {
    if (beløp > this.saldo) {
      console.log("Ikke nok penger");
      return false;
    }
    this.saldo -= beløp;
    return true;
  }

  sjekkSaldo(): number {
    return this.saldo;
  }

  overfør(beløp: number, målKontoNummer: number, målBank: Bank) {
    if (!målBank.finnesKonto(målKontoNummer)) {
      console.log("Mottakerkontoen finnes ikke");
      return;
    }

    if (!this.taUtPenger(beløp)) {
      console.log("Ikke nok penger på avsenderkontoen");
      return;
    }

    const målKonto = målBank.kontoer.find(
      (konto) => konto.kontonummer === målKontoNummer
    );
    if (!målKonto) {
      console.log("Mottakerkontoen finnes ikke");
      return;
    }

    målKonto.settInnPenger(beløp);
    console.log(
      `Overføring på ${beløp} kroner fullført til konto ${målKontoNummer}`
    );
  }
}

class Bank {
  protected navn: string;
  protected kontoer: Bankkonto[] = [];

  constructor(navn: string) {
    this.navn = navn;
  }

  åpneKonto(kontonummer: number, navn: string, saldo: number) {
    this.kontoer.push(new Bankkonto(kontonummer, navn, saldo));
  }

  finnesKonto(kontonummer: number): boolean {
    if (!this.kontoer.some((konto) => konto.kontonummer === kontonummer)) {
      console.log("Kontoen finnes ikke");
      return false;
    }
    return true;
  }
}

// Opprett en ny bank
const minBank = new Bank("Min Bank");

// Åpne noen bankkontoer
minBank.åpneKonto(123, "Alice", 1000);
minBank.åpneKonto(456, "Bob", 500);

// Overfør penger fra Alice til Bob
const aliceKonto = minBank.kontoer.find((konto) => konto.kontonummer === 123);
const bobKonto = minBank.kontoer.find((konto) => konto.kontonummer === 456);

if (aliceKonto && bobKonto) {
  console.log("Saldo før overføring:");
  console.log("Alice:", aliceKonto.sjekkSaldo());
  console.log("Bob:", bobKonto.sjekkSaldo());

  aliceKonto.overfør(200, 456, minBank);

  console.log("\nSaldo etter overføring:");
  console.log("Alice:", aliceKonto.sjekkSaldo());
  console.log("Bob:", bobKonto.sjekkSaldo());
} else {
  console.log("Kunne ikke finne en eller begge kontoer.");
}
