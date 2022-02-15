// Variabili "normali"
var corso = "FrontEndDeveloper";
var materieCorso = 10;
var totaleOreMateria = 40;
var totaleOreCorso = materieCorso * totaleOreMateria;
console.log(corso)
console.log(materieCorso)
console.log(totaleOreMateria)
console.log (totaleOreCorso)

// Concatenazione
console.log("Il corso " + corso + " dura " + totaleOreCorso)

//differenza var e let
var nomeMateria = "Javascript";
console.log(nomeMateria)
{
    let nomeMateria = "HTML";
    let nomeMateria2 = "CSS";
    console.log(nomeMateria)
    console.log(nomeMateria2)
}
// console.log(nomeMateria)
// console.log(nomeMateria2)

//differenza var e const
var nomeCorso = "FE01";
console.log(nomeCorso)
{
    const nomeCorso = "FS01";
    console.log(nomeCorso)
    const nomeCorso2 = "BE01";
    console.log(nomeCorso2)
}
// console.log(nomeCorso)
// console.log(nomeCorso2)

//tipi di dato
var nome = "Helen";
var matricola = "0009";
var anni = 29;
var diplomaEpicode = false;
console.log("La studentessa: " + nome + " con la matricola: " + matricola + " di anni: " + anni + " ha conseguito il diploma presso Epicode: " + diplomaEpicode)

//sottrazione
var totaleAssenze = 34;
console.log(totaleAssenze)
var totaleOreFrequantate = totaleOreCorso - totaleAssenze;
console.log(totaleOreFrequantate)
//addizione
var totaleOreCorso = totaleAssenze + totaleOreFrequantate;
console.log(totaleOreCorso)