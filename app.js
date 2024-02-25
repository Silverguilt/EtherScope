import { initializeMetaMask } from './metaMask.js';
import { checkBalance } from './balance.js';
import { sendFunds } from './sendFunds.js';
import { displayLatestTransactions } from './transactionHistory.js'; // Import the new module

initializeMetaMask();

document.addEventListener('DOMContentLoaded', () => {
  const accountInput = document.querySelector('#accountNumber');
  const checkBalanceButton = document.querySelector('#checkBalance');
  const displayBalance = document.querySelector('#balance');
  const blockNumberDisplay = document.querySelector('#blockNumber');
  const sendButton = document.querySelector('#sendTx');
  const toAccountInput = document.querySelector('#toAccountNumber');
  const valueInput = document.querySelector('#amount');
  const transactionList = document.querySelector('#transactionList'); // Select the transaction list element

  checkBalanceButton.addEventListener('click', async () => {
    await checkBalance(accountInput, displayBalance, blockNumberDisplay);
    await displayLatestTransactions(accountInput.value, transactionList); // Pass transactionList to displayLatestTransactions
  });

  sendButton.addEventListener('click', () =>
    sendFunds(accountInput, toAccountInput, valueInput)
  );
});

// Function to display latest transactions in the UI
export function displayTransactions(transactions, transactionList) {
  // Clear existing transactions
  transactionList.innerHTML = '';

  // Add each transaction to the list
  transactions.forEach((transaction) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Tx Hash: ${transaction.hash}, Block Number: ${transaction.blockNumber}`;
    transactionList.appendChild(listItem);
  });
}
