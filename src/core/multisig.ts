import { ethers } from 'ethers';

/**
 * @description Logic for coordinating multi-signature transaction approvals.
 */
export class MultiSigCoordinator {
    
    /**
     * @notice Simulates the aggregation of signatures for a high-value transaction.
     * @param threshold Number of required signatures (M)
     * @param signatures Array of signatures from authorized parties (N)
     */
    public validateMultiSig(messageHash: string, signatures: string[], requiredAddresses: string[], threshold: number): boolean {
        if (signatures.length < threshold) {
            throw new Error("Insufficient signatures to meet threshold.");
        }

        let validCount = 0;
        const recoveredAddresses = signatures.map(sig => ethers.verifyMessage(messageHash, sig));

        requiredAddresses.forEach(addr => {
            if (recoveredAddresses.includes(addr)) {
                validCount++;
            }
        });

        return validCount >= threshold;
    }
}