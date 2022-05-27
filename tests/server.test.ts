import request from "supertest";
import {app} from "../src/server";

it("has a compute endpoint that returns the score with status code 200", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10],
      ],
    });

  expect(response.status).toBe(200);
  expect(response.body).toEqual({score: 300});
});


it("should respond with an error when the game score list is too short", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10],
      ],
    });

  expect(response.status).toBe(400);
});



it("should respond with an error when the game score list has an incorrect order", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 10, 10],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
      ],
    });

  expect(response.status).toBe(400);
});



it("should respond with an error when the game scores format is incorrect", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0],
        [10, 0],
        [10],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10],
      ],
    });

  expect(response.status).toBe(400);
});


it("should respond with an error when a throw has more than 10 points", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [11, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10],
      ],
    });

  expect(response.status).toBe(400);
});


it("should respond with an error when the game scores format is incorrect", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 10, 10]
      ],
    });

  expect(response.status).toBe(400);
});


it("should respond with an error when the game scores are an incorrect format", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0, 10, 0, 10, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 10, 10]
      ],
    });

  expect(response.status).toBe(400);
});


it("should respond with an error when one of the rounds has an incorrect amount of points", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [8, 8],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10],
      ],
    });

  expect(response.status).toBe(400);
});
