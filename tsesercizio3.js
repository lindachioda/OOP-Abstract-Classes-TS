//Scrivere un programma utilizzando la programmazione ad oggetti che calcoli le tasse che dovranno sostenere i singoli lavoratori autonomi 
//al fine di verificare il reddito annuo netto di ognuno 
//a secondo del proprio reddito annuo lordo, tasse, cod redditività.
//Il programma utilizza classi astratte e non astratte
//Proprietà: codredd: number; redditoannuolordo:number tasseinps:number tasseirpef:number
//Metodi: getUtileTasse:number getTasselnps:number getTasselrpef:number getRedditoAnnuoNetto:number
class CalcoloNetto {
    constructor(redditoannuolordo, codredd, tasseinps, tasseirpef) {
        this.redditoannuolordo = redditoannuolordo;
        this.codredd = codredd;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
}
class Lavoratore extends CalcoloNetto {
    constructor(redditoannuolordo, codredd, tasseinps, tasseirpef) {
        super(redditoannuolordo, codredd, tasseinps, tasseirpef);
    }
    getUtileTasse() {
        this.codredd = this.redditoannuolordo * 0.78;
        console.log(`Cod redditività: ${this.codredd}`);
        return this.codredd;
    }
    getTasselnps() {
        this.tasseinps = this.codredd * 0.26;
        console.log(`Tasse INPS: ${this.tasseinps}`);
        return this.tasseinps;
    }
    getTasselrpef() {
        let imposta = this.codredd - this.tasseinps;
        this.tasseirpef = imposta * 0.5;
        console.log(`Tasse IRPEF: ${this.tasseirpef}`);
        return this.tasseirpef;
    }
    getRedditoAnnuoNetto() {
        let netto = this.redditoannuolordo - this.tasseinps - this.tasseirpef;
        console.log(`Reddito annuo netto: ${netto}`);
        return netto;
    }
}
let lavoratore1 = new Lavoratore(20000, 0, 0, 0);
lavoratore1.getUtileTasse();
lavoratore1.getTasselnps();
lavoratore1.getTasselrpef();
lavoratore1.getRedditoAnnuoNetto();
export {};
//# sourceMappingURL=tsesercizio3.js.map