import { morpheus, neo } from "../utils/helpers.js";
import { promptUser } from "../utils/prompts.js";
import { promptNum, nextPrompt, terminal } from "../main.js";
import { welcomeUser, goodbye, tutorialRound1, tutorialRound2, tutorialRound3, tutorialRound4, tutorialRound5, tutorialRound6 } from "./index.js";
import {
  tutorialRound10,
  tutorialRound11,
  tutorialRound12,
  tutorialRound13,
  tutorialRound14,
  tutorialRound15,
  tutorialRound7,
  tutorialRound8,
  tutorialRound9,
} from "./tutorial.js";

export const choiceForInit = async (input) => {
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

export const choiceForWelcome = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "y") {
      await tutorialRound1();
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

export const choiceForRound1 = async (input) => {
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

export const choiceForRound2 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "4") {
      await tutorialRound3();
      nextPrompt();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhich line of code will execute next?\x1B[0m", true);
    }
    resolve();
  });
};

export const choiceForRound3 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "10") {
      await tutorialRound4();
      nextPrompt();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhich line of code will execute last?\x1B[0m", true);
    }
    resolve();
  });
};

export const choiceForRound4 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "1") {
      await tutorialRound5();
      nextPrompt();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhich line of code will execute first?\x1B[0m", true);
    }
    resolve();
  });
};

export const choiceForRound5 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "7") {
      await tutorialRound6();
      nextPrompt();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhat is the length of the trainingRoutines array?\x1B[0m", true);
    }
    resolve();
  });
};

export const choiceForRound6 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "42") {
      await tutorialRound7();
      nextPrompt();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhat is the next line of code that executes?\x1B[0m", true);
    }
    resolve();
  });
};
export const choiceForRound7 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "31") {
      await tutorialRound8();
      nextPrompt();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhat is the next line of code that executes?\x1B[0m", true);
    }
    resolve();
  });
};
export const choiceForRound8 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "32") {
      await tutorialRound9();
      nextPrompt();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhat is the next line of code that executes?\x1B[0m", true);
    }
    resolve();
  });
};
export const choiceForRound9 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "33") {
      await tutorialRound10();
      nextPrompt();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhat is the next line of code that executes?\x1B[0m", true);
    }
    resolve();
  });
};

export const choiceForRound10 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "martial arts") {
      await tutorialRound11();
      nextPrompt();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mIf a skill is added to the agent.skills array, enter its name without quotes.\x1B[0m");
      await promptUser('\x1B[1;32mIf no skill is added, enter "nothing" without quotes.\x1B[0m', true);
    }
    resolve();
  });
};

export const choiceForRound11 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "7") {
      await tutorialRound12();
      nextPrompt();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhat is the maximum number of times that this loop could run?\x1B[0m", true);
    }
    resolve();
  });
};

export const choiceForRound12 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "4") {
      await tutorialRound13();
      nextPrompt();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhat is the length of the agent.skills array at the end of the loop?\x1B[0m", true);
    }
    resolve();
  });
};

export const choiceForRound13 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "strength") {
      await tutorialRound14();
      nextPrompt();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhat is the name of the last skill that was added to the agent.skills array?\x1B[0m", true);
    }
    resolve();
  });
};

export const choiceForRound14 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "n") {
      await tutorialRound15();
      // nextPrompt();
    } else {
      terminal.write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mREACHED END OF CURRENT SECTION\x1B[0m", true);
    }
    resolve();
  });
};
