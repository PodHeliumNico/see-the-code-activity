import { newline, morpheus, wait, neo } from "./utils/helpers.js";
import { promptUser } from "./utils/prompts.js";
import { boot } from "./scripts/index.js";
import { choice0, choice1, choice2, choice3, choice4 } from "./scripts/choices.js";

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
  if (event.code === "Backspace" && col > 0) {
    terminal.write("\b \b");
    col--;
    currentLine = currentLine.slice(0, -1);
    return;
  } else if (event.code === "Enter") {
    newline();
    col = 0;
    if (currentLine) {
      await evaluateInput(currentLine.trim());
      currentLine = "";
    }
    return;
  }
  currentLine += key.toLowerCase();
  terminal.write(key);
  col++;
});

// Create terminal

const init = async () => {
  terminal.open(document.getElementById("terminal"));
  // await boot();
  await promptUser("Welcome to \x1B[1;32mThe Matrix\x1B[0m");
  await wait(2000);
  terminal.focus();
  inZion = true;
  promptNum = 0;
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
      case 0:
        await choice0(input);
        break;
      case 1:
        await choice1(input);
        break;
      case 2:
        await choice2(input);
        break;
      case 3:
        await choice3(input);
        break;
      case 4:
        await choice4(input);
        break;
      default:
        terminal.write("There's been a glitch in The Matrix.\r\n");
    }
    resolve("Input Evaluated");
  });
};

init();

export { inZion, promptNum };
export const nextPrompt = () => {
  promptNum++;
};
