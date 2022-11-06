import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getTestScoresByTid = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: number = Number(req.params.id);
    const testScores = await prisma.testScores.findMany({
      where: {
        testId: id,
      },
    });
    if (!testScores) {
      res.status(404).send({ status: false, msg: "Test scores not found" });
    }

    res.status(200).send({ status: true, result: testScores });
  } catch (e) {
    res.status(401).send({
      status: false,
      msg: "Test scores were not found due to an error",
    });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = getTestScoresByTid;
