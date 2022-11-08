import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const delTest = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const test = await prisma.test.delete({
      where: {
        id: id,
      },
    });

    res.status(200).send({ status: true, msg: "test deleted succesfully" });
  } catch (e) {
    res
      .status(403)
      .send({
        status: false,
        msg: "test could not be deleted due to an error",
      });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = delTest;
