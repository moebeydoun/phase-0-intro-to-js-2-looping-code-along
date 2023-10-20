function writeCards(names) {
    const thankYouMessages = [];

    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }

    return thankYouMessages;
}

// Example usage:
const names = ['Guadalupe', 'Ollie', 'Aki'];
const messages = writeCards(names);
console.log(messages);
function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}
