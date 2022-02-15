// Variabili "normali"
var corso = "FrontEndDeveloper";
var materieCorso = 10;
var totaleOreMateria = 40;
var totaleOreCorso = materieCorso * totaleOreMateria;
console.log("Scheda del corso: " + corso)
console.log("Il corso ha un totale di: " + materieCorso + " materie")
console.log("Ogni materia dura circa: " + totaleOreMateria + " ore")
console.log ("Il corso prevede un impegno totale di: " + totaleOreCorso + " ore")

// Concatenazione
console.log("Il corso " + corso + " dura: " + totaleOreCorso + " ore") 

//differenza var e let
var nomeMateria = "Javascript";
console.log("Durante la quarta settimana si inizia: " + nomeMateria)
{
    let nomeMateria = "HTML";
    let nomeMateria2 = "CSS";
    console.log("Nella prima settimana si studia " + nomeMateria)
    console.log("Dalla seconda settimana si studia " + nomeMateria2)
}
// console.log(nomeMateria)
// console.log(nomeMateria2)

//differenza var e const
var nomeCorso = "FE01";
console.log("Corso in partenza: " + nomeCorso)
{
    const nomeCorso = "FS01";
    console.log("Corso in partenza: " + nomeCorso)
    const nomeCorso2 = "BE01";
    console.log("Corso in partenza: " + nomeCorso2)
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
console.log("è stata assente per un totale di: " + totaleAssenze + " ore")
var totaleOreFrequantate = totaleOreCorso - totaleAssenze;
console.log("è stata presente per un totale di: " +totaleOreFrequantate + " ore")
//addizione
var totaleOreCorso = totaleAssenze + totaleOreFrequantate;
console.log("Il corso prevedeva un totale ore di: " + totaleOreCorso)