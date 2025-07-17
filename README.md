# Heji


## Project Overview

**Heji** is a blockchain-based platform designed as a B2B solution for law firms to manage the creation, updating, and execution of last testaments and wills, with a focus on preventing fraud.

Built for the UZH DDiB '25 Summer School (Off-Campus in Cape Town), this project leverages blockchain technology to ensyre the authenticity, security, and immutability of wills, addressing issues like forgery, tampering, and disputes over validity. The system uses wallet-based digital signatures to verify identities and automate processes via smart contracts, providing a secure and efficient tool for legal professionals.

## How to Run `Heji` on Your Local

### Prerequisites
To run the system, ensure you have the following in your environment:
   - Node.js
   - Git

### Running the system
Follow these steps to run Heji:
- Clone the repository:
    ```$ git clone git@github.com:hanselomondi/heji.git```
- Navigate to the cloned repository:
    ```$ cd heji```
- Install all dependencies:
    ```$ npm install```
- In your terminal run the command below:
    ```$ npm run dev```


## Key Features
1. **Will Creation:** Lawyers help the testator draft wills, specifying beneficiaries, executors, and in some cases, guardians.
2. **Witness Invitation and Signing:** Lawyers and the testator invite witnesses, who sign remotely using their wallet addresses, ensuring legal validation.
3. **Will Updating:** Testators can update wills with verified signatures, maintaining an auditable versino history.
4. **Execution:** Smart contracts unlock the will for the executor upon the testator's death, streamlining probate.
5. **Fraud Prevention:** Wallet-based signatures and blockchainimmutability prevent unauthorised changes or forgeries.

## Target Users
The primary target user is **Law Firms**, who provide will services for their clients.

## System Architecture
Heji consists fo the following components:
### 1. Frontend
This component forms the user interface.
Built using `Next.js` and `Tailwind CSS` for a modern, responsive UI.

Pages: Login/Registration page, Will Creation, Witness Signing, Will Update, Executor Dashboard

### 2. Backend
Simulated backend logic to handle form submissions, user authentication and signature storage.
In a full implementation, a Node.js/Express backend would manage API requests and blockahin interactions.

### 3. Blockchain
Provides the platform on which created wills will be stored and records of any operations performed by them, including details of the involved parties, are recorded.