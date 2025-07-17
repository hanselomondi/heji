///HEDERA CLIENT IMPORT\\\
//Sets up client and testnet\\

import { Client, PrivateKey, AccountId } from "@hashgraph/sdk";

const OPERATOR_ID = AccountId.fromString(process.env.OPERATOR_ID!);
const OPERATOR_KEY = PrivateKey.fromString(process.env.OPERATOR_KEY!);

export const client = Client.forTestnet().setOperator(OPERATOR_ID, OPERATOR_KEY);