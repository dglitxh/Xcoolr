import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getExScoresByExId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: number = Number(req.params.id);
    const ExScores = await prisma.exScores.findMany({
      where: {
        exId: id,
      },
    });
    if (!ExScores) {
      res.status(404).json({ status: false, msg: "ExScores not found" });
    }

    res.status(200).send({ status: true, result: ExScores });
  } catch (e) {
    res
      .status(403)
      .send({ status: false, msg: "ExScores were not found due to an error" });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = getExScoresByExId;
