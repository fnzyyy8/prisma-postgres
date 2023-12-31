import { prismaClient } from "../src/prisma-client";

describe("Query Testing Prisma", () => {
  test("should Query From database", async () => {
    const id = 1;

    const samples =
      await prismaClient.$queryRaw`SELECT * FROM team WHERE id = ${id}`;

    for (const sample of samples) {
      console.log(
        `id : ${sample.id} bernama ${sample.name} sebagai ${sample.jabatan} area ${sample.area}`
      );
    }
  });
});
