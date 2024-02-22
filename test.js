const functionmanager = require('./index');

const randomString = functionmanager.generateRandomString(10);
console.log('Random String:', randomString);

const randomData = functionmanager.generateRandomData();
console.log('Random Data:', randomData);
