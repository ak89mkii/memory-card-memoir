import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';

const app =  express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to MERN Stack Tutorial")
})

mongoose
    .connect(mongoDBURL)
    .then(() => {

        app.listen(PORT, () => {
            console.log(`app is listening to port: ${PORT}`);
            // console.log(`app is listening to port: ${GOKU}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });