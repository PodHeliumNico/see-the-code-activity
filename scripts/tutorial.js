import { morpheus, neo, wait } from "../utils/helpers.js";
import { promptUser } from "../utils/prompts.js";
import { renderPuzzle } from "./puzzles.js";

export const tutorial = async () => {
  await neo();
  await promptUser("I knew it!");
  await morpheus();
  await promptUser("One of our allies recently found intel on the Machines' next move and shared it with us.");
  renderPuzzle(0);
  await wait(2000);
  await neo();
  await promptUser("What does it mean?");
  await morpheus();
  await promptUser("We don't even know where to begin.");
  await promptUser("\x1B[1;32mWhich line of code will be executed first?\x1B[0m", true);
};
