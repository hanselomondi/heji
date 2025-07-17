///ENTRANCE POINT FOR BACKEND\\\

import express from "express";
import dotenv from "dotenv";
import willsRoutes from './routes/wills';

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/wills", willsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server running at http://localhost:${PORT}');
});