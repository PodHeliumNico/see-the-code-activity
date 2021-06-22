import { morpheus, neo } from "../utils/helpers.js";
import { promptUser } from "../utils/prompts.js";
import { promptNum, nextPrompt, terminal } from "../main.js";
import { welcomeUser, goodbye, tutorial, tutorialRound2, tutorialRound3, tutorialRound4, tutorialRound5, tutorialRound6 } from "./index.js";

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
    if (input === "3") {
      await tutorialRound2();
      nextPrompt();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhich line of code will be executed first?\x1B[0m", true);
    }
    resolve();
  });
};

export const choice3 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "4") {
      await tutorialRound3();
      nextPrompt();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhich line of code will be executed next?\x1B[0m", true);
    }
    resolve();
  });
};

export const choice4 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "10") {
      await tutorialRound4();
      nextPrompt();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhich line of code will be executed next?\x1B[0m", true);
    }
    resolve();
  });
};

export const choice5 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "1") {
      await tutorialRound5();
      nextPrompt();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhich line of code will be executed next?\x1B[0m", true);
    }
    resolve();
  });
};

export const choice6 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "7") {
      await tutorialRound6();
      nextPrompt();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhich line of code will be executed next?\x1B[0m", true);
    }
    resolve();
  });
};
