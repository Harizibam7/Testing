import express from 'express';
import { prismaClient } from './db';
export const app = express();

app.use(express.json());

app.post("/sum", async (req:any, res:any) => {
        const a = req.body.a;
        const b = req.body.b;

        if(a > 1000000 || b > 1000000){
            return res.status(411).json({
                message:"Sorry we don't support big numbers"
            })
        }

        const result = a + b;

        await prismaClient.request.create({
            data:{
                a:a,
                b:b,
                type:"Sum",
                answer:result
            }
        });

        return res.json({ sum: result });
})
app.post("/multiply", async(req:any, res:any) => {
    const a = req.body.a;
    const b = req.body.b;

    if(a > 1000000 || b > 1000000){
        return res.status(411).json({
            message:"Sorry we don't support big numbers"
        })
    }
    const result = a * b;
    await prismaClient.request.create({
        data:{
            a:a,
            b:b,
            type:"Multiply",
            answer:result
        }
    });

    return res.json({mul:result});
});
