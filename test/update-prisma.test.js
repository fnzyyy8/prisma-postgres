import { prismaClient } from "../src/prisma-client";

describe("Create with prisma", () => {
  test("should create to anggota", async () => {
    const anggota = await prismaClient.anggota.update({
      data: {
        name: "Farhan Septiansyah Hidayat",
      },
      where: {
        id: 1,
      },
    });

    expect(anggota.name).toBe("Farhan Septiansyah Hidayat");
  });
});
