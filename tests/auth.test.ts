const request = require("supertest");

const t_login = require("../ctrlrs/auth/tutor/t_login")
const t_signUp = require("../ctrlrs/auth/tutor/signUp")
const t_newProfile = require("../ctrlrs/auth/tutor/createProfile")
const t_updProfile = require("../ctrlrs/auth/tutor/editProfile")
const t_delProfile = require("../ctrlrs/auth/tutor/delProfile")
const t_getProfile = require("../ctrlrs/auth/tutor/t_getUser")
const s_newProfile = require("../ctrlrs/auth/student/newProfile")
const s_updProfile = require("../ctrlrs/auth/student/updateProfile")
const s_delProfile = require("../ctrlrs/auth/student/s_delProfile")
const s_getProfile = require("../ctrlrs/auth/student/s_getProfile")
const s_login = require("../ctrlrs/auth/student/s_login")
const s_signup = require("../ctrlrs/auth/student/s_signup")



describe("Tests user auth", () => {
  const app = require("../index");

  test("It should respond to the Sign Up POST method", async () => {
    const response = await request(app)
        .post("/auth/student/signup")
        .send({
            name: "ydeezus",
            email: 'yaboii@gmail.com',
            password: "trickdaddy"
          })
    expect(response.statusCode).toBe(200);

  });

  test("It should respond to the login POST method", async ()  => {
    const response = await request(app)
        .post("/auth/student/login")
        .send({
            email: 'yaboii@gmail.com',
            password: "trickdaddy"
          })
    expect(response.statusCode).toBe(200);
  
  });

  test("It should respond to the Sign Up POST method", async () => {
    const response = await request(app)
        .post("/auth/tutor/signup")
        .send({
            name: "ydeezus",
            email: 'daboii@gmail.com',
            password: "trickdaddy"
          })
    expect(response.statusCode).toBe(200);

  });

  test("It should respond to the login POST method", async ()  => {
    const response = await request(app)
        .post("/auth/tutor/login")
        .send({
            email: 'daboii@gmail.com',
            password: "trickdaddy"
          })
    expect(response.statusCode).toBe(200);
  
  });

});


describe("Tests Crud operations for user profiles", () => {
  const app = require("../index");

  test("It should create new profile for student", async () => {
    const response = await request(app)
        .post("/auth/student/1/profile/create")
        .send({
            bio: "we the best brody fr",
          })
    expect(response.statusCode).toBe(200);

  });

  test("It should create get profile with student id", async () => {
    const response = await request(app)
        .get("/auth/student/1/profile")
    expect(response.statusCode).toBe(200);
  });
 
  test("It should update student profile", async () => {
    const response = await request(app)
        .put("/auth/student/1/profile/update")
        .send({
            bio: "we the new best brody fr",
          })
    expect(response.statusCode).toBe(200);
  });

    test("It should delete student profile by id", async () => {
      const response = await request(app)
          .get("/auth/student/1/profile/delete")
      expect(response.statusCode).toBe(200);
  
    });

  test("It should create new profile for teacher", async () => {
    const response = await request(app)
        .post("/auth/tutor/1/profile/create")
        .send({
            bio: "we the best brody fr",
            rating: 4.5
          })
    expect(response.statusCode).toBe(200);

  });

  test("It should get profile with teacher id", async () => {
    const response = await request(app)
        .get("/auth/tutor/1/profile")
    expect(response.statusCode).toBe(200);
  });
 
  test("It should update teacher profile", async () => {
    const response = await request(app)
        .put("/auth/tutor/1/profile/update")
        .send({
            bio: "we the new best brody fr",
          })
    expect(response.statusCode).toBe(200);
  });

    test("It should delete teacher profile by id", async () => {
      const response = await request(app)
          .get("/auth/tutor/1/profile/delete")
      expect(response.statusCode).toBe(200);
  
    });

});