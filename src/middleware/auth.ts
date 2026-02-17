import { Request, Response, NextFunction } from 'express';

/**
 * @description Validates API keys for sensitive wallet operations.
 * Demonstrates a production-like security layer.
 */
export const validateApiRequest = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.header('X-API-KEY');

    // In production, this would check against an environment variable or secret manager
    const VALID_KEY = process.env.SERVICE_API_KEY || "kavodax_dev_key_2026";

    if (!apiKey || apiKey !== VALID_KEY) {
        console.error(`[Security Alert] Unauthorized access attempt from IP: ${req.ip}`);
        return res.status(401).json({ error: "Unauthorized: Invalid or missing API Key" });
    }

    next();
};