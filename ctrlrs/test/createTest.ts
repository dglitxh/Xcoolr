import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
import { subtle } from "crypto";

const prisma = new PrismaClient();

const createTest = async (req: any, res: any): Promise<void> => {
  try {
    // only teachers can create new tests
    const id: number = Number(req.params.id);
    const newTest = await prisma.test.create({
      data: {
        subjectId: id,
        testName: req.body.testName,
      },
    });

    res.status(200).send({ status: true, msg: "new test created" });
  } catch (e) {
    console.log(e);
    res
      .status(401)
      .send({ status: false, msg: "there was an error creating test" });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = createTest;
