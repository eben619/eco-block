
# Ecoblock

Ecoblock is a waste management supply chain system where users are incentivized to sort their waste to be recycled effectively by waste companies. The goal is to create a greener world with less plastics and organic waste.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contract Address](#contract-address)
- [Transaction Hash](#transaction-hash)
- [Contributing](#contributing)
- [License](#license)

## Features

- Incentivized waste sorting for effective recycling.
- Blockchain integration for environmental tracking and sustainability projects.
- Smart contracts for transparent and secure transactions.
- Social connect functionality for enhanced user engagement.
- Circles SDK integration for decentralized social currency.
- The Graph implementation for efficient data querying.
- Data management using decentralized storage.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: v14.x or later
- **yarn**: v1.x or later
- **Metamask**: For interacting with the DApp
- **Git**: Version control system

## Installation

Follow these steps to install and set up the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/eben619/eco-block.git
   cd eco-block
   ```

2. **Install Dependencies:**
   ```bash
   yarn install
   ```

3. **Initialize Blockchain:**
   - Set up your preferred blockchain environment (e.g., using Hardhat or directly connecting to a testnet).
   - Deploy smart contracts using your chosen framework or tool.

## Configuration

To configure the project, follow these steps:

1. **Environment Variables:**
   - Create a `.env` file in the root directory.
   - Add the necessary environment variables as per the example below:
     ```
     INFURA_API_KEY=your-infura-api-key
     PRIVATE_KEY=your-private-key
     TWITTER_API_KEY=your-twitter-api-key
     TWITTER_API_SECRET_KEY=your-twitter-api-secret-key
     GMAIL_USERNAME=your-gmail-username
     GMAIL_PASSWORD=your-gmail-password
     GITHUB_TOKEN=your-github-token
     ```

2. **Metamask Configuration:**
   - Add your blockchain network (e.g., Rinkeby, Mainnet) to Metamask.
   - Import the account using your private key.

## Usage

To start the project, follow these steps:

1. **Compile Contracts:**
   - Use your chosen tool (e.g., Hardhat) to compile the contracts.
   ```bash
   yarn compile
   ```

2. **Deploy Contracts:**
   - Deploy the contracts using your chosen method.
   ```bash
   yarn deploy
   ```

3. **Run the DApp:**
   ```bash
   yarn start
   ```
   Open your browser and navigate to `http://localhost:3000` to interact with the application.

## Contract Address

The smart contract associated with this project is deployed at the following address:

```
0x510656370abae7ed4323f7130881c39814aa3c6e
```

## Transaction Hash

The transaction associated with the deployment or significant interaction with the contract is recorded with the following hash:

```
0xf9e2a9f8b3c6d3d25a0446d8efa42019337a0e7a6d209b231c84001ee62ab3bc
```

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
