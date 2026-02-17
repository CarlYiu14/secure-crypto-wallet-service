.PHONY: build test run clean docker-build

# Setup dependencies
install:
	npm install

# Compile TypeScript to JavaScript
build:
	npm run build

# Run unit tests for ECC logic
test:
	npm test

# Run the service locally
run:
	npm start

# Docker operations
docker-build:
	docker build -t crypto-wallet-service .

clean:
	rm -rf dist node_modules