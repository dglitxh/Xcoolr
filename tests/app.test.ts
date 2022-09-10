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

    // test("It should delete student profile by id", async () => {
    //   const response = await request(app)
    //       .get("/auth/student/1/profile/delete")
    //   expect(response.statusCode).toBe(200);
  
    // });

  test("It should create new profile for teacher", async () => {
    const response = await request(app)
        .post("/auth/tutor/1/profile/create")
        .send({
            bio: "we the best brody fr",
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

    // test("It should delete teacher profile by id", async () => {
    //   const response = await request(app)
    //       .get("/auth/tutor/1/profile/delete")
    //   expect(response.statusCode).toBe(200);
  
    // });

});


describe("Tests operations for subjects ", () => {
    const app = require("../index");
  
    test("It should create new subject for tutor", async () => {
      const response = await request(app)
          .post("/api/v1/tutors/2/subjects/create")
          .send({
              title: "Sociology",
              core: "true",
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
          .put("/api/v1/subjects/1/update")
          .send({
            title: "Sociology",
            core: "true",
            description: "this is the second best course fr",
            })
      expect(response.statusCode).toBe(200);
    });
  
      // test("It should get delete by id", async () => {
      //   const response = await request(app)
      //       .get("/api/v1/subjects/1/delete")
      //   expect(response.statusCode).toBe(200);
    
      // });
  
   
  
  });



  describe("Tests operations for teacher ratings", () => {
    const app = require("../index");
  
    test("It should create new rating for tutor", async () => {
      const response = await request(app)
          .post("/api/v1/tutors/2/add_rating")
          .send({
              s_profileId: 2,
              rating: 5,
            })
      expect(response.statusCode).toBe(200);
  
    });
  
    test("It should get rating by id", async () => {
      const response = await request(app)
          .get("/api/v1/tutors/ratings/1")
      expect(response.statusCode).toBe(200);
    });

    test("It should get all ratings", async () => {
        const response = await request(app)
            .get("/api/v1/tutors/2/ratings")
        expect(response.statusCode).toBe(200);
      });
  
      // test("It should delete subject by id", async () => {
      //   const response = await request(app)
      //       .get("/api/v1/tutors/ratings/1/delete")
      //   expect(response.statusCode).toBe(200);
    
      // });
  
   
  
  })


describe("Tests operations for student exercises", () => {
    const app = require("../index");
  
    test("It should create new exercise for subject", async () => {
      const response = await request(app)
          .post("/api/v1/subjects/4/exercise")
          .send({
              subjectId: Number(1),
              exName: "Newest ex fr"
            })
      expect(response.statusCode).toBe(200);
  
    });

    test("It should create new test for subject", async () => {
      const response = await request(app)
          .put("/api/v1/exercises/1/update")
          .send({
              exName: "Newer test fr"
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
            .get("/api/v1/subjects/4/exercises")
        expect(response.statusCode).toBe(200);
      });

      // test("It should delete exercise by id", async () => {
      //   const response = await request(app)
      //       .get("/api/v1/exercises/1/delete")
      //   expect(response.statusCode).toBe(200);
    
      // });

      test("It should create new score for exercise", async () => {
        const response = await request(app)
            .post("/api/v1/exercises/1/score")
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
  
        // test("It should delete score by id", async () => {
        //   const response = await request(app)
        //       .get("/api/v1/exercises/scores/1/delete")
        //   expect(response.statusCode).toBe(200);
      
        // });
  
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
              subjectId: Number(1),
              testName: "New test fr"
            })
      expect(response.statusCode).toBe(200);
  
    });
  
    test("It should update test for subject", async () => {
      const response = await request(app)
          .put("/api/v1/tests/1/update")
          .send({
              testName: "New test fr"
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

      // test("It should delete test by id", async () => {
      //   const response = await request(app)
      //       .get("/api/v1/tests/1/delete")
      //   expect(response.statusCode).toBe(200);
    
      // });

      test("It should create new score for test", async () => {
        const response = await request(app)
            .post("/api/v1/tests/1/score")
            .send({
                testId: Number(1),
                s_profileId: Number(1),
                score: Number(50)
              })
        expect(response.statusCode).toBe(200);
    
      });
    
  
      test("It should get all tests for a given subjects", async () => {
          const response = await request(app)
              .get("/api/v1/tests/1/scores/all")
          expect(response.statusCode).toBe(200);
        });
  
        // test("It should delete score by id", async () => {
        //   const response = await request(app)
        //       .get("/api/v1/tests/scores/1/delete")
        //   expect(response.statusCode).toBe(200);
      
        // });
  
      test("It should update subject data", async () => {
        const response = await request(app)
            .put("/api/v1/tests/scores/1/update")
            .send({
                score: Number(6)
              })
        expect(response.statusCode).toBe(200);
      });
      
});