import express from "express";
import { mintWillHandler } from '../services/nftServices';

const router = express.Router();

//POST
router.post("/mint", mintWillHandler);

export default router;