const request = require("supertest");
const app = require("../index");

const t_login = require("./ctrlrs/auth/tutor/t_login")
const t_signUp = require("./ctrlrs/auth/tutor/signUp")
const t_newProfile = require("./ctrlrs/auth/tutor/createProfile")
const t_updProfile = require("./ctrlrs/auth/tutor/editProfile")
const t_delProfile = require("./ctrlrs/auth/tutor/delProfile")
const t_getProfile = require("./ctrlrs/auth/tutor/t_getUser")
const s_newProfile = require("./ctrlrs/auth/student/newProfile")
const s_updProfile = require("./ctrlrs/auth/student/updateProfile")
const s_delProfile = require("./ctrlrs/auth/student/s_delProfile")
const s_getProfile = require("./student/s_getProfile")
const s_login = require("./ctrlrs/auth/student/s_login")
const s_signup = require("./ctrlrs/auth/student/s_signup")



describe("Tests student auth", () => {
  test("It should response the GET method", async () => {
    const response = await request(app)
        .post("/auth/student/login")
        .send({
            email: 'yaboii@gmail.com',
            password: "trickdaddy"
          })
    expect(response.statusCode).toBe(200);
  });
});