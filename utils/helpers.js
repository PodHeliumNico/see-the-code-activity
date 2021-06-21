import { terminal } from "../main.js";

// Helper functions to insert newlines
export const newline = () => {
  terminal.write("\r\n");
};

export const awaitInput = () => {
  terminal.write("\r\n\x1B[3;32mnewuser@terminal42~$\x1B[0m ");
};

export const redirect = () => {
  window.location = "https://kenzie.academy";
};

export const morpheus = async () => {
  return await new Promise(async (resolve) => {
    terminal.write("\x1B[3;37mmorpheus@zion~$\x1B[0m ");
    await wait(1000);
    resolve();
  });
};

export const user = () => {
  terminal.write("\r\n\x1B[3;32mnewuser@zion~$\x1B[0m ");
  terminal.focus();
};

export const wait = async (ms) => {
  return await new Promise(async (resolve) => setTimeout(resolve, ms));
};
