import { prismaClient } from "../src/prisma-client";

describe("Connection test", () => {
  test("Connection to database test", async () => {
    await prismaClient.$connect();
    await prismaClient.$disconnect();
  });
});
