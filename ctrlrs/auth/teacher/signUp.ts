import { PrismaClient } from "@prisma/client";
import { v4 } from "uuid";
import "../interfaces";

const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

const signUp = async (req: any, res: any): Promise<void> => {
  try {
    const salt: string = await bcrypt.genSalt(10);
    const creds: sign_up = req.body;
    creds.password = await bcrypt.hash(creds.password, salt);

    const newTeacher = await prisma.teacher.create({
      data: {
        email: creds.email,
        name: creds.name,
        password: creds.password,
      },
    });

    const sess = req.session;
    sess.email = creds.email;
    sess.user = newTeacher.id;
    sess.role = newTeacher.role;
    sess.token = v4();

    res.status(200).send({ status: true, msg: "New teacher account created" });
  } catch (e) {
    console.log(e);
    res
      .status(403)
      .send({ status: false, msg: "there was an error creating user" });
  } finally {
    prisma.$disconnect();
  }
};

module.exports = signUp;
