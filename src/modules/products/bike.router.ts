import { Router } from "express";
import { bikeController } from "./bike.controller";

const bikeRouter = Router()


bikeRouter.post('/create-product', bikeController.createProduct)
bikeRouter.get('/:productId', bikeController.getSpecificProduct)
bikeRouter.get('/', bikeController.getProduct)

export default bikeRouter