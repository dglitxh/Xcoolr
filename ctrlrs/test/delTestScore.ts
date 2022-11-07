import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const delTestScore = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const testScore = await prisma.testScores.delete({
      where: {
        id: id,
      },
    });

    res
      .status(200)
      .send({ status: true, msg: "Test score deleted succesfully" });
  } catch (e) {
    res
      .status(403)
      .send({
        status: false,
        msg: "Test score could not be deleted due to an error",
      });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = delTestScore;
