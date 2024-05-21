class Figur {
  beregnAreal(): number {
    return 0;
  }

  beregnOmkrets(): number {
    return 0;
  }

  beregnVolum(): number {
    return 0;
  }
  beregnOverflate(): number {
    return 0;
  }
}

class Sirkel extends Figur {
  protected radius: number;
  constructor(radius: number) {
    super();

    this.radius = radius;
  }

  beregnAreal(): number {
    const area = Math.PI * this.radius * this.radius;
    return area;
  }
  beregnOmkrets(): number {
    const circumference = 2 * Math.PI * this.radius;
    return circumference;
  }
}

class Sylinder extends Sirkel {
  private høyde: number;

  constructor(radius: number, høyde: number) {
    super(radius);
    this.høyde = høyde;
  }

  beregnVolum(): number {
    const volum = Math.PI * this.radius * this.radius * this.høyde;
    return volum;
  }

  beregnOverflate(): number {
    const overflate = 2 * Math.PI * this.radius * (this.radius + this.høyde);
    return overflate;
  }
}

class Rektangel extends Figur {
  protected lengde: number;
  protected høyde: number;

  constructor(lengde: number, høyde: number) {
    super();
    this.lengde = lengde;
    this.høyde = høyde;
  }

  beregnAreal(): number {
    const area = this.lengde * this.høyde;
    return area;
  }

  beregnOmkrets(): number {
    const circumference = 2 * (this.lengde + this.høyde);
    return circumference;
  }
}

class Boks extends Rektangel {
  private dybde: number;
  constructor(lengde: number, høyde: number, dybde: number) {
    super(lengde, høyde);
    this.dybde = dybde;
  }
  beregnVolum(): number {
    const volum = this.lengde * this.høyde * this.dybde;
    return volum;
  }

  beregnOverflate(): number {
    const overflate =
      2 *
      (this.lengde * this.høyde +
        this.høyde * this.dybde +
        this.lengde * this.dybde);
    return overflate;
  }
}
const boks = new Boks(5, 10, 15);
console.log("Boks volum: " + boks.beregnVolum());
console.log("Boks overflate: " + boks.beregnOverflate());

const sylinder = new Sylinder(5, 10);

console.log("Sylinder volum: " + sylinder.beregnVolum());
console.log("Sylinder overflate: " + sylinder.beregnOverflate());

const sirkel = new Sirkel(5);
const rektangel = new Rektangel(5, 10);

console.log("Sirkel areal: " + sirkel.beregnAreal());
console.log("Sirkel omkrets: " + sirkel.beregnOmkrets());
console.log("Rektangel areal: " + rektangel.beregnAreal());
console.log("Rektangel omkrets: " + rektangel.beregnOmkrets());
