const request = require("supertest");




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

