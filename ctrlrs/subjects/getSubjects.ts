import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllSubjects = async (req: Request, res: Response): Promise<void> => {
  try {
    const subjects = await prisma.subject.findMany();
    if (!subjects) {
      res.status(404).send({ status: false, msg: "Subjects not found" });
    }

    res.status(200).send({ status: true, result: subjects });
  } catch (e) {
    res
      .status(401)
      .send({ status: false, msg: "Subjects were not found due to an error" });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = getAllSubjects;
