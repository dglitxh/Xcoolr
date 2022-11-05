import "../interfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const s_delUser = async (req: any, res: any) => {
  try {
    const id = Number(req.params.id);
    const user = await prisma.studentProfile.delete({
      where: {
        studentId: id,
      },
    });

    res
      .status(200)
      .send({ status: true, msg: "Student profile deleted succesfully." });
  } catch (e) {
    res
      .status(403)
      .send({
        status: false,
        msg: "Profile could not be deleted due to an error",
      });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = s_delUser;
