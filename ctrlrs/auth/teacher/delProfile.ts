import "../interfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const t_delUser = async (req: any, res: any) => {
  try {
    const id: number = Number(req.params.id);
    const user = await prisma.teacherProfile.delete({
      where: {
        teacherId: id,
      },
    });

    res.send({ status: true, msg: "Teacher profile deleted succesfully." });
  } catch (e) {
    res
      .status(401)
      .send({ status: false, msg: "Profile was not created due to an error" });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = t_delUser;
