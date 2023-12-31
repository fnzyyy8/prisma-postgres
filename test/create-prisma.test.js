import { prismaClient } from "../src/prisma-client";

describe("Create with prisma", () => {
  test("should create to anggota", async () => {
    const anggota = await prismaClient.anggota.create({
      data: {
        id: 1,
        name: "Farhan Septiansyah",
        jabatan: "Document Control",
        area: "Medan",
      },
    });

    expect(anggota.name).toBe("Farhan Septiansyah");
    expect(anggota.jabatan).toBe("Document Control");
    expect(anggota.area).toBe("Medan");
  });
});
