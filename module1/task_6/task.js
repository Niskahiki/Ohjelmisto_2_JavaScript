const choise = confirm('Lasketaankjo neliöjuuri?');

if (choise === true) {
    const strClientNumber = prompt('Anna jokin luku.');
    const clientNumber = parseInt(strClientNumber);

    if (clientNumber < 0) {
        document.querySelector('#number').innerHTML = clientNumber;
        document.querySelector('#answer').innerHTML = 'Negatiivista arvoa ei pysty laskea.';
    } else {
        const sqrtAnswer = Math.sqrt(clientNumber);
        document.querySelector('#number').innerHTML = clientNumber;
        document.querySelector('#answer').innerHTML = `sqrt: ${sqrtAnswer}`;
    }
} else {
    document.querySelector('#answer').innerHTML = 'Neljöjuurta ei lasketa';
}