import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from "./mongodb/connect.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
    res.send({ message: 'Hello World!' });
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);

        const port = 5000;
        app.listen(port, () => {
            console.log(`check the app listening at http://localhost:${port}`)
        })
    } catch (err) {
        console.log(err);
    }
}

startServer();