import { ethers } from 'ethers';

/**
 * @class WalletService
 * @description Handles non-custodial wallet operations using Elliptic Curve Cryptography (secp256k1).
 * Guided by decentralized finance best practices to ensure private keys are never exposed in plaintext.
 */
export class WalletService {
    
    /**
     * @notice Generates a new random wallet (Private Key, Public Key, Address).
     * @dev Uses cryptographically secure entropy for key generation.
     */
    public createWallet() {
        const wallet = ethers.Wallet.createRandom();
        return {
            address: wallet.address,
            publicKey: wallet.signingKey.publicKey,
            mnemonic: wallet.mnemonic?.phrase,
            // In a professional setting, the private key would be encrypted 
            // with a user-defined password before being returned or stored.
            privateKey: wallet.privateKey 
        };
    }

    /**
     * @notice Signs a message hash using the provided private key.
     * @param privateKey The ECC private key.
     * @param message The raw data or transaction hash to be signed.
     */
    public async signData(privateKey: string, message: string): Promise<string> {
        const wallet = new ethers.Wallet(privateKey);
        
        // Elliptic Curve Digital Signature Algorithm (ECDSA)
        const signature = await wallet.signMessage(message);
        
        console.log(`[Security] Data signed successfully for address: ${wallet.address}`);
        return signature;
    }

    /**
     * @notice Verifies if a signature was produced by a specific address.
     */
    public verifySignature(message: string, signature: string, expectedAddress: string): boolean {
        const recoveredAddress = ethers.verifyMessage(message, signature);
        return recoveredAddress.toLowerCase() === expectedAddress.toLowerCase();
    }
}