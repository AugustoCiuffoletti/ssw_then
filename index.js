import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Un esempio di <i>promise<i></h1>`;

// Definisco una funzione sleep che restituisce una Promise
// che si risolve dopo un certo intervallo parametrizzato
function sleep(ms) { 
  return new Promise((resolve,reject) => {
    setTimeout(resolve, ms);
  });
}
console.log("Inizio");
sleep(5000).then(() => { 		// la prima Promise si risolve dopo 5s
  console.log("Fine primo step");
  return(sleep(2000));   		// il metodo then ne restituisce una nuova da 2s
}).then(() => {
  console.log("Fine secondo step"); 	// quando anche questa si risolve concludo
});
