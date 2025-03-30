// frontend/src/utils/contract.js

export const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE";

export const contractABI = [
  {
    "inputs": [
      { "internalType": "address", "name": "recipient", "type": "address" },
      { "internalType": "string", "name": "tokenURI", "type": "string" }
    ],
    "name": "mintResumeNFT",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
  // Add any additional functions or events if needed.
];