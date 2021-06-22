import { newline, morpheus, wait, write, buffering, input } from "./utils/helpers.js";
import { promptUser } from "./utils/prompts.js";
import { boot } from "./scripts/index.js";
import {
  choiceForInit,
  choiceForWelcome,
  choiceForRound1,
  choiceForRound2,
  choiceForRound3,
  choiceForRound4,
  choiceForRound5,
  choiceForRound6,
  choiceForRound7,
  choiceForRound8,
  choiceForRound9,
  choiceForRound10,
  choiceForRound11,
  choiceForRound12,
  choiceForRound13,
  choiceForRound14,
} from "./scripts/choices.js";

// Instantiate XTerm
export const terminal = new Terminal({
  cursorBlink: true,
  fontFamily: "Fira Code, courier-new, courier, monospace",
  theme: { foreground: "green" },
  // rows: 80,
});

// Handle user input
let currentLine = "";
// Guard against deleting CLI prompt
let col = 0;
// Handle state change for username
let inZion;

terminal.onKey(async ({ key, domEvent: event }) => {
  if (!buffering) {
    if (event.code === "Backspace") {
      if (col > 0) {
        input("\b \b");
        col--;
        currentLine = currentLine.slice(0, -1);
        return;
      }
    } else if (event.code === "Enter") {
      newline();
      col = 0;
      if (currentLine) {
        await evaluateInput(currentLine.trim());
        currentLine = "";
      }
      return;
    } else {
      currentLine += key.toLowerCase();
      input(key);
      col++;
    }
  }
});

// Create terminal

const init = async () => {
  terminal.open(document.getElementById("terminal"));
  // await boot();
  await promptUser("Welcome to \x1B[1;32mThe Matrix\x1B[0m");
  await wait(2000);
  terminal.focus();
  inZion = true;
  promptNum = -1;
  await morpheus();
  await promptUser("Welcome... to the real world.");
  wait(1000);
  await morpheus();
  await promptUser("Would you like to know what you're doing here? (y/n)", true);
};

// Game prompts
let promptNum;
export const evaluateInput = async (input) => {
  return await new Promise(async (resolve) => {
    switch (promptNum) {
      case -1:
        await choiceForInit(input);
        break;
      case 0:
        await choiceForWelcome(input);
        break;
      case 1:
        await choiceForRound1(input);
        break;
      case 2:
        await choiceForRound2(input);
        break;
      case 3:
        await choiceForRound3(input);
        break;
      case 4:
        await choiceForRound4(input);
        break;
      case 5:
        await choiceForRound5(input);
        break;
      case 6:
        await choiceForRound6(input);
        break;
      case 7:
        await choiceForRound7(input);
        break;
      case 8:
        await choiceForRound8(input);
        break;
      case 9:
        await choiceForRound9(input);
        break;
      case 10:
        await choiceForRound10(input);
        break;
      case 11:
        await choiceForRound11(input);
        break;
      case 12:
        await choiceForRound12(input);
        break;
      case 13:
        await choiceForRound13(input);
        break;
      case 14:
        await choiceForRound14(input);
        break;
      default:
        write("There's been a glitch in The Matrix.\r\n");
    }
    resolve("Input Evaluated");
  });
};

init();

export { inZion, promptNum };
export const nextPrompt = () => {
  promptNum++;
};
