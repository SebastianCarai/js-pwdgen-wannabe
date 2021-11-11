userName=prompt('Inserisci il tuo nome');
userLastName=prompt('Inserisci il tuo cognome');
userFavColor=prompt('Inserisci il tuo colore preferito');

password = `La password suggerita è: ${userName}${userLastName}${userFavColor}21`;

document.getElementById('user_password').innerHTML = password