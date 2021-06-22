import { terminal } from "../main.js";

let buffering = true;
export const setBuffering = (bool) => {
  buffering = bool;
};

export const write = (message) => {
  buffering = true;
  terminal.write(message);
};

export const input = (message) => {
  terminal.write(message);
};

// Helper functions to insert newlines
export const newline = () => {
  buffering = true;
  terminal.write("\r\n");
};

export const awaitInput = () => {
  terminal.write("\r\n\x1B[3;36mnewuser@terminal42~$\x1B[0m ");
  buffering = false;
};

export const redirect = () => {
  window.location = "https://kenzie.academy";
};

export const morpheus = async () => {
  buffering = true;
  return await new Promise(async (resolve) => {
    terminal.write("\x1B[3;35mmorpheus@zion~$\x1B[0m ");
    await wait(750);
    resolve();
  });
};

export const neo = async () => {
  buffering = true;
  return await new Promise(async (resolve) => {
    terminal.write("\x1B[3;37mneo@zion~$\x1B[0m ");
    await wait(750);
    resolve();
  });
};

export const user = () => {
  terminal.write("\r\n\x1B[3;36mnewuser@zion~$\x1B[0m ");
  terminal.focus();
  buffering = false;
};

export const wait = async (ms) => {
  buffering = true;
  return await new Promise(async (resolve) => setTimeout(resolve, ms));
};

export { buffering };
