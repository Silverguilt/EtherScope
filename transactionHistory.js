import { displayTransactions } from './app.js';

// Function to fetch and display latest transactions
export async function displayLatestTransactions(
  accountNumber,
  transactionList
) {
  try {
    // Make API request to fetch latest transactions for the account
    const response = await fetch(
      `https://api.etherscan.io/api?module=account&action=txlist&address=${accountNumber}&apikey=4QJVB1UYGHPWJ6BN56VW8CC1C9NBE7G94Q`
    );
    const data = await response.json();

    if (data.status === '1') {
      // Transactions retrieved successfully
      const transactions = data.result;
      displayTransactions(transactions, transactionList); // Pass transactionList to displayTransactions
    } else {
      // Error occurred
      console.error('Error fetching transaction history:', data.message);
    }
  } catch (error) {
    console.error('Error fetching transaction history:', error);
  }
}
