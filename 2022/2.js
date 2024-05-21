var Terning = /** @class */ (function () {
    function Terning() {
    }
    Terning.prototype.kast = function (beholdverdi) {
        if (beholdverdi !== this.verdi) {
            this.verdi = Math.floor(Math.random() * 6 + 1);
        }
    };
    Terning.prototype.hentVerdi = function () {
        return this.verdi;
    };
    return Terning;
}());
var terning1 = new Terning();
var terning2 = new Terning();
var terning3 = new Terning();
var terning4 = new Terning();
var terning5 = new Terning();
var terninger = [terning1, terning2, terning3, terning4, terning5];
var antallKast = 0;
function kasteTerninger(terninger, verdi) {
    antallKast++;
    terninger.forEach(function (terning) { return terning.kast(verdi); });
    var kastContainer = document.createElement("div");
    var kasth1 = document.createElement("h1");
    kasth1.innerHTML = "Terningkast ".concat(antallKast);
    kastContainer.appendChild(kasth1);
    var terningerContain = document.createElement("div");
    for (var _i = 0, terninger_1 = terninger; _i < terninger_1.length; _i++) {
        var terning = terninger_1[_i];
        var terningElem = document.createElement("p");
        terning.kast(verdi);
        terningElem.innerHTML = "Terning: ".concat(terning.hentVerdi());
        terningerContain.appendChild(terningElem);
    }
    kastContainer.appendChild(terningerContain);
    document.body.appendChild(kastContainer);
}
kasteTerninger(terninger, 1);
