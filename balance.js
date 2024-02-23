// Function to check balance
export async function checkBalance(
  accountInput,
  displayBalance,
  blockNumberDisplay
) {
  const accountNumber = accountInput.value.trim(); // Trim to remove whitespace

  if (!accountNumber) {
    displayErrorMessage('You need to enter a valid account number');
    return; // Exit the function early if account number is empty
  }

  if (typeof ethereum !== undefined) {
    try {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      // Get the balance...
      const balance = await ethereum.request({
        method: 'eth_getBalance',
        params: [accountNumber, 'latest'],
      });

      // Convert the balance to something human readable
      const parsedBalance = parseInt(balance) / Math.pow(10, 18);
      displayBalance.innerText = parsedBalance;

      // Get the latest block number
      const blockNumber = await ethereum.request({
        method: 'eth_blockNumber',
      });

      // Display the block number
      blockNumberDisplay.innerText = `Block Number: ${parseInt(
        blockNumber,
        16
      )}`; // Parse hex to integer
    } catch (error) {
      console.error(error);
      displayErrorMessage('An error occurred while fetching balance'); // Display error message for other errors
    }
  } else {
    console.log('No ethereum');
  }
}

export function displayErrorMessage(message) {
  // Throw an Error with the message
  throw new Error(message);
}
