import { newline, buffering, input, evaluateInput } from "./index.js";
// let { Terminal } = await import(/* webpackPreload: true */ "xterm");

// Handle state change for username
let inZion;

export async function getTerminal() {
  const { Terminal } = await import("xterm");

  // Instantiate XTerm
  const terminal = new Terminal({
    cursorBlink: true,
    fontFamily: "Fira Code, courier-new, courier, monospace",
    theme: { foreground: "green" },
    cols: 81,
  });

  // Handle user input
  let currentLine = "";
  // Guard against deleting CLI prompt
  let col = 0;

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

  return terminal;
}

export { inZion };
