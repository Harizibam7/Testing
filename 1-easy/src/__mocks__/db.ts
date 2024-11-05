// import { vi } from "vitest";

// export const prismaClient = {
//     request:{
//         create:vi.fn()
//     }
// };


import { PrismaClient } from "@prisma/client";
import {mockDeep} from 'vitest-mock-extended';

export const prismaClient = mockDeep<PrismaClient>;

