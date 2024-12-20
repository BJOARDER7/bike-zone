import { model, Schema } from "mongoose";


const bikeSchema = new Schema({
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

const Bike = model("Bike", bikeSchema)
export default Bike;