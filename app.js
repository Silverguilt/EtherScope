import { initializeMetaMask } from './metaMask.js';
import { checkBalance } from './balance.js';
import { sendFunds } from './sendFunds.js';

initializeMetaMask();

const accountInput = document.querySelector('#accountNumber');
const checkBalanceButton = document.querySelector('#checkBalance');
const displayBalance = document.querySelector('#balance');
const blockNumberDisplay = document.querySelector('#blockNumber');
const sendButton = document.querySelector('#sendTx');
const toAccountInput = document.querySelector('#toAccountNumber');
const valueInput = document.querySelector('#amount');

checkBalanceButton.addEventListener('click', () =>
  checkBalance(accountInput, displayBalance, blockNumberDisplay)
);
sendButton.addEventListener('click', () =>
  sendFunds(accountInput, toAccountInput, valueInput)
);
