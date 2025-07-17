import { Request, Response } from "express";
import { TokenMintTransaction, TokenId, Hbar } from "@hashgraph/sdk";
import { client } from '../config/hederaClient';
import { hasUncaughtExceptionCaptureCallback } from "process";
import { WillMetadata} from "../types/will";

const WILL_TOKEN_ID = TokenId.fromString(process.env.WILL_TOKEN_ID!);

export async function mintWillHandler(req: Request, res: Response) {
  try {
    const {
      testatorName,
      assets,
      beneficiaries,
      executor,
      guardians
    } = req.body;

    if (!testatorName || !assets || !beneficiaries || !executor) {
      return res.status(400).json({ error: "Missing required will data" });
    }

    const metadata: WillMetadata = {
      testatorName,
      assets,
      beneficiaries,
      executor,
      guardians: guardians || [],
      issuedAt: new Date().toISOString()
    };

    const metadataBytes = new TextEncoder().encode(JSON.stringify(metadata));

    const tx = await new TokenMintTransaction()
      .setTokenId(WILL_TOKEN_ID)
      .addMetadata(metadataBytes)
      .setMaxTransactionFee(new Hbar(5))
      .execute(client);

    const receipt = await tx.getReceipt(client);

    if (!receipt.status.toString().includes("SUCCESS")) {
      throw new Error('Mint failed: ${receipt.status}');
    }

    return res.status(200).json({
      tokenId: WILL_TOKEN_ID.toString(),
      status: receipt.status.toString()
    });

  } catch (err: any) {
    console.error("❌ Error minting NFT:", err);
    res.status(500).json({ error: err.message });
  }
}

function hashText(text: string): string {
    const crypto = require("crypto");
    return crypto.createHash("sha256").update(text).digest("hex");
}