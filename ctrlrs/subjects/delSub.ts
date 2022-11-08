import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const delSubject = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const subject = await prisma.subject.delete({
      where: {
        id: id,
      },
    });

    res.status(200).send({ status: true, msg: "subject deleted succesfully" });
  } catch (e) {
    res
      .status(500)
      .send({
        status: false,
        msg: "Subject could not be deleted due to an error",
      });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = delSubject;
