import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log: ['query'] // A cade operação do prisma no banco de dados ele mostre no log
});