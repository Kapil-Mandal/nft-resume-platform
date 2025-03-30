
## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed
- [MetaMask](https://metamask.io/) browser extension configured
- A [Pinata](https://www.pinata.cloud/) account to obtain your API key and secret
- A deployed NFT smart contract (update the frontend's contract configuration accordingly)

### Backend Setup

1. **Navigate to the backend folder:**
    ```bash
    cd nft-resume-platform/backend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Create a `.env` file:**

   Create a file named `.env` in the backend folder with your Pinata credentials:
    ```env
    PINATA_API_KEY=your_pinata_api_key_here
    PINATA_API_SECRET=your_pinata_api_secret_here
    ```

4. **Run the backend server:**
    - If you have a `dev` script enabled via nodemon:
      ```bash
      npm run dev
      ```
    - Otherwise, start the server with:
      ```bash
      npm start
      ```

### Frontend Setup

1. **Navigate to the frontend folder:**
    ```bash
    cd nft-resume-platform/frontend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Configure the Smart Contract:**
   - Open `src/utils/contract.js` and insert your deployed smart contract’s address and ABI details.

4. **Run the React application:**
    ```bash
    npm start
    ```

5. **Accessing the App:**
   Open your browser and go to [http://localhost:3000](http://localhost:3000). Connect your MetaMask wallet, fill out your resume details in the provided form, and mint your NFT.

## Usage

- **Connect Your Wallet:**  
  Click the "Connect Wallet" button to link your MetaMask account.
  
- **Mint Your Resume NFT:**  
  Enter your resume details, which include name, description, comma-separated attributes, and a link to your document. Submit the form to pin your data to IPFS via the backend, then mint your NFT via a blockchain transaction.
  
- **Verify Credentials:**  
  Your NFT serves as a verifiable and immutable credential on the blockchain that employers or peers can inspect.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for bug fixes, improvements, or any additional features you believe would enhance the project.

## License

This project is licensed under the [MIT License](LICENSE).

