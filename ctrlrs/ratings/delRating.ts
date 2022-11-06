import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const delRatings = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const del_rating = await prisma.rating.delete({
      where: {
        id: id,
      },
    });

    res.status(200).send({ status: true, msg: "ratings deleted succesfully" });
  } catch (e) {
    res
      .status(403)
      .send({
        status: false,
        msg: "ratings could not be deleted due to an error",
      });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = delRatings;
