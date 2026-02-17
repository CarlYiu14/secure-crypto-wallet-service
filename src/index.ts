import express from 'express';
import walletRoutes from './api/routes';
import { validateApiRequest } from './middleware/auth';

const app = express();
const PORT = process.env.PORT || 3000;

// Standard middleware for parsing JSON bodies
app.use(express.json());

/** * Apply security middleware to all wallet routes.
 * This demonstrates the "Security-First" approach mentioned in your resume.
 */
app.use('/api/v1/wallet', validateApiRequest, walletRoutes);

// Health Check endpoint for Docker and monitoring
app.get('/health', (req, res) => {
    res.json({ 
        status: 'active', 
        timestamp: new Date().toISOString(),
        service: 'Kavodax-Wallet-Core'
    });
});

app.listen(PORT, () => {
    console.log(`[Wallet Service] Secure Backend initialized on port ${PORT}`);
});