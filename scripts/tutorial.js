import { morpheus, neo, wait } from "../utils/helpers.js";
import { promptUser } from "../utils/prompts.js";
import { renderPuzzle } from "./puzzles.js";

export const tutorial = async () => {
  await neo();
  await promptUser("I knew it!");
  renderPuzzle(0);
};
