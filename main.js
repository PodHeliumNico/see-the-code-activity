// Instantiate XTerm
const terminal = new Terminal({
  cursorBlink: true,
  fontFamily: "Fira Code, courier-new, courier, monospace",
  theme: { foreground: "green" },
});

// Helper function to insert newlines
const newline = () => {
  terminal.write("\r\n$ ");
};

const redirect = () => {
  window.location = "https://kenzie.academy";
};

// Helper function to simulate typewriter-style user prompts
let interval;
let char = 0;
let next;

const animatePrompt = async (message) => {
  next = false;
  if (message[char]) {
    terminal.write(message[char]);
  }

  if (char === message.length - 1) {
    setTimeout(() => {
      newline();
      char = 0;
      next = true;
    }, 750);
  }

  char++;
};

// Display prompts to user
// Written with async / await in order to allow animations to resolve sequentially
const promptUser = async (message) => {
  return await new Promise(async (resolve) => {
    interval = setInterval(() => {
      if (next) {
        resolve();
        clearInterval(interval);
        next = false;
      } else {
        animatePrompt(message);
      }
    }, 50);
  });
};

// Handle user input
let currentLine = "";
// Guard against deleting CLI prompt
let col = 0;

terminal.onKey(async ({ key, domEvent: event }) => {
  if (event.code === "Backspace" && col > 0) {
    terminal.write("\b \b");
    col--;
    return;
  } else if (event.code === "Enter") {
    newline();
    col++;
    let test = await evaluateInput(currentLine.trim());
    return;
  }
  currentLine += key.toLowerCase();
  terminal.write(key);
  col++;
});

// Create terminal

const init = async () => {
  terminal.open(document.getElementById("terminal"));
  await promptUser("Welcome to \x1B[1;32mThe Matrix\x1B[0m $ ");
  terminal.focus();

  promptNum = 0;
  await promptUser("Would you like to know what you're doing here? (y/n)");
};

// Game prompts
let promptNum;
const evaluateInput = async (input) => {
  return new Promise(async (resolve) => {
    switch (promptNum) {
      case 0:
        if (input === "y") {
          await promptUser("Excellent...");
          promptNum++;
          break;
        } else if (input === "n") {
          await promptUser("Most unfortunate.");
          await promptUser("Goodbye.");
          redirect();
        } else {
          break;
        }
      default:
        await promptUser("There's a glitch in The Matrix.");
    }
    resolve("Input Evaluated");
  });
};

init();
