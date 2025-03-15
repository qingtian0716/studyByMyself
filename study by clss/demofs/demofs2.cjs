const { Web3 } = require('web3');

// 创建异步函数来包装所有需要 await 的代码
async function main() {
  const web3 = new Web3('https://eth-sepolia.api.onfinality.io/public');
  
  // 获取账户余额
  const balance = await web3.eth.getBalance('0xDB2a449486E183A9cFf47ba66aCfEEd1C0200D65');
  console.log('账户余额:', balance);

  // 获取最新区块号
  const blockNumber = await web3.eth.getBlockNumber();
  console.log('最新区块号:', blockNumber);

  // 获取当前网络的链ID
  const chainId = await web3.eth.getChainId();
  console.log('链ID:', chainId);

  // 获取地址的交易计数（nonce）
  const nonce = await web3.eth.getTransactionCount('0xDB2a449486E183A9cFf47ba66aCfEEd1C0200D65');
  console.log('交易计数:', nonce);

  // 获取当前gas价格
  const gasPrice = await web3.eth.getGasPrice();
  console.log('Gas价格:', gasPrice);
}

// 调用主函数并处理可能的错误
main().catch(error => {
  console.error('发生错误:', error);
});