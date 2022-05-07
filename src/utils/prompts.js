import {
    newline,
    awaitInput,
    user,
    setBuffering,
    write,
    inZion,
    TIME,
} from "./index.js";

let animationSpeed = 25;

let interval;
let char = 0;
let isMessageOver;

/** Helper function to simulate typewriter-style user prompts */
export const animatePrompt = async (message, allowInput) => {
    if (message[char]) {
        write(message[char]);
    }

    if (char === message.length - 1) {
        setTimeout(() => {
            allowInput ? (inZion ? user() : awaitInput()) : newline();
            char = 0;
            isMessageOver = true;
        }, TIME.MED);
    }

    char++;
};

/** Display prompts to user.
 *
 * Executes asynchronously, in order to allow animations to resolve sequentially */
export const promptUser = async (message, allowInput) => {
    setBuffering(true);
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
