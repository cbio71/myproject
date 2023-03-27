// Seleziona l'elemento di testo
const textElement = document.querySelector('#text');

// Aggiungi un ascoltatore di eventi per il clic sul pulsante
document.querySelector('#button').addEventListener('click', () => {
  // Aggiorna il testo con un messaggio di saluto
  textElement.textContent = 'Ciao, mondo!';
});

// Ottieni l'ora corrente e visualizzala
const timeElement = document.querySelector('#time');
const currentTime = new Date();
timeElement.textContent = `Ora corrente: ${currentTime.toLocaleTimeString()}`;
