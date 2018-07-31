const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'night switch tennis keep another lucky nasty satoshi public iron paper during',
  'https://rinkeby.infura.io/v3/a51ac5d987ed4619b494d4a54081b113'
);

const web3 = new Web3(provider);

//use async await by calling a function

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there again!'] })
    .send({ gas: '1000000', from: accounts[0] });
  console.log('Contract deployed to', result.options.address);
};

deploy();
