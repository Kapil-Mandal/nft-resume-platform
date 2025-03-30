// App.js
import React, { useState } from 'react';
import WalletConnect from './components/WalletConnect';
import MintForm from './components/MintForm';
import './App.css';

const App = () => {
  const [account, setAccount] = useState(null);

  return (
    <div className="container">
      <h1>NFT Resume & Skill Certificate Platform</h1>
      <WalletConnect setAccount={setAccount} />
      {account && <MintForm account={account} />}
    </div>
  );
};

export default App;