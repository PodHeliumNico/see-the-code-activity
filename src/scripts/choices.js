import { morpheus, neo, write, promptUser, nextPrompt } from "../utils/index.js";
import {
  welcomeUser,
  goodbye,
  tutorialRound1,
  tutorialRound2,
  tutorialRound3,
  tutorialRound4,
  tutorialRound5,
  tutorialRound6,
  tutorialRound7,
  tutorialRound8,
  tutorialRound9,
  tutorialRound10,
  tutorialRound11,
  tutorialRound12,
  tutorialRound13,
  tutorialRound14,
  tutorialRound15,
  tutorialRound16,
  tutorialRound17,
  tutorialRound18,
  tutorialRound19,
  tutorialRound20,
  tutorialRound21,
  tutorialRound22,
  tutorialRound23,
  tutorialRound24,
  tutorialRound25,
} from "./index.js";

export const choiceForInit = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "y") {
      await welcomeUser();
      nextPrompt();
    } else if (input === "n") {
      await goodbye();
    } else {
      write("There's been a glitch in The Matrix.\r\n");
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
      write("There's been a glitch in The Matrix.\r\n");
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
      write("There's been a glitch in The Matrix.\r\n");
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
      write("There's been a glitch in The Matrix.\r\n");
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
      write("There's been a glitch in The Matrix.\r\n");
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
      write("There's been a glitch in The Matrix.\r\n");
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
      write("There's been a glitch in The Matrix.\r\n");
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
      write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhat line executes the train function?\x1B[0m", true);
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
      write("There's been a glitch in The Matrix.\r\n");
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
      write("There's been a glitch in The Matrix.\r\n");
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
      write("There's been a glitch in The Matrix.\r\n");
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
      write("There's been a glitch in The Matrix.\r\n");
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
      write("There's been a glitch in The Matrix.\r\n");
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
      write("There's been a glitch in The Matrix.\r\n");
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
      write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhat is the name of the last skill that was added to the agent.skills array?\x1B[0m", true);
    }
    resolve();
  });
};

export const choiceForRound14 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "n") {
      await tutorialRound15();
      nextPrompt();
    } else {
      write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mDoes another line of code execute after exiting the train function? (y/n)\x1B[0m", true);
    }
    resolve();
  });
};

export const choiceForRound15 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "1") {
      await tutorialRound16();
      nextPrompt();
    } else {
      write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhich line of code will execute first?\x1B[0m", true);
    }
    resolve();
  });
};

export const choiceForRound16 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "10") {
      await tutorialRound17();
      nextPrompt();
    } else {
      write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhich line of code will execute next?\x1B[0m", true);
    }
    resolve();
  });
};

export const choiceForRound17 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "17") {
      await tutorialRound18();
      nextPrompt();
    } else {
      write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhich line of code will execute next?\x1B[0m", true);
    }
    resolve();
  });
};

export const choiceForRound18 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "29") {
      await tutorialRound19();
      nextPrompt();
    } else {
      write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhat line will execute the controlHumans function?\x1B[0m", true);
    }
    resolve();
  });
};

export const choiceForRound19 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "y") {
      await tutorialRound20();
      nextPrompt();
    } else {
      write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWill the while-loop run? (y/n)\x1B[0m", true);
    }
    resolve();
  });
};

export const choiceForRound20 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "19") {
      await tutorialRound21();
      nextPrompt();
    } else {
      write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhich line of code will execute next?\x1B[0m", true);
    }
    resolve();
  });
};

export const choiceForRound21 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "n") {
      await tutorialRound22();
      nextPrompt();
    } else {
      write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mDoes the variable isZionFound represent the searchForZion function? (y/n)\x1B[0m", true);
    }
    resolve();
  });
};

export const choiceForRound22 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "1") {
      await tutorialRound23();
      nextPrompt();
    } else {
      write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhich line of code will execute next?\x1B[0m", true);
    }
    resolve();
  });
};

export const choiceForRound23 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "19") {
      await tutorialRound24();
      nextPrompt();
    } else {
      write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhat line does the return statement return to?\x1B[0m", true);
    }
    resolve();
  });
};

export const choiceForRound24 = async (input) => {
  return await new Promise(async (resolve) => {
    if (input === "20") {
      await tutorialRound25();
      nextPrompt();
    } else {
      write("There's been a glitch in The Matrix.\r\n");
      await promptUser("\x1B[1;32mWhat line of code have the Machines written incorrectly?\x1B[0m", true);
    }
    resolve();
  });
};
