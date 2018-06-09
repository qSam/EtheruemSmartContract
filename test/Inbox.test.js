const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
beforeEach(async () => {
  //Get a list of all accounts from Ganache
  accounts = await web3.eth.getAccounts();
  //Use one of those accounts
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox Contract', () => {
  it('deploys a contract', () => {
    //Check if the address attribute exists
    assert.ok(inbox.options.address);
  });
});
