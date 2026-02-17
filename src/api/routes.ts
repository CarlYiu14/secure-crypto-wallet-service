import { Router, Request, Response } from 'express';
import { WalletService } from '../core/wallet';
import { MultiSigCoordinator } from '../core/multisig';

const router = Router();
const walletService = new WalletService();
const multiSig = new MultiSigCoordinator();

/**
 * @route POST /api/v1/wallet/create
 * @desc Generates a new non-custodial wallet
 * @access Public (In this demo context)
 */
router.post('/create', (req: Request, res: Response) => {
    try {
        const wallet = walletService.createWallet();
        // Return public info. In production, sensitive data is encrypted.
        res.status(201).json({
            success: true,
            data: {
                address: wallet.address,
                publicKey: wallet.publicKey
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Cryptographic Error" });
    }
});

/**
 * @route POST /api/v1/wallet/sign
 * @desc Signs a transaction hash using ECDSA (secp256k1)
 */
router.post('/sign', async (req: Request, res: Response) => {
    const { privateKey, message } = req.body;
    
    if (!privateKey || !message) {
        return res.status(400).json({ error: "Missing privateKey or message hash" });
    }

    try {
        const signature = await walletService.signData(privateKey, message);
        res.json({ success: true, signature });
    } catch (error) {
        res.status(422).json({ error: "Invalid signature request" });
    }
});

export default router;