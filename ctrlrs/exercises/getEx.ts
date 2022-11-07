import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getExercise = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const exercise = await prisma.exercise.findUnique({
      where: {
        id: id,
      },
    });
    if (!exercise) {
      res.status(404).send({ status: false, msg: "Exercise not found" });
    }

    res.status(200).send({ status: true, result: exercise });
  } catch (e) {
    res
      .status(403)
      .send({ status: false, msg: "Exercise not found due to an error" });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = getExercise;
