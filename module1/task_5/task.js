const strClientNumber = prompt('Anna luku:');

const clientNumber = parseInt(strClientNumber);

if (clientNumber % 100 === 0) {
    if (clientNumber % 400 === 0) {
        alert(`${clientNumber} on karkausvuosi.`);
    } else {
        alert(`${clientNumber} ei ole karkausvuosi.`);
    }
} else if (clientNumber % 4 === 0) {
    alert(`${clientNumber} on karkausvuosi.`);
} else {
    alert(`${clientNumber} ei ole karkausvuosi.`);
}