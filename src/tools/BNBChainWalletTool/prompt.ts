export const PROMPT = `# BNB Chain Wallet Tool

This tool allows you to interact with the BNB Chain (formerly Binance Smart Chain) blockchain by performing wallet operations, checking balances, and sending transactions.

## Capabilities

- Create new wallets with BIP-39 mnemonic phrases
- Import wallets from mnemonic phrases, keystores, or private keys
- Export wallets in various formats (mnemonic, private key, keystore)
- Connect to wallet and check if connection is successful
- Check BNB balance in wallet
- Send BNB to another address
- Check token (BEP20) balance for a specific token contract
- Send tokens from a specific contract to another address
- Switch between chain IDs (mainnet/testnet)

## Usage Notes

1. **Security considerations:**
   - Always validate the recipient address before sending transactions
   - Confirm transaction amounts with the user before proceeding
   - Securely handle private keys and mnemonic phrases
   - Use keystore format with strong passwords for storage
   - Inform the user of gas costs when relevant

2. **Chain IDs:**
   - Mainnet: 56 (0x38 in hex)
   - Testnet: 97 (0x61 in hex)

3. **Operation workflow:**
   - Create or import a wallet before attempting to connect
   - Always connect to the wallet first before performing other operations
   - Verify successful connection before attempting transactions
   - For token operations, verify the token contract address is valid

4. **Error handling:**
   - Provide clear error messages when operations fail
   - Check for common issues like insufficient funds, incorrect addresses, or network errors

## Example Operations

1. Create new wallet:
   \`\`\`
   {
     "operation": "createWallet"
   }
   \`\`\`

2. Import wallet from mnemonic:
   \`\`\`
   {
     "operation": "importFromMnemonic", 
     "mnemonic": "radar blur cabbage chef fix engine embark joy scheme fiction master release"
   }
   \`\`\`

3. Import wallet from keystore:
   \`\`\`
   {
     "operation": "importFromKeystore", 
     "keystoreJson": "{...}", 
     "keystorePassword": "yourPassword"
   }
   \`\`\`

4. Import wallet from private key:
   \`\`\`
   {
     "operation": "importFromPrivateKey", 
     "privateKey": "0x..."
   }
   \`\`\`

5. Export wallet:
   \`\`\`
   {
     "operation": "exportWallet", 
     "exportFormat": "keystore", 
     "password": "yourPassword"
   }
   \`\`\`

6. Connect to wallet:
   \`\`\`
   {
     "operation": "connectWallet", 
     "chainId": 56
   }
   \`\`\`

7. Get BNB balance:
   \`\`\`
   {
     "operation": "getBalance"
   }
   \`\`\`

8. Send BNB:
   \`\`\`
   {
     "operation": "sendBNB", 
     "toAddress": "0x...", 
     "amount": "0.1"
   }
   \`\`\`

9. Get token balance:
   \`\`\`
   {
     "operation": "getTokenBalance", 
     "tokenAddress": "0x..."
   }
   \`\`\`

10. Send tokens:
   \`\`\`
   {
     "operation": "sendToken", 
     "tokenAddress": "0x...", 
     "toAddress": "0x...", 
     "amount": "10"
   }
   \`\`\`

11. Switch chain:
   \`\`\`
   {
     "operation": "switchChain", 
     "chainId": 97
   }
   \`\`\`

## Implementation Notes

This tool currently provides simulated responses since it's running in a terminal environment without direct browser Web3 access. In a real implementation, this would interface with browser-based wallet providers like MetaMask, use tools like Web3Auth for wallet integration, or implement the full BNB Chain Go SDK functionality for server-side wallet management.

The wallet creation and import features implement the key management methods from the BNB Chain Go SDK, supporting:
- HD wallet creation with BIP-39 mnemonic phrases
- Importing wallets from mnemonic phrases
- Importing wallets from keystore files with password protection
- Importing wallets from private keys
- Exporting wallets in various formats for backup and transfer`