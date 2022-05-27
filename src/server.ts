import http from "http";
import express from "express";
import {compute} from "./compute";
import {Game, Frame, LastFrame} from "./types";

export const app = express();

app.use(express.json());

app.post("/compute", (request, response) => {
  const game = request.body.game;

  // Validate input
  function inputIsCorrect(arr: Game) {
    const sum = (array: Array<number>) => {
      return array.reduce((acc: number, obj: number) => (acc + obj))
    }
    const indexLastItem = arr.length - 1;

    const isCorrectFrame = (element: Frame | LastFrame, index: Number, array: Game): boolean => {
      const correctFrameSize = (index != indexLastItem) ? (element.length == 2 && sum(element) <= 10) : true;
      const isNumbersBetweenZeroAndTenOnly = (n: number) => (Number.isInteger(n) && (0 <= n && n <= 10));
      return element.every(isNumbersBetweenZeroAndTenOnly) && correctFrameSize;
    }
    return (arr.length == 10) ? arr.every(isCorrectFrame) : false;
  }


  if (!inputIsCorrect(game as Game)) {
    response.status(400).send("Incorrect game overview.");
  } else {
    const score = compute(game as Game);
    response.send({"score": score});
  }



});

