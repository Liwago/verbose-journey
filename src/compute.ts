import {Game, Frame, LastFrame} from "./types";

export function compute(game: Game): number {
  let score = 0

  function sum(array: Array<number>) {
    return array.reduce((acc: number, obj: number) => (acc + obj))
  }

  const isStrike = (frame: Frame | LastFrame): boolean => (frame[0] == 10);
  const isSpare = (frame: Frame | LastFrame): boolean => ((sum(frame)) == 10 && (frame[0] != 10));

  for (let indexStr in game) {
    let index = Number(indexStr)
    const prevprev = game[index - 2] ? game[index - 2] : ([0, 0] as Frame)
    const prev = game[index - 1] ? game[index - 1] : ([0, 0] as Frame)
    const curr = game[index]
    const next = game[index + 1]

    score = score + sum(curr);

    if (isStrike(prev)) {
      score = score + sum(curr.slice(0, 2));
      if (next) {
        if (isStrike(curr)) {
          if (isStrike(next)) {
            score = score + 10
          } else if (prevprev && isStrike(prevprev)) {
            score = score + next.slice(0, 2)[0];
          }
        }
      } else if (isStrike(prev) && isStrike(prevprev) && !(isStrike(curr))) {
        score = score + curr.slice(0, 2)[0];
      }
    }
    if (isSpare(prev)) {
      score = score + curr[0];
    }
  }
  return score
}
