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

export const tutorialRound5 = async () => {
  await neo();
  await promptUser("So they've set up some kind of training exercises?");
  await morpheus();
  await promptUser("We need to know more.");
  await neo();
  await promptUser("How much training are we talking about?");
  await promptUser("\x1B[1;32mWhat is the length of the trainingRoutines array?\x1B[0m", true);
};

export const tutorialRound6 = async () => {
  await neo();
  await promptUser("That's a lot of training");
  await morpheus();
  await promptUser("Hold on, Neo. There are still more answers to seek.");
  await morpheus();
  await promptUser("When does this routine start?");
  await promptUser("\x1B[1;32mWhat is the next line of code that executes?\x1B[0m", true);
};
