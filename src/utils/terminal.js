import { newline, buffering, input, handleInput } from "./index.js";

// Handle state change for username
let inZion;

/** Toggle inZion state change to control username display in terminal before and after mounting zion.exe */
export const toggleInZion = () => {
    inZion = !inZion;
};

export const COL_SIZE = 81;

/** Returns a new Terminal instance */
export async function getTerminal() {
    const { Terminal } = await import("xterm");

    // Instantiate XTerm
    const terminal = new Terminal({
        cursorBlink: true,
        fontFamily: "Fira Code, courier-new, courier, monospace",
        theme: { foreground: "green" },
        cols: COL_SIZE,
    });

    let currentLine = "";
    let col = 0;

    // Create event listner to handle user input
    terminal.onKey(async ({ key, domEvent: event }) => {
        // Prevent user input during animation
        if (!buffering) {
            // Guard against deleting CLI prompt
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
                if (currentLine || currentLine === "") {
                    await handleInput(currentLine.trim());
                    currentLine = "";
                }
                return;
            } else if (event.code === "Tab") {
                terminal.blur();
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
