import { Router } from "express";
import { bikeController } from "./bike.controller";

const bikeRouter = Router()


bikeRouter.post('/create-product', bikeController.createProduct)

export default bikeRouter