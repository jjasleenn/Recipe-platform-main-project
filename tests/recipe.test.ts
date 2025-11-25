import request from "supertest";
import app from "../src/app";

describe("Recipe API (v1)", () => {
  it("GET /api/v1/recipes should return 200", async () => {
    const res = await request(app).get("/api/v1/recipes");
    expect(res.statusCode).toBe(200);
  });
});
