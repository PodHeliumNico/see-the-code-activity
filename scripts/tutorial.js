import { morpheus, neo, wait } from "../utils/helpers.js";
import { promptUser } from "../utils/prompts.js";
import { renderPuzzle } from "./puzzles.js";

export const tutorialRound1 = async () => {
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
  await promptUser("That's a lot of training.");
  await morpheus();
  await promptUser("Hold on, Neo. There are still more answers to seek.");
  await morpheus();
  await promptUser("When does this routine start?");
  await promptUser("\x1B[1;32mWhat is the next line of code that executes?\x1B[0m", true);
};

export const tutorialRound7 = async () => {
  await neo();
  await promptUser("All the way down there?");
  await morpheus();
  await promptUser("It seems that we have much to learn from this One about the ways of JavaScript.");
  await morpheus();
  await promptUser("What can you tell us about the training program?");
  await promptUser("\x1B[1;32mWhat is the next line of code that executes?\x1B[0m", true);
};

export const tutorialRound8 = async () => {
  await morpheus();
  await promptUser("I see. After the function is called, we go back to its definition.");
  await promptUser("\x1B[1;32mWhat is the next line of code that executes?\x1B[0m", true);
};

export const tutorialRound9 = async () => {
  await neo();
  await promptUser("That gives Agent Smith the new property, skills? Terrifying.");
  await promptUser("\x1B[1;32mWhat is the next line of code that executes?\x1B[0m", true);
};

export const tutorialRound10 = async () => {
  await morpheus();
  await promptUser('A for-loop, you say? What happens during the first instance of this "loop"?');
  await promptUser("\x1B[1;32mIf a skill is added to the agent.skills array, enter its name without quotes.\x1B[0m");
  await promptUser('\x1B[1;32mIf no skill is added, enter "nothing" without quotes.\x1B[0m', true);
};

export const tutorialRound11 = async () => {
  await neo();
  await promptUser("That's a problem.");
  await neo();
  await promptUser("I'm supposed to be the one around here who talks about kung-fu.");
  await morpheus();
  await promptUser("Still, there must be a limit to how effective this training routine can be.");
  await promptUser("\x1B[1;32mWhat is the maximum number of times that this loop could run?\x1B[0m", true);
};

export const tutorialRound12 = async () => {
  await morpheus();
  await promptUser("Of course. There are only 7 routines in the trainingRoutines array.");
  await morpheus();
  await promptUser("But if Agent Smith learns 4 skills, the training loop will stop early.");
  await neo();
  await promptUser("Just how strong has he become?");
  await promptUser("\x1B[1;32mWhat is the length of the agent.skills array at the end of the loop?\x1B[0m", true);
};

export const tutorialRound13 = async () => {
  await neo();
  await promptUser("Where did his training end?");
  await promptUser("\x1B[1;32mWhat is the name of the last skill that was added to the agent.skills array?\x1B[0m", true);
};

export const tutorialRound14 = async () => {
  await morpheus();
  await promptUser("Is there anything that we're missing");
  await promptUser("\x1B[1;32mDoes another line of code execute after exiting the train function? (y/n)\x1B[0m", true);
};

export const tutorialRound15 = async () => {
  await promptUser("\x1B[1;32mREACHED END OF CURRENT SECTION\x1B[0m", true);
};
