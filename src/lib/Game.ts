class Game {
    cena: number;
    datawydania: string;
    gatunekid: string;
    id: string;
    ilosc: number;
    nazwa: string;
    opis: string;
    platformaid: string;
    wydawcaid: string;

    constructor(
        cena: number,
        datawydania: string,
        gatunekid: string,
        id: string,
        ilosc: number,
        nazwa: string,
        opis: string,
        platformaid: string,
        wydawcaid: string
    ) {
        this.cena = cena;
        this.datawydania = datawydania;
        this.gatunekid = gatunekid;
        this.id = id;
        this.ilosc = ilosc;
        this.nazwa = nazwa;
        this.opis = opis;
        this.platformaid = platformaid;
        this.wydawcaid = wydawcaid;
    }
}