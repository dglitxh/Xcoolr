import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllRatings = async (req: Request, res: Response): Promise<void> => {
  try {
    const tid = Number(req.params.id);
    const ratings = await prisma.rating.findMany({
      where: {
        t_profileId: tid,
      },
    });

    res.status(200).send({ status: true, result: ratings });
  } catch (e) {
    res
      .status(401)
      .send({ status: false, msg: "ratings were not found due to an error" });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = getAllRatings;
