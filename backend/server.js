import express from "express";
// import { PORT, mongoDBURL } from "./.env";
import mongoose from 'mongoose';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

require('dotenv').config()

const app =  express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to MERN Stack Tutorial")
})

mongoose
    .connect(process.env.mongoDBURL)
    .then(() => {

        app.listen(process.env.PORT, () => {
            console.log(`app is listening to port: ${process.env.PORT}`);
            // console.log(`app is listening to port: ${GOKU}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });