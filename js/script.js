const userName=prompt('Inserisci il tuo nome');
const userLastName=prompt('Inserisci il tuo cognome');
const userFavColor=prompt('Inserisci il tuo colore preferito');

const password = `La password suggerita è: ${userName}${userLastName}${userFavColor}21`;

document.getElementById('user_password').innerHTML = password