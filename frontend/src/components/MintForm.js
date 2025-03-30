// MintForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { ethers } from 'ethers';
import { contractAddress, contractABI } from '../utils/contract';

const MintForm = ({ account }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [attributes, setAttributes] = useState('');
  const [documentUrl, setDocumentUrl] = useState('');
  const [minting, setMinting] = useState(false);
  const [message, setMessage] = useState('');

  const handleMint = async (e) => {
    e.preventDefault();
    setMinting(true);
    setMessage("Uploading metadata to IPFS...");

    const metadata = {
      name,
      description,
      attributes: attributes.split(',').map(attr => attr.trim()).filter(attr => attr),
      documentUrl
    };

    try {
      const response = await axios.post('http://localhost:5000/upload', metadata);
      if (response.data.success) {
        const ipfsHash = response.data.ipfsHash;
        const tokenURI = `ipfs://${ipfsHash}`;
        setMessage("Minting NFT on the blockchain...");

        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractABI, signer);
          const tx = await contract.mintResumeNFT(account, tokenURI);
          await tx.wait();
          setMessage("NFT minted successfully!");
        } else {
          setMessage("Ethereum object not available.");
        }
      } else {
        setMessage("Failed to upload metadata.");
      }
    } catch (error) {
      console.error("Error during minting:", error);
      setMessage("Error: " + error.message);
    } finally {
      setMinting(false);
    }
  };

  return (
    <div>
      <h2>Mint Your Resume NFT</h2>
      <form onSubmit={handleMint}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Resume Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Attributes (comma separated):</label>
          <input
            type="text"
            placeholder="e.g., Bachelor's Degree, 5 years Experience"
            value={attributes}
            onChange={(e) => setAttributes(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Document URL:</label>
          <input
            type="text"
            placeholder="Link to your resume document"
            value={documentUrl}
            onChange={(e) => setDocumentUrl(e.target.value)}
          />
        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button type="submit" disabled={minting}>
            {minting ? "Minting..." : "Mint NFT"}
          </button>
        </div>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default MintForm;
