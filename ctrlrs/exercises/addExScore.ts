import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ex_score {
  exId: number;
  s_profileId: number;
  score: number;
}

const addExScore = async (req: any, res: any): Promise<void> => {
  try {
    // only teachers can create new ex_scores
    const body: ex_score = req.body;
    const id: number = Number(req.params.id);
    const chkScore = await prisma.exScores.findFirst({
      where: {
        exId: id,
        s_profileId: Number(body.s_profileId),
      },
    });

    if (chkScore)
      res
        .status(401)
        .send({
          status: false,
          msg: "Student has already been scored, try updating score",
        });
    else {
      const newScore = await prisma.exScores.create({
        data: {
          exId: id,
          s_profileId: Number(body.s_profileId),
          score: Number(body.score),
        },
      });

      res.status(200).end({ status: true, msg: "new exercise score created" });
    }
  } catch (e) {
    console.log(e);
    res
      .status(401)
      .send({
        status: false,
        msg: "there was an error creating exercise score",
      });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = addExScore;
