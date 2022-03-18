// scrivere un programma che descriva e inizializzi le caratteristiche dei capi di abbigliamento attraverso il costructor
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    // Utilizzare il metodo getsaldocapo per applicare il saldo da sottrarre all'acquisto del capo alla cassa
    Abbigliamento.prototype.getsaldocapo = function () {
        return (this.prezzoivainclusa / 100) * this.saldo;
    };
    //Utilizzare il metodo getacquistocapo che riporterà il costo totale di tale capo
    Abbigliamento.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - ((this.prezzoivainclusa / 100) * this.saldo);
    };
    return Abbigliamento;
}());
// utilizzare fetch per recuperare i capi dal file Abbigliamento.json
fetch("Abbigliamento.json")
    .then(function (response) { return response.json(); })
    .then(function (data) { return console.log(data); });
// creare manualmente altre 3 istanze della classe
var capo1 = new Abbigliamento(1, 11, "uomo", "pullover", 4, 3, "bordeaux", 35.50, 40, "magazzino", 30);
var capo2 = new Abbigliamento(2, 22, "donna", "camicia", 5, 6, "blu", 25.50, 30, "negozio", 20);
var capo3 = new Abbigliamento(3, 33, "bambino", "pigiama", 6, 10, "verde", 15.50, 20, "magazzino", 10);
// mostrare in console le caratteristiche dei capi una volta ottenuta la risposta della funzione fetch
console.log(capo1);
console.log(capo2);
console.log(capo3);
console.log("Lo sconto da applicare al " + capo1.capo + " con id: " + capo1.id + " è di: " + capo1.getsaldocapo() + " euro, quindi il totale da pagare alla cassa è: " + capo1.getacquistocapo() + " euro (iva inclusa)");
console.log("Lo sconto da applicare alla " + capo2.capo + " con id: " + capo2.id + " è di: " + capo2.getsaldocapo() + " euro, quindi il totale da pagare alla cassa è: " + capo2.getacquistocapo() + " euro (iva inclusa)");
console.log("Lo sconto da applicare al " + capo3.capo + " con id: " + capo3.id + " è di: " + capo2.getsaldocapo() + " euro, quindi il totale da pagare alla cassa è: " + capo2.getacquistocapo() + " euro (iva inclusa) ");
