var Bankkonto = /** @class */ (function () {
    function Bankkonto(kontonummer, navn, saldo) {
        this.kontonummer = kontonummer;
        this.navn = navn;
        this.saldo = saldo;
    }
    Bankkonto.prototype.settInnPenger = function (beløp) {
        this.saldo += beløp;
    };
    Bankkonto.prototype.taUtPenger = function (beløp) {
        if (beløp > this.saldo) {
            console.log("Ikke nok penger");
            return false;
        }
        this.saldo -= beløp;
        return true;
    };
    Bankkonto.prototype.sjekkSaldo = function () {
        return this.saldo;
    };
    Bankkonto.prototype.overfør = function (beløp, målKontoNummer, målBank) {
        if (!målBank.finnesKonto(målKontoNummer)) {
            console.log("Mottakerkontoen finnes ikke");
            return;
        }
        if (!this.taUtPenger(beløp)) {
            console.log("Ikke nok penger på avsenderkontoen");
            return;
        }
        var målKonto;
        for (var _i = 0, _a = målBank.kontoer; _i < _a.length; _i++) {
            var konto = _a[_i];
            if (konto.kontonummer === målKontoNummer) {
                målKonto = konto;
                break;
            }
        }
        if (!målKonto) {
            console.log("Mottakerkontoen finnes ikke");
            return;
        }
        målKonto.settInnPenger(beløp);
        console.log("Overf\u00F8ring p\u00E5 ".concat(beløp, " kroner fullf\u00F8rt til konto ").concat(målKontoNummer));
    };
    return Bankkonto;
}());
var Bank = /** @class */ (function () {
    function Bank(navn, bankkontoer) {
        if (bankkontoer === void 0) { bankkontoer = []; }
        this.kontoer = bankkontoer;
        this.navn = navn;
    }
    Bank.prototype.åpneKonto = function (kontonummer, navn, saldo) {
        this.kontoer.push(new Bankkonto(kontonummer, navn, saldo));
    };
    Bank.prototype.finnesKonto = function (kontonummer) {
        if (!this.kontoer.some(function (konto) { return konto.kontonummer === kontonummer; })) {
            console.log("Kontoen finnes ikke");
            return false;
        }
        return true;
    };
    Bank.prototype.finnKonto = function (kontonummer) {
        for (var _i = 0, _a = this.kontoer; _i < _a.length; _i++) {
            var konto = _a[_i];
            if (konto.kontonummer === kontonummer) {
                return konto;
            }
        }
        return undefined;
    };
    return Bank;
}());
// Opprett en ny bank
var minBank = new Bank("Min Bank");
// Åpne noen bankkontoer
minBank.åpneKonto(123, "Alice", 1000);
minBank.åpneKonto(456, "Bob", 500);
// Overfør penger fra Alice til Bob
var aliceKonto = minBank.finnKonto(123);
var bobKonto = minBank.finnKonto(456);
if (aliceKonto && bobKonto) {
    console.log("Saldo før overføring:");
    console.log("Alice:", aliceKonto.sjekkSaldo());
    console.log("Bob:", bobKonto.sjekkSaldo());
    aliceKonto.overfør(1200, 456, minBank);
    console.log("\nSaldo etter overføring:");
    console.log("Alice:", aliceKonto.sjekkSaldo());
    console.log("Bob:", bobKonto.sjekkSaldo());
}
else {
    console.log("Kunne ikke finne en eller begge kontoer.");
}
