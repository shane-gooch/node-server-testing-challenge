const request = require("supertest");

const db = require("../database/dbConfig.js");
const server = require("../api/server.js");

describe("server", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  //   it('tests are running with DB_ENV set as "testing"', () => {
  //     expect(process.env.DB_ENV).toBe("testings");
  //   });

  describe("GET /", () => {
    it("return 200 OK", () => {
      request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("returns JSON", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toMatch(/json/);
        });
    });
  });
  describe("GET /api/users", () => {
    it("should return an array", () => {
      return request(server)
        .get("/api/users")
        .then(res => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });
  });
});
