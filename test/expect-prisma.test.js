import { prismaClient } from "../src/prisma-client";

describe("Execute Testing Prisma", () => {
  test("should expecute to database", async () => {
    const name = "Inggit";
    const area = "Medan";
    const Jabatan = "Geodetic Engineer";

    const execute =
      await prismaClient.$executeRaw`INSERT INTO team (name, area, Jabatan) VALUES (${name},${area},${Jabatan})`;
    expect(execute).toBe(1);
  });
});
