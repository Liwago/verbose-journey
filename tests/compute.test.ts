import {compute} from "../src/compute";
import {Game} from "../src/types";

it("should return correct score for a game", () => {
  const input300: Game = [
    [1, 2],
    [3, 4],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0, 0],
  ];

  const score = compute(input300);

  expect(score).toBe(10);
});


it("should return correct score for a game", () => {
  const input20: Game = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [10, 10, 0],
  ];

  const score = compute(input20);

  expect(score).toBe(20);
});


it("should return 0 if no points", () => {
  const input0: Game = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0, 0],
  ];

  const score = compute(input0);

  expect(score).toBe(0);
});


it("should return correct score for a game", () => {
  const input76: Game = [
    [6, 0],
    [4, 0],
    [7, 2],
    [3, 3],
    [8, 0],
    [9, 0],
    [8, 1],
    [3, 0],
    [6, 0],
    [9, 1, 6],
  ];

  const score = compute(input76);

  expect(score).toBe(76);
});


it("should return correct score for a game", () => {
  const input36: Game = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [10, 0],
    [10, 1, 4],
  ];

  const score = compute(input36);
  expect(score).toBe(36);
});


it("should return correct score for a game", () => {
  const input140: Game = [
    [8, 0],
    [9, 1],
    [3, 5],
    [10, 0],
    [3, 7],
    [9, 1],
    [7, 2],
    [6, 4],
    [10, 0],
    [3, 5, 0],
  ];

  const score = compute(input140);

  expect(score).toBe(140);
});


it("should return 300 on a perfect game", () => {
  const input300: Game = [
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
  ];

  const score = compute(input300);

  expect(score).toBe(300);
});


it("should return correct score for a game", () => {
  const input203: Game = [
    [4, 3],
    [5, 1],
    [4, 6],
    [10, 0],
    [1, 4],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 10, 10],
  ];

  const score = compute(input203);

  expect(score).toBe(203);
});


it("should return correct score for a game", () => {
  const input195: Game = [
    [9, 1],
    [5, 5],
    [7, 0],
    [8, 1],
    [4, 6],
    [9, 1],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 8, 2],
  ];

  const score = compute(input195);
  expect(score).toBe(195);
});


it("should return correct score for a game", () => {
  const input187: Game = [
    [10, 0],
    [9, 1],
    [5, 5],
    [7, 2],
    [10, 0],
    [10, 0],
    [10, 0],
    [9, 0],
    [8, 2],
    [9, 1, 10],
  ];

  const score = compute(input187);

  expect(score).toBe(187);
});


it("should return correct score for a game", () => {
  const input148: Game = [
    [10, 0],
    [9, 1],
    [5, 5],
    [7, 2],
    [10, 0],
    [10, 0],
    [10, 0],
    [9, 0],
    [0, 0],
    [0, 0, 0],
  ];

  const score = compute(input148);
  expect(score).toBe(148);
});


it("should return correct score for a game", () => {
  const input95: Game = [
    [7, 1],
    [10, 0],
    [10, 0],
    [10, 0],
    [7, 3],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0, 0],
  ];

  const score = compute(input95);
  expect(score).toBe(95);
});


it("should return correct score for a game", () => {
  const input175: Game = [
    [7, 1],
    [10, 0],
    [10, 0],
    [10, 0],
    [7, 3],
    [6, 2],
    [8, 2],
    [10, 0],
    [10, 0],
    [4, 2, 0],
  ];

  const score = compute(input175);
  expect(score).toBe(175);
});


it("should return correct score for a game", () => {
  const input222: Game = [
    [4, 6],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [6, 0],
    [3, 7],
    [10, 0],
    [10, 0],
    [10, 6, 2],
  ];

  const score = compute(input222);
  expect(score).toBe(222);
});
