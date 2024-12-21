import { Router } from "express";
import { bikeController } from "./bike.controller";

const bikeRouter = Router()


bikeRouter.post('/create-product', bikeController.createProduct)
bikeRouter.get('/:productId', bikeController.getSpecificProduct)
bikeRouter.put('/:productId', bikeController.updateProduct)
bikeRouter.delete('/:productId', bikeController.deleteProduct)
bikeRouter.get('/', bikeController.getProduct)

export default bikeRouter