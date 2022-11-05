import "../interfaces";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const updateProfile = async (req: any, res: any): Promise<void> => {
  try {
    const user_id: number = Number(req.params.id);
    const creds: t_profile = req.body;
    let profile = await prisma.teacherProfile.update({
      where: {
        teacherId: user_id,
      },
      data: {
        bio: creds.bio,
      },
    });
    if (profile) profile = creds;
    res.status(200).send({
      status: false,
      msg: "profile updated succesfully",
      result: profile,
    });
  } catch (e) {
    console.log(e);
    res
      .status(403)
      .send({ status: false, msg: "there was an error updating profile" });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = updateProfile;
