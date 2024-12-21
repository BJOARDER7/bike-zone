import { IBike } from "./bike.interface"
import Bike from "./bike.model"

const createProduct = async(product: IBike): Promise<IBike> => {

    const result = await Bike.create(product)
    return result
}

const getProduct = async() => {
    const result = await Bike.find()
    return result    
}
const getSpecificProduct = async(id: string) => {
    const result = await Bike.findById(id)
    return result    
}
const updateProduct = async(id: string, product: IBike) => {
    const result = await Bike.findByIdAndUpdate(id, product, {
        new: true
    })
    return result    
}
const deleteProduct = async(id: string) => {
    const result = await Bike.findByIdAndDelete(id)
    return result    
}

export const bikeService = {
    createProduct,
    getProduct,
    getSpecificProduct,
    updateProduct,
    deleteProduct
}