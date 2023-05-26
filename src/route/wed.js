import express from "express";
import homeController from "../controller/homeController"
let router = express.Router();

let initWedRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displaygetCRUD);

    return app.use("/", router)

}
module.exports = initWedRoutes;