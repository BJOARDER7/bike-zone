import { Request, Response } from "express";
import { bikeService } from "./bike.service";


const createProduct = async (req: Request, res: Response) => {

    try {
        const product = req.body

        const result = await bikeService.createProduct(product)
        res.json({
            messege: 'Product created successfully',
            data: result
        })
    } catch (error) {
        res.json({
            status: false,
            messege: 'Something went wrong',
            error
    })

}
}

export const bikeController = {
    createProduct,
}