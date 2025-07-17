import {
    Client, 
    PrivateKey,
    AccountId,
    TokenCreateTransaction,
    TokenType,
    TokenSupplyType,
    Hbar
} from "@hashgraph/sdk";

import path from "path";
import fs from "fs";

import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const client = Client.forTestnet();
client.setOperator(
    AccountId.fromString(process.env.OPERATOR_ID!),
    PrivateKey.fromString(process.env.OPERATOR_KEY!)
);
/* CODE TO CREATE THE TOKEN
async function createWillToken() {
    const tx = await new TokenCreateTransaction()
    .setTokenName("Will Token")
    .setTokenSymbol("WILL")
    .setTokenType(TokenType.NonFungibleUnique)
    .setSupplyType(TokenSupplyType.Finite)
    .setMaxSupply(100)
    .setTreasuryAccountId(process.env.OPERATOR_ID!)
    .setInitialSupply(0)
    .setAdminKey(PrivateKey.fromString(process.env.OPERATOR_KEY!))
    .setSupplyKey(PrivateKey.fromString(process.env.OPERATOR_KEY!))
    .setMaxTransactionFee(new Hbar(10))
    .freezeWith(client)
    .sign(PrivateKey.fromString(process.env.OPERATOR_KEY!));

    const signTx = await tx.sign(PrivateKey.fromString(process.env.OPERATOR_KEY!));
    const submitTx = await signTx.execute(client);
    const receipt = await submitTx.getReceipt(client);

    console.log(receipt);
}

createWillToken();
*/