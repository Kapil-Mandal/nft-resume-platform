// WalletConnect.js
import React from 'react';

const WalletConnect = ({ setAccount }) => {
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Wallet connection denied", error);
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask.");
    }
  };

  return (
    <div className="wallet-container">
      <button className="wallet-button" onClick={connectWallet}>
        Connect Wallet
      </button>
    </div>
  );
};

export default WalletConnect;
