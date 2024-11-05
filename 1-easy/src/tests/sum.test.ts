// import {it, describe, expect} from '@jest/globals';
import {it, describe, expect, vi} from 'vitest';
import { app } from '../index';
import request  from 'supertest';


vi.mock("../db"); 

describe("Test the sum function ", ()=>{
    it("Should return 3 when 1 + 2",async () =>{
    
        const res = await request(app).post("/sum").send({
            a:1,b:100
        });

        expect(res.body.sum).toBe(101);
        // expect(res.statusCode).toBe(200);
    })
    it("Should return failed for long number ",async () =>{
    
        const res = await request(app).post("/sum").send({
            a:100000000,b:10000000000
        });

        expect(res.body.message).toBe("Sorry we don't support big numbers");
        // expect(res.statusCode).toBe(200);
    })
    
})

describe("Test the Multiply function",()=>{
    it("Should be 2 when 1 * 2 ", async ()=>{
        const res = await request(app).post("/multiply").send({
            a:1,b:2
        })

        expect(res.body.mul).toBe(2)
    })
    it("Should be 2 when 1 * 2 ", async ()=>{
        const res = await request(app).post("/multiply").send({
            a:0,b:1000
        })

        expect(res.body.mul).toBe(0)
    })
})