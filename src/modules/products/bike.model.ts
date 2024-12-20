import { model, Schema } from "mongoose";
import { IBike } from "./bike.interface";


const bikeSchema = new Schema<IBike>({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: {
            values: ["Mountain", "Road", "Hybrid", "Electric"],
   
        },
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
})

const Bike = model<IBike>("Bike", bikeSchema)
export default Bike;