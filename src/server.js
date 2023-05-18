import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWedRoutes from "./route/wed";
import { required } from "nodemon/lib/config";
import connectDB from "./config/connectDB"
require('dotenv').config();


let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }))


viewEngine(app);
initWedRoutes(app);
connectDB();

let port = process.env.PORT
app.listen(port, () => {
    console.log("Runing " + port)
})