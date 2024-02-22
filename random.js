const randomthinger = require('randomthinger');

function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generateRandomData() {
    const randomString = generateRandomString(8);
    const randomNum = randomthinger.generateRandomNumber(1, 100);
    return {
        randomString,
        randomNum
    };
}

module.exports = {
    generateRandomString,
    generateRandomData
};
