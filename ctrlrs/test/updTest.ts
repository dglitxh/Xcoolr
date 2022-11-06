import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const updateTest = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = Number(req.params.id);
    let test = await prisma.test.update({
      where: {
        id: id,
      },
      data: {
        testName: req.body.testName,
      },
    });
    if (test) res.status(200).send({ status: true, msg: req.body });
  } catch (e) {
    console.log(e);
    res
      .status(403)
      .send({ status: false, msg: "Test update failed due to an error" });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = updateTest;
