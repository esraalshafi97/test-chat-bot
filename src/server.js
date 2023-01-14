require ("dotenv").config();
import express from "express";
import configViewEngine from "./config/viewEngine.js";
import initWebRoutes from "./routes/web.js";


let app =express();

configViewEngine(app);

initWebRoutes(app);

let port =process.env.PORT|| 8080;

app.listen(port,()=>{
    console.log("Messwnger tech shop is running at the port ${port}");
});