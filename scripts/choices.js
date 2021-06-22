import { morpheus, neo } from "../utils/helpers.js";
import { promptUser } from "../utils/prompts.js";
import { promptNum, nextPrompt, terminal } from "../main.js";
import { welcomeUser, goodbye, tutorial } from "./index.js";

export const choice0 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "y") {
      await welcomeUser();
      nextPrompt();
    } else if (input === "n") {
      await goodbye();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await morpheus();
      await promptUser("Would you like to know what you're doing here? (y/n)", true);
    }
    resolve();
  });
};

export const choice1 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "y") {
      await tutorial();
      nextPrompt();
    } else if (input === "n") {
      await morpheus();
      await promptUser("Please reconsider.");
      await neo();
      await promptUser("Please don't make me try to kung-fu a computer.");
      await morpheus();
      await promptUser("Will you help us? (y/n)", true);
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await neo();
      await promptUser("Will you help us? (y/n)", true);
    }
    resolve();
  });
};

export const choice2 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "2") {
      await neo();
      await promptUser("Whoa.");
      nextPrompt();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhich line of code will be executed first?\x1B[0m", true);
    }
    resolve();
  });
};
