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

export const tutorialRound2 = async () => {
  await neo();
  await promptUser("Whoa.");
  await morpheus();
  await promptUser("What happens next?");
  await promptUser("\x1B[1;32mWhich line of code will execute next?\x1B[0m", true);
};

export const tutorialRound3 = async () => {
  await morpheus();
  await promptUser("I see.");
  await neo();
  await promptUser("What's their end goal?");
  await promptUser("\x1B[1;32mWhich line of code will execute last?\x1B[0m", true);
};

export const tutorialRound4 = async () => {
  await neo();
  await promptUser("Smith's been activated!?");
  await morpheus();
  await promptUser("And that's just the beginning.");
  await morpheus();
  await promptUser("Our ally was able to find many of these JavaScript documents for us.");
  await neo();
  await promptUser("I can't make heads or tails of them.");
  renderPuzzle(1);
  await morpheus();
  await promptUser("Where should we look first?");
  await promptUser("\x1B[1;32mWhich line of code will execute first?\x1B[0m", true);
};
