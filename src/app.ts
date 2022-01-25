import express from "express";
import cors from 'cors';
import { router } from './routes';
import "dotenv/config";
import { SupermarketListingController } from "./controllers/SupermarketListingController";

const app = express();

const APP_PORT = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use(router);

app.use((req, res, next) => {
    console.log(`[${Date.now()}] ${req.method} ${req.path}`);
    next();
})


// Database Configuration
import mongoose from 'mongoose';

// Database Connection
mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log("Successfully connected to the database.");
    }).catch(err => {
        console.log("Could not connect to the database. Exiting...", err);
        process.exit();
    })


app.listen(APP_PORT, () => console.log(`Server is listening on port ${APP_PORT}`));

