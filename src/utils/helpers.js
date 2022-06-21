import { terminal } from "../main.js";
import { promptUser } from "../utils/index.js";

let buffering = true;

/** Sets the state that represents terminal animation in progress */
export const setBuffering = (bool) => {
    buffering = bool;
};

/** Writes an animated message to the terimal's STDOUT */
export const write = (message) => {
    setBuffering(true);
    terminal.write(message);
};

/** Writes a user's input to the terminal's STDIN */
export const input = (message) => {
    terminal.write(message);
};

/** Inserts newlines in terminal animations */
export const newline = () => {
    setBuffering(true);
    terminal.write("\r\n");
};

/** Display the user's pre-zion username */
export const awaitInput = () => {
    terminal.write("\r\n\x1B[3;36mnewuser@terminal42~$\x1B[0m ");
    setBuffering(false);
};

/** Redirects users to Kenzie Academy Homepage */
export const redirect = () => {
    window.location = "https://kenzie.academy";
};

/** Display Morpheus's username in animations */
export const morpheus = async () => {
    setBuffering(true);
    return await new Promise(async (resolve) => {
        terminal.write("\x1B[3;35mmorpheus@zion~$\x1B[0m ");
        await wait(TIME.MED);
        resolve();
    });
};

/** Display Neo's username in animations */
export const neo = async () => {
    setBuffering(true);
    return await new Promise(async (resolve) => {
        terminal.write("\x1B[3;37mneo@zion~$\x1B[0m ");
        await wait(TIME.MED);
        resolve();
    });
};

/** Display the user's username, end animation, and await user input */
export const user = () => {
    terminal.write("\r\n\x1B[3;36mnewuser@zion~$\x1B[0m ");
    terminal.focus();
    setBuffering(false);
};

/** Delays animation by an amount of time in ms */
export const wait = async (ms) => {
    setBuffering(true);
    return await new Promise(async (resolve) => setTimeout(resolve, ms));
};

export { buffering };

export const TIME = {
    LONG: 1000,
    MED: 500,
    SHORT: 250,
    MIN: 125,
};

export const goodbye = async () => {
    await promptUser("Most unfortunate.");
    await promptUser("Goodbye.");
    redirect();
};
