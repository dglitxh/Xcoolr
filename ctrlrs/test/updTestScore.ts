import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ex_score {
  score: number;
}

const updTestScore = async (req: any, res: any): Promise<void> => {
  try {
    // only teachers can create new ex_scores
    const body: ex_score = req.body;
    const id: number = Number(req.params.id);
    const updScore = await prisma.testScores.update({
      where: {
        id: id,
      },
      data: {
        score: Number(body.score),
      },
    });

    res.status(200).send({ status: true, msg: "new test score updated" });
  } catch (e) {
    console.log(e);
    res
      .status(401)
      .send({ status: false, msg: "there was an error updating test score" });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = updTestScore;
