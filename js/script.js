const nomeUtente = prompt('Qual è il tuo nome?');
const cognomeUtente = prompt('Qual è il tuo cognome?');
const colorePreferito = prompt('Qual è il tuo colore preferito?');
let converti = parseInt(nomeUtente);
console.log(converti);

if (nomeUtente && cognomeUtente && colorePreferito) {
    if (isNaN(parseInt(nomeUtente)) && isNaN (parseInt(cognomeUtente)) && isNaN (parseInt(colorePreferito))){
        document.getElementById('pswd').innerHTML = `
        <h1>${nomeUtente}${cognomeUtente}${colorePreferito}21</h1>
        `;
    }
    else {
        document.getElementById('pswd').innerHTML = `
        <h1>Inserisci valori validi</h1>
        `;
    } 
    
} else {
    document.getElementById('pswd').innerHTML = `
    <h1>Inserisci valori validi</h1>
    `;
}
console.log(nomeUtente + cognomeUtente + colorePreferito +21);