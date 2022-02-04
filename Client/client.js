// Supports ES6
const venom = require('venom-bot');

    venom
    .create()
    .then((client) => start(client))
    .catch((error) => console.log(error));

    venom.create('cliente').then((client) => startClient(client));