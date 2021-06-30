import { newline, awaitInput, user, setBuffering, write, inZion } from "./index.js";

// Helper function to simulate typewriter-style user prompts
let interval;
let char = 0;
let isMessageOver;

export const animatePrompt = async (message, allowInput) => {
  if (message[char]) {
    write(message[char]);
  }

  if (char === message.length - 1) {
    setTimeout(() => {
      allowInput ? (inZion ? user() : awaitInput()) : newline();
      char = 0;
      isMessageOver = true;
    }, 750);
  }

  char++;
};

// Display prompts to user
// Written with async / await in order to allow animations to resolve sequentially
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
    }, 50);
  });
};
