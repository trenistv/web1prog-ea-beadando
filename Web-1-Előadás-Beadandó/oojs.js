// Alap osztály
class Elem {
    constructor(szoveg) {
        this.szoveg = szoveg;
    }

    // Metódus az elem létrehozásához
    letrehozElem() {
        let p = document.createElement('p');
        p.textContent = this.szoveg;
        document.body.appendChild(p);
    }
}

// Alosztály, amely kiterjeszti az alap osztályt
class KiemeltElem extends Elem {
    constructor(szoveg, szin) {
        super(szoveg);
        this.szin = szin;
    }

    // Felülírjuk az elem létrehozását, hogy színes legyen
    letrehozElem() {
        let p = document.createElement('p');
        p.textContent = this.szoveg;
        p.style.color = this.szin;
        p.style.fontWeight = "bold";
        document.body.appendChild(p);
    }
}

// Példányosítás és használat
let elem1 = new Elem("Ez egy egyszerű elem.");
let elem2 = new KiemeltElem("Ez egy kiemelt elem!", "red");

elem1.letrehozElem();
elem2.letrehozElem();
