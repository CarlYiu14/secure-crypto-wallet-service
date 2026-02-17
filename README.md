# Secure Crypto Wallet Service

## Overview
A high-performance, non-custodial backend service built with **TypeScript** and **Node.js** for secure digital asset management. This service utilizes **Elliptic Curve Cryptography (ECC)** to handle wallet generation and ECDSA transaction signing without compromising private key integrity.

The system is designed with a modular architecture, separating core cryptographic logic from API orchestration and security middleware.

## Key Features
* **Non-Custodial Design:** Private keys are generated using cryptographically secure entropy and are never stored in plaintext on the server.
* **ECDSA Signing:** Robust implementation of the Elliptic Curve Digital Signature Algorithm (secp256k1) for authenticating transactions.
* **Multi-Signature Coordination:** Logic for validating M-of-N signature thresholds for high-value decentralized finance (DeFi) operations.
* **API Security Layer:** Integrated middleware for request authentication and API key validation to protect sensitive endpoints.
* **Automated CI/CD:** Integrated GitHub Actions pipeline for automated builds and unit testing across multiple Node.js environments.

## Tech Stack
* **Runtime:** Node.js v18+
* **Language:** TypeScript
* **Cryptography:** Ethers.js (secp256k1)
* **Testing:** Mocha, Chai
* **Infrastructure:** Docker, Makefile, GitHub Actions

## Repository Structure
* `/src/core`: Core cryptographic logic for ECC and Multi-sig coordination.
* `/src/api`: RESTful routing for wallet services.
* `/src/middleware`: Security and authentication handlers.
* `/tests`: Unit tests for verifying cryptographic mathematical integrity.

## Getting Started

### Installation
```bash
make install
