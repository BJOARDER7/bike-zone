import { IBike } from "./bike.interface"
import Bike from "./bike.model"

const createProduct = async(product: IBike): Promise<IBike> => {

    const result = await Bike.create(product)
    return result
}

export const bikeService = {
    createProduct
}