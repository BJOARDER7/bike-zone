import { Request, Response } from "express";
import { bikeService } from "./bike.service";


const createProduct = async (req: Request, res: Response) => {

    try {
        const product = req.body

        const result = await bikeService.createProduct(product)
        res.json({            
            messege: 'Product created successfully',
            status: true,
            data: result
        })
    } catch (error) {
        res.json({            
            messege: 'Something went wrong',
            status: false,
            error
    })
    }
}

const getProduct = async (req: Request, res: Response) => {

    try {       

        const result = await bikeService.getProduct()
        res.json({            
            messege: 'Product getting successfully',
            status: true,
            result
        })
    } catch (error) {
        res.json({            
            messege: 'Something went wrong',
            status: false,
            error
    })
    }
}
const getSpecificProduct = async (req: Request, res: Response) => {

    try {       
        const productId = req.params.productId
        console.log(productId)
        const result = await bikeService.getSpecificProduct(productId)
        res.json({            
            messege: 'Product getting successfully',
            status: true,
            result
        })
    } catch (error) {
        res.json({            
            messege: 'Something went wrong',
            status: false,
            error
    })
    }
}

export const bikeController = {
    createProduct,
    getProduct,
    getSpecificProduct,
}