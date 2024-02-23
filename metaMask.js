export function initializeMetaMask() {
  document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', async () => {
      try {
        // Disable the button while the request is in progress
        loginButton.disabled = true;
        loginButton.innerText = 'Logging in...';

        // Check if MetaMask is installed
        if (typeof window.ethereum !== 'undefined') {
          // Prompt user to connect their MetaMask account
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          alert('You are now logged in to MetaMask!');
        } else {
          alert(
            'MetaMask is not installed. Please install MetaMask to proceed.'
          );
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred while logging in to MetaMask.');
      } finally {
        // Enable the button after the request completes (whether successful or not)
        loginButton.disabled = false;
        loginButton.innerText = 'Log in to MetaMask';
      }
    });
  });
}
