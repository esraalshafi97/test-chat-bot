import express from "express";
import {homepageController} from './controller/homepageController.js';

let router=express.Router();

let initWebRoutes=(app)=>{
    router.get("/", homepageController.getHomePage);
    router.get("/webhook",homepageController.getWebhook);
    router.post("/webhook",homepageController.postWebhook);
    return app.use("/",router);
};

module.exports=initWebRoutes;