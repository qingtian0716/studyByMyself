//const { Web3 } = require('web3');
import { Web3 } from 'web3';
const web3 = new Web3('https://eth-sepolia.api.onfinality.io/public');
const balance = await web3.eth.getBalance('0xDB2a449486E183A9cFf47ba66aCfEEd1C0200D65')
console.log(balance)


 // get last block number
 console.log(await web3.eth.getBlockNumber());

 // get the chain id of the current provider
 console.log(await web3.eth.getChainId());

 // get the nonce of an address
 console.log(await web3.eth.getTransactionCount('0xDB2a449486E183A9cFf47ba66aCfEEd1C0200D65'));

 // get the current gas price
 console.log(await web3.eth.getGasPrice());

