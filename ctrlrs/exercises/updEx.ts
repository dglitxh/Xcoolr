import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const updateExercise = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = Number(req.params.id);
    let exercise = await prisma.exercise.update({
      where: {
        id: id,
      },
      data: {
        exName: req.body.exName,
      },
    });
    if (exercise) res.status(200).send({ status: true, msg: req.body });
  } catch (e) {
    console.log(e);
    res
      .status(403)
      .send({ status: false, msg: "Exercise update failed due to an error" });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = updateExercise;
