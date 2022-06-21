import { wait, write, promptUser, TIME, toggleInZion } from "../utils/index.js";
import { terminal } from "../main.js";

const regexpEmojiPresentation =
    /(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu;

/** Creates and writes a "Matrix-style" wall of text */
const buildTextWall = async () => {
    return await new Promise(async (resolve) => {
        for (let i = 0; i < 2000; i++) {
            let char = String.fromCharCode(Math.floor(Math.random() * 65535));

            // Prevent emoji from being randomly selected
            while (regexpEmojiPresentation.test(char)) {
                char = String.fromCharCode(Math.floor(Math.random() * 65535));
            }
            write(char);
            await wait(1);
        }
        resolve();
    });
};

/** Displays initial terminal animation sequence */
export const boot = async () => {
    // "Guest tries to boot zion.exe"
    write("\x1B[3;32mguest@terminal42~$\x1B[0m ");
    await wait(TIME.LONG);
    await promptUser("\x1B[1;37mzion.exe\x1B[0m --init");
    write("Initializing startup sequence ");
    await promptUser(". . . . . . . . . . . . . . . . . .");
    write("\x1B[1;31mACCESS DENIED.\x1B[0m\r\n");
    await wait(TIME.MED);
    write("User unable to access \x1B[1;37mzion.exe\x1B[0m\r\n");
    await wait(TIME.MED);

    // "Guest disables security process"
    write("Contacting \x1B[1;31mSystem Administrator Smith ");
    await promptUser(". . . . . . . . \x1B[0m");
    write("\x1B[3;32mguest@terminal42~$\x1B[0m ");
    write("^C\r\n");
    write("Recieved SIGTERM from PID1 (systemd).\r\n");
    write("Process terminated.\r\n");
    write("\x1B[3;32mguest@terminal42~$\x1B[0m ");
    await wait(TIME.LONG);

    // "Guest launches zion.exe with root credentials"
    await promptUser("sudo \x1B[1;37mzion.exe\x1B[0m --init -f");
    await write("Initializing startup sequence ");
    await promptUser(". . . . . . . . . . . . . . . . . .");
    write("\x1B[1;37mPassword Required for root access.\x1B[0m\r\n");
    await wait(TIME.MED);
    write("\x1B[1;37mPASSWORD:\x1B[0m ");
    await wait(TIME.LONG);
    await promptUser("*******");
    write("Validating credentials ");
    await promptUser(". . . . . . . . . . . . . . . . . .");
    write("\x1B[1;32mACCESS GRANTED.\x1B[0m\r\n");

    // "Application initialization begins"
    await wait(TIME.MED);
    write("Initializing \x1B[1;37mzion.exe\x1B[0m\r\n");
    await wait(TIME.MED);
    write("Preparing Boot Sequence ");
    await promptUser(". . . . . . . . . . . . . . . . . .");
    write(
        "Starting process with command `bundle exec Wonderland -C config/redpill.js\r\n"
    );
    await wait(TIME.MED);
    write("[4] [REDACTED] starting in cluser mode ");
    await promptUser(". . . . .");
    write(
        "[4] * Version 03.31.99 (ECMASCRIPT 3.0.1 [ES3]), codename: Morpheus\r\n"
    );
    await wait(TIME.MED);
    write("[4] * Min threads: 2, max threads: 4\r\n");
    await wait(TIME.MIN);
    write("[4] * Environment: staging\r\n");
    await wait(TIME.SHORT);
    write("[4] * Process workers: 2\r\n");
    await wait(TIME.MIN);
    write("[4] * Preloading application\r\n");
    await wait(TIME.SHORT);
    write("[4] * Listenting on tcp://0.0.0.0:51751\r\n");
    await wait(TIME.MIN);
    write("[4] Use Ctrl-C to stop\r\n");
    await wait(TIME.MED);
    write("[4] - Worker 0 (pid: 9) booted, phase: 0\r\n");
    await wait(TIME.MIN);
    write("[4] - Worker 1 (pid: 13) booted, phase: 0\r\n");
    await wait(TIME.MIN);
    write("State changed from starting to up\r\n");
    await wait(TIME.MED);
    write("System Reboot Required.\r\n");
    await wait(TIME.MED);
    write("Restarting ");
    await promptUser(". . . . . . . . . . . . . . . . . .");
    await wait(TIME.LONG);

    // "Terminal reboots and mounts zion.exe"
    terminal.clear();
    await wait(TIME.MED);
    write("Boot Sequence Initiatilized\r\n");
    await wait(TIME.MED);
    write("Mounting \x1B[1;37mzion.exe\x1B[0m ");
    await promptUser(". . . . . . . . . . . . . . . . . .");
    await buildTextWall();
    write("\r\n\r\n");

    // "Launch zion.exe"
    await wait(100);
    terminal.clear();
    await wait(TIME.LONG);
    write("Initialization complete.");
    write("\r\n\r\n");
    await wait(TIME.LONG);
    terminal.clear();

    // "Start interactive scenes"
    await promptUser("Welcome to \x1B[1;32mThe Matrix\x1B[0m");
    await wait(TIME.LONG);
    terminal.focus();
    toggleInZion();
};
