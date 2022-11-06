import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const dropSubject = async (req: Request, res: Response): Promise<void> => {
  try {
    const sid = Number(req.params.id);
    const dropSub = await prisma.studentSubjects.deleteMany({
      where: {
        subjectId: sid,
        s_profileId: Number(req.body.s_profileId),
      },
    });

    res.status(200).send({ status: true, msg: "subject dropped successfully" });
  } catch (e) {
    res.status(400).send({
      status: false,
      msg: "There was an error dropping student subject",
    });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = dropSubject;
