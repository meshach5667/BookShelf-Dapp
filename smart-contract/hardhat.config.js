require("@nomicfoundation/hardhat-toolbox");

// Define the Infura URL and Sepolia private key directly in the file
const INFURA_URL_AND_API_KEY = "e6af47be43c243209e264d6a27aff011";
const SEPOLIA_PRIVATE_KEY = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_URL_AND_API_KEY}`,
      accounts: [`0x${SEPOLIA_PRIVATE_KEY}`]
    }
  }
};
