const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'night switch tennis keep another lucky nasty satoshi public iron paper during',
  'https://rinkeby.infura.io/v3/a51ac5d987ed4619b494d4a54081b113'
);

const web3 = new Web3(provider);
