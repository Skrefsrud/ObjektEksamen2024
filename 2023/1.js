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
var Figur = /** @class */ (function () {
    function Figur() {
    }
    Figur.prototype.beregnAreal = function () {
        return 0;
    };
    Figur.prototype.beregnOmkrets = function () {
        return 0;
    };
    Figur.prototype.beregnVolum = function () {
        return 0;
    };
    Figur.prototype.beregnOverflate = function () {
        return 0;
    };
    return Figur;
}());
var Sirkel = /** @class */ (function (_super) {
    __extends(Sirkel, _super);
    function Sirkel(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Sirkel.prototype.beregnAreal = function () {
        var area = Math.PI * this.radius * this.radius;
        return area;
    };
    Sirkel.prototype.beregnOmkrets = function () {
        var circumference = 2 * Math.PI * this.radius;
        return circumference;
    };
    return Sirkel;
}(Figur));
var Sylinder = /** @class */ (function (_super) {
    __extends(Sylinder, _super);
    function Sylinder(radius, høyde) {
        var _this = _super.call(this, radius) || this;
        _this.høyde = høyde;
        return _this;
    }
    Sylinder.prototype.beregnVolum = function () {
        var volum = Math.PI * this.radius * this.radius * this.høyde;
        return volum;
    };
    Sylinder.prototype.beregnOverflate = function () {
        var overflate = 2 * Math.PI * this.radius * (this.radius + this.høyde);
        return overflate;
    };
    return Sylinder;
}(Sirkel));
var Rektangel = /** @class */ (function (_super) {
    __extends(Rektangel, _super);
    function Rektangel(lengde, høyde) {
        var _this = _super.call(this) || this;
        _this.lengde = lengde;
        _this.høyde = høyde;
        return _this;
    }
    Rektangel.prototype.beregnAreal = function () {
        var area = this.lengde * this.høyde;
        return area;
    };
    Rektangel.prototype.beregnOmkrets = function () {
        var circumference = 2 * (this.lengde + this.høyde);
        return circumference;
    };
    return Rektangel;
}(Figur));
var Boks = /** @class */ (function (_super) {
    __extends(Boks, _super);
    function Boks(lengde, høyde, dybde) {
        var _this = _super.call(this, lengde, høyde) || this;
        _this.dybde = dybde;
        return _this;
    }
    Boks.prototype.beregnVolum = function () {
        var volum = this.lengde * this.høyde * this.dybde;
        return volum;
    };
    Boks.prototype.beregnOverflate = function () {
        var overflate = 2 *
            (this.lengde * this.høyde +
                this.høyde * this.dybde +
                this.lengde * this.dybde);
        return overflate;
    };
    return Boks;
}(Rektangel));
var boks = new Boks(5, 10, 15);
console.log("Boks volum: " + boks.beregnVolum());
console.log("Boks overflate: " + boks.beregnOverflate());
var sylinder = new Sylinder(5, 10);
console.log("Sylinder volum: " + sylinder.beregnVolum());
console.log("Sylinder overflate: " + sylinder.beregnOverflate());
var sirkel = new Sirkel(5);
var rektangel = new Rektangel(5, 10);
console.log("Sirkel areal: " + sirkel.beregnAreal());
console.log("Sirkel omkrets: " + sirkel.beregnOmkrets());
console.log("Rektangel areal: " + rektangel.beregnAreal());
console.log("Rektangel omkrets: " + rektangel.beregnOmkrets());
