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


  