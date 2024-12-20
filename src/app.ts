import express, { Request, Response } from 'express';
import bikeRouter from './modules/products/bike.router';

const app = express();

// middleware
app.use(express.json())

app.use('/api/products', bikeRouter)

app.get("/", (req:Request, res:Response) => {
    res.send({
        status: true,
        messege: 'Server live'
    })
})

export default app;