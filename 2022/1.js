var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Elev = /** @class */ (function () {
    function Elev(navn, alder, klassetrinn) {
        this.navn = navn;
        this.alder = alder;
        this.klassetrinn = klassetrinn;
    }
    Elev.prototype.skrivUt = function () {
        console.log(this.navn, this.alder, this.klassetrinn);
    };
    return Elev;
}());
var elev1 = new Elev("Rune", 16, 5);
var elev2 = new Elev("Birger", 15, 5);
elev1.skrivUt();
elev2.skrivUt();
var Ansatt = /** @class */ (function () {
    function Ansatt(rolle, avdeling, månedslønn) {
        this.rolle = rolle;
        this.avdeling = avdeling;
        this.månedslønn = månedslønn;
    }
    return Ansatt;
}());
var Lærer = /** @class */ (function (_super) {
    __extends(Lærer, _super);
    function Lærer(navn, alder, rolle, avdeling, månedslønn) {
        if (rolle === void 0) { rolle = "underviser"; }
        if (avdeling === void 0) { avdeling = "fag"; }
        if (månedslønn === void 0) { månedslønn = 25000; }
        var _this = _super.call(this, rolle, avdeling, månedslønn) || this;
        _this.navn = navn;
        _this.alder = alder;
        return _this;
    }
    Lærer.prototype.skrivUt = function () {
        console.log(this.navn, this.alder, this.rolle, this.avdeling, this.månedslønn);
    };
    return Lærer;
}(Ansatt));
var LarsLærer = new Lærer("Lars", 28);
LarsLærer.skrivUt();
var Fag = /** @class */ (function () {
    function Fag(fagnavn, elever, lærere) {
        this.fagnavn = fagnavn;
        this.elever = elever;
        this.lærere = lærere;
    }
    Fag.prototype.skrivUt = function () {
        console.log(this.fagnavn, this.elever, this.lærere);
    };
    return Fag;
}());
var fag1 = new Fag("samfunnsfag", [elev1, elev2], [LarsLærer]);
fag1.skrivUt();
