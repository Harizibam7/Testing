"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {it, describe, expect} from '@jest/globals';
const vitest_1 = require("vitest");
const index_1 = require("../index");
const supertest_1 = __importDefault(require("supertest"));
// vi.mock("../db",()=>{
//     return {
//         prismaClient:{
//             request:{
//                 create:vi.fn()
//             }
//         }
//     }
// }); 
(0, vitest_1.describe)("Test the sum function ", () => {
    (0, vitest_1.it)("Should return 3 when 1 + 2", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).post("/sum").send({
            a: 1, b: 100
        });
        (0, vitest_1.expect)(res.body.sum).toBe(101);
        // expect(res.statusCode).toBe(200);
    }));
    (0, vitest_1.it)("Should return failed for long number ", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).post("/sum").send({
            a: 100000000, b: 10000000000
        });
        (0, vitest_1.expect)(res.body.message).toBe("Sorry we don't support big numbers");
        (0, vitest_1.expect)(res.statusCode).toBe(200);
    }));
});
(0, vitest_1.describe)("Test the Multiply function", () => {
    (0, vitest_1.it)("Should be 2 when 1 * 2 ", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).post("/multiply").send({
            a: 1, b: 2
        });
        (0, vitest_1.expect)(res.body.mul).toBe(2);
    }));
    (0, vitest_1.it)("Should be 2 when 1 * 2 ", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).post("/multiply").send({
            a: 0, b: 1000
        });
        (0, vitest_1.expect)(res.body.mul).toBe(0);
    }));
});
