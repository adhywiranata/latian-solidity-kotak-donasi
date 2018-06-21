const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
require('dotenv').config();
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  process.env.RINKEBY_MNEMONIC,
  process.env.RINKEBY_INFURA_URL,
);

const web3 = new Web3(provider);

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: '0x' + bytecode })
      .send({ from: accounts[0], gas: '3000000' });
  
    console.log(interface);
    console.log('Contract deployed to', result.options.address);
    return;
  } catch(err) {
    console.log('ERROR: ' + err.message);
    return;
  }
};

deploy();