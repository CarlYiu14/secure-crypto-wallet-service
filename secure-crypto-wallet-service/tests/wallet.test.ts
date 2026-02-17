import { WalletService } from '../src/core/wallet';
import { expect } from 'chai';

describe('WalletService Cryptography Module', () => {
    const service = new WalletService();

    it('should generate a valid secp256k1 Ethereum address', () => {
        const wallet = service.createWallet();
        expect(wallet.address).to.match(/^0x[a-fA-F0-9]{40}$/);
    });

    it('should verify an ECDSA signature correctly', async () => {
        const wallet = service.createWallet();
        const message = "Verify Kavodax Auth";
        
        const signature = await service.signData(wallet.privateKey, message);
        const isValid = service.verifySignature(message, signature, wallet.address);
        
        expect(isValid).to.be.true;
    });
});