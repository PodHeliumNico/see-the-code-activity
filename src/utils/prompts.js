import { terminal } from "../main.js";
import {
    newline,
    awaitInput,
    user,
    setBuffering,
    write,
    inZion,
    TIME,
} from "./index.js";
import { COL_SIZE } from "./terminal.js";

let animationSpeed = 25;

let interval;
let charIndex = 0;
let isMessageOver;

/** Helper function to simulate typewriter-style user prompts */
export const animatePrompt = async (message, allowInput) => {
    if (message[charIndex]) {
        // compare size of remaining characters in word to column size to enable word-wrap
        let endIndexOfCurrentWord =
            message.indexOf(" ", charIndex) > 0
                ? terminal.buffer.active.cursorX +
                  message.indexOf(" ", charIndex) -
                  charIndex
                : terminal.buffer.active.cursorX + message.length - charIndex;

        if (endIndexOfCurrentWord > COL_SIZE) {
            write("\r\n");
        }
        write(message[charIndex]);
    }

    if (charIndex === message.length - 1) {
        setTimeout(() => {
            allowInput ? (inZion ? user() : awaitInput()) : newline();
            charIndex = 0;
            isMessageOver = true;
        }, TIME.MED);
    }

    charIndex++;
};

/** Display prompts to user.
 *
 * Executes asynchronously, in order to allow animations to resolve sequentially */
export const promptUser = async (message, allowInput = false) => {
    setBuffering(true);

    if (allowInput && terminal.buffer.active.cursorX === 0) {
        newline();
    }
    return await new Promise(async (resolve) => {
        isMessageOver = false;

        interval = setInterval(() => {
            if (isMessageOver) {
                resolve();
                clearInterval(interval);
                isMessageOver = false;
            } else {
                animatePrompt(message, allowInput);
            }
        }, animationSpeed);
    });
};
