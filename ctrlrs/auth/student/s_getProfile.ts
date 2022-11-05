import "../interfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const s_getUser = async (req: any, res: any) => {
  try {
    const id = Number(req.params.id);
    const user = await prisma.studentProfile.findUnique({
      where: {
        studentId: id,
      },
    });
    if (!user) {
      res.status(404).send({ status: false, msg: "user not found" });
    }

    res.status(200).send({ status: true, result: user });
  } catch (e) {
    res
      .status(403)
      .send({ status: false, msg: "User profile not found due to an error" });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = s_getUser;
