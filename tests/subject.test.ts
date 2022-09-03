const req = require("supertest")

describe("Tests Crud operations for user profiles", () => {
    const app = require("../index");
  
    test("It should create new subject for tutor", async () => {
      const response = await req(app)
          .post("/api/v1/subjects/tutor/1/create")
          .send({
              title: "Sociology",
              core: true,
              description: "this is the best course fr",
            })
      expect(response.statusCode).toBe(200);
  
    });
  
    test("It should get subject by id", async () => {
      const response = await req(app)
          .get("/api/v1/subjects/1")
      expect(response.statusCode).toBe(200);
    });

    test("It should get all subjects", async () => {
        const response = await req(app)
            .get("/api/v1/subjects")
        expect(response.statusCode).toBe(200);
      });
   
    test("It should update subject data", async () => {
      const response = await req(app)
          .put("/api/v1/subjects/tutor/1/update")
          .send({
            title: "Sociology",
            core: true,
            description: "this is the second best course fr",
            })
      expect(response.statusCode).toBe(200);
    });
  
      test("It should get subject by id", async () => {
        const response = await req(app)
            .get("/api/v1/subjects/tutor/1/delete")
        expect(response.statusCode).toBe(200);
    
      });
  
   
  
  });



  describe("Tests operations for teacher ratings", () => {
    const app = require("../index");
  
    test("It should create new subject for tutor", async () => {
      const response = await req(app)
          .post("/api/v1/tutors/1/add_rating")
          .send({
              rating: 5,
            })
      expect(response.statusCode).toBe(200);
  
    });
  
    test("It should get rating by id", async () => {
      const response = await req(app)
          .get("/api/v1/tutors/1/rating")
      expect(response.statusCode).toBe(200);
    });

    test("It should get all ratings", async () => {
        const response = await req(app)
            .get("/api/v1/tutors/1/ratings")
        expect(response.statusCode).toBe(200);
      });
  
      test("It should get subject by id", async () => {
        const response = await req(app)
            .get("/api/v1/tutors/ratings/1/delete")
        expect(response.statusCode).toBe(200);
    
      });
  
   
  
  })




describe("Tests operations for student exercises", () => {
    const app = require("../index");
  
    test("It should create new exercise for subject", async () => {
      const response = await req(app)
          .post("/api/v1/subjects/1/exercise")
          .send({
              subjectId: Number(1)
            })
      expect(response.statusCode).toBe(200);
  
    });
  
    test("It should get exercise by id", async () => {
      const response = await req(app)
          .get("/api/v1/exercises/1")
      expect(response.statusCode).toBe(200);
    });

    test("It should get all exercises for a given subjects", async () => {
        const response = await req(app)
            .get("/api/v1/subjects")
        expect(response.statusCode).toBe(200);
      });

      test("It should delete exercise by id", async () => {
        const response = await req(app)
            .get("/api/v1/exercises/1/delete")
        expect(response.statusCode).toBe(200);
    
      });

      test("It should create new score for exercise", async () => {
        const response = await req(app)
            .post("/api/v1/exercise/1/score")
            .send({
                exId: Number(1),
                s_profileId: Number(1),
                score: Number(50)
              })
        expect(response.statusCode).toBe(200);
    
      });
    
      test("It should get exercise by id", async () => {
        const response = await req(app)
            .get("/api/v1/exercises/scores/1")
        expect(response.statusCode).toBe(200);
      });
  
      test("It should get all exercises for a given subjects", async () => {
          const response = await req(app)
              .get("/api/v1/exercises/:id/score")
          expect(response.statusCode).toBe(200);
        });
  
        test("It should delete score by id", async () => {
          const response = await req(app)
              .get("/api/v1/exercises/scores/:id/delete")
          expect(response.statusCode).toBe(200);
      
        });
  
      test("It should update subject data", async () => {
        const response = await req(app)
            .put("/api/v1/exercises/scores/:id/update")
            .send({
                score: Number(6)
              })
        expect(response.statusCode).toBe(200);
      });
    
   
  
  });



  describe("Tests operations for student tests", () => {
    const app = require("../index");
  
    test("It should create new test for subject", async () => {
      const response = await req(app)
          .post("/api/v1/subjects/1/test")
          .send({
              subjectId: Number(1)
            })
      expect(response.statusCode).toBe(200);
  
    });
  
    test("It should get test by id", async () => {
      const response = await req(app)
          .get("/api/v1/tests/1")
      expect(response.statusCode).toBe(200);
    });

    test("It should get all tests for a given subjects", async () => {
        const response = await req(app)
            .get("/api/v1/subjects")
        expect(response.statusCode).toBe(200);
      });

      test("It should delete test by id", async () => {
        const response = await req(app)
            .get("/api/v1/tests/1/delete")
        expect(response.statusCode).toBe(200);
    
      });

      test("It should create new score for test", async () => {
        const response = await req(app)
            .post("/api/v1/test/1/score")
            .send({
                testId: Number(1),
                s_profileId: Number(1),
                score: Number(50)
              })
        expect(response.statusCode).toBe(200);
    
      });
    
      test("It should get test by id", async () => {
        const response = await req(app)
            .get("/api/v1/tests/scores/1")
        expect(response.statusCode).toBe(200);
      });
  
      test("It should get all tests for a given subjects", async () => {
          const response = await req(app)
              .get("/api/v1/tests/:id/score")
          expect(response.statusCode).toBe(200);
        });
  
        test("It should delete score by id", async () => {
          const response = await req(app)
              .get("/api/v1/tests/scores/:id/delete")
          expect(response.statusCode).toBe(200);
      
        });
  
      test("It should update subject data", async () => {
        const response = await req(app)
            .put("/api/v1/tests/scores/:id/update")
            .send({
                score: Number(6)
              })
        expect(response.statusCode).toBe(200);
      });
    
   
  
  });