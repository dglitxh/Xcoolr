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


describe("Tests operations for subjects ", () => {
    const app = require("../index");
  
    test("It should create new subject for tutor", async () => {
      const response = await request(app)
          .post("/api/v1/subjects/tutor/1/create")
          .send({
              title: "Sociology",
              core: true,
              description: "this is the best course fr",
            })
      expect(response.statusCode).toBe(200);
  
    });
  
    test("It should get subject by id", async () => {
      const response = await request(app)
          .get("/api/v1/subjects/1")
      expect(response.statusCode).toBe(200);
    });

    test("It should get all subjects", async () => {
        const response = await request(app)
            .get("/api/v1/subjects")
        expect(response.statusCode).toBe(200);
      });
   
    test("It should update subject data", async () => {
      const response = await request(app)
          .put("/api/v1/subjects/tutor/1/update")
          .send({
            title: "Sociology",
            core: true,
            description: "this is the second best course fr",
            })
      expect(response.statusCode).toBe(200);
    });
  
      test("It should get subject by id", async () => {
        const response = await request(app)
            .get("/api/v1/subjects/tutor/1/delete")
        expect(response.statusCode).toBe(200);
    
      });
  
   
  
  });



  describe("Tests operations for teacher ratings", () => {
    const app = require("../index");
  
    test("It should create new subject for tutor", async () => {
      const response = await request(app)
          .post("/api/v1/tutors/1/add_rating")
          .send({
              rating: 5,
            })
      expect(response.statusCode).toBe(200);
  
    });
  
    test("It should get rating by id", async () => {
      const response = await request(app)
          .get("/api/v1/tutors/1/rating")
      expect(response.statusCode).toBe(200);
    });

    test("It should get all ratings", async () => {
        const response = await request(app)
            .get("/api/v1/tutors/1/ratings")
        expect(response.statusCode).toBe(200);
      });
  
      test("It should get subject by id", async () => {
        const response = await request(app)
            .get("/api/v1/tutors/ratings/1/delete")
        expect(response.statusCode).toBe(200);
    
      });
  
   
  
  })


describe("Tests operations for student exercises", () => {
    const app = require("../index");
  
    test("It should create new exercise for subject", async () => {
      const response = await request(app)
          .post("/api/v1/subjects/1/exercise")
          .send({
              subjectId: Number(1)
            })
      expect(response.statusCode).toBe(200);
  
    });
  
    test("It should get exercise by id", async () => {
      const response = await request(app)
          .get("/api/v1/exercises/1")
      expect(response.statusCode).toBe(200);
    });

    test("It should get all exercises for a given subjects", async () => {
        const response = await request(app)
            .get("/api/v1/subjects/1/exercises")
        expect(response.statusCode).toBe(200);
      });

      test("It should delete exercise by id", async () => {
        const response = await request(app)
            .get("/api/v1/exercises/1/delete")
        expect(response.statusCode).toBe(200);
    
      });

      test("It should create new score for exercise", async () => {
        const response = await request(app)
            .post("/api/v1/exercise/1/score")
            .send({
                exId: Number(1),
                s_profileId: Number(1),
                score: Number(50)
              })
        expect(response.statusCode).toBe(200);
    
      });
    
      test("It should get exercise by id", async () => {
        const response = await request(app)
            .get("/api/v1/exercises/scores/1")
        expect(response.statusCode).toBe(200);
      });
  
      test("It should get all exercises for a given subjects", async () => {
          const response = await request(app)
              .get("/api/v1/exercises/1/score")
          expect(response.statusCode).toBe(200);
        });
  
        test("It should delete score by id", async () => {
          const response = await request(app)
              .get("/api/v1/exercises/scores/1/delete")
          expect(response.statusCode).toBe(200);
      
        });
  
      test("It should update subject data", async () => {
        const response = await request(app)
            .put("/api/v1/exercises/scores/1/update")
            .send({
                exId: Number(1),
                s_profileId: Number(1),
                score: Number(6)
              })
        expect(response.statusCode).toBe(200);
      });
    
  });


describe("Tests operations for student tests", () => {
    const app = require("../index");
  
    test("It should create new test for subject", async () => {
      const response = await request(app)
          .post("/api/v1/subjects/1/test")
          .send({
              subjectId: Number(1)
            })
      expect(response.statusCode).toBe(200);
  
    });
  
    test("It should get test by id", async () => {
      const response = await request(app)
          .get("/api/v1/tests/1")
      expect(response.statusCode).toBe(200);
    });

    test("It should get all tests for a given subjects", async () => {
        const response = await request(app)
            .get("/api/v1/subjects/1/tests")
        expect(response.statusCode).toBe(200);
      });

      test("It should delete test by id", async () => {
        const response = await request(app)
            .get("/api/v1/tests/1/delete")
        expect(response.statusCode).toBe(200);
    
      });

      test("It should create new score for test", async () => {
        const response = await request(app)
            .post("/api/v1/test/1/score")
            .send({
                testId: Number(1),
                s_profileId: Number(1),
                score: Number(50)
              })
        expect(response.statusCode).toBe(200);
    
      });
    
      test("It should get test by id", async () => {
        const response = await request(app)
            .get("/api/v1/tests/scores/1")
        expect(response.statusCode).toBe(200);
      });
  
      test("It should get all tests for a given subjects", async () => {
          const response = await request(app)
              .get("/api/v1/tests/:id/score")
          expect(response.statusCode).toBe(200);
        });
  
        test("It should delete score by id", async () => {
          const response = await request(app)
              .get("/api/v1/tests/scores/1/delete")
          expect(response.statusCode).toBe(200);
      
        });
  
      test("It should update subject data", async () => {
        const response = await request(app)
            .put("/api/v1/tests/scores/1/update")
            .send({
                score: Number(6)
              })
        expect(response.statusCode).toBe(200);
      });
      
});