const path = require('path');
const fs = require('fs');
const solc = require('solc');

//Set path to fetch solidity file that needs to be compiled
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

//Call the solidity compiler
module.exports = solc.compile(source, 1).contracts[':Inbox'];
