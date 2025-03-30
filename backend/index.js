// backend/index.js

// Import required packages
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PinataSDK = require('@pinata/sdk');

const app = express();

// Middleware for JSON parsing and CORS
app.use(express.json());
app.use(cors());

// Initialize Pinata SDK with your API key and secret in your .env file
const pinata = PinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);

// Endpoint to upload resume metadata to IPFS via Pinata
app.post('/upload', async (req, res) => {
  const { name, description, attributes, documentUrl } = req.body;

  const metadata = {
    name,
    description,
    attributes, // Should be an array (e.g., ["Bachelor’s Degree", "5 years Experience"])
    document: documentUrl // This could be a link or an IPFS hash to a document
  };

  try {
    // Pin the JSON metadata to IPFS
    const result = await pinata.pinJSONToIPFS(metadata);
    res.json({
      success: true,
      ipfsHash: result.IpfsHash
    });
  } catch (error) {
    console.error('Pinata error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Start the server on PORT 5000 (or your preferred port)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Backend server running on port ${PORT}`)
);
