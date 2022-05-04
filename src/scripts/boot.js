import { wait, write, promptUser, TIME } from "../utils/index.js";
import { terminal } from "../main.js";

export const boot = async () => {
    write("\x1B[3;32mguest@terminal42~$\x1B[0m ");
    await wait(TIME.LONG);
    await promptUser("\x1B[1;37mzion.exe\x1B[0m --init");
    write("Initializing startup sequence ");
    await promptUser(". . . . . . . . . . . . . . . . . .");
    write("\x1B[1;31mACCESS DENIED.\x1B[0m\r\n");
    await wait(TIME.MED);
    write("User unable to access \x1B[1;37mzion.exe\x1B[0m\r\n");
    await wait(TIME.MED);
    write("Contacting \x1B[1;31mSystem Administrator Smith ");
    await promptUser(". . . . . . . . \x1B[0m");
    write("\x1B[3;32mguest@terminal42~$\x1B[0m ");
    write("^C\r\n");
    write("Recieved SIGTERM from PID1 (systemd).\r\n");
    write("Process terminated.\r\n");
    write("\x1B[3;32mguest@terminal42~$\x1B[0m ");
    await wait(TIME.LONG);
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
    terminal.clear();
    await wait(TIME.MED);
    write("Boot Sequence Initiatilized\r\n");
    await wait(TIME.MED);
    write("Mounting \x1B[1;37mzion.exe\x1B[0m ");
    await promptUser(". . . . . . . . . . . . . . . . . .");
    await (async () => {
        return await new Promise(async (resolve) => {
            for (let i = 0; i < 2000; i++) {
                write(String.fromCharCode(Math.floor(Math.random() * 65535)));
                await wait(1);
            }
            resolve();
        });
    })();
    write("\r\n\r\n");
    await wait(100);
    terminal.clear();
    await wait(TIME.LONG);
    write("Initialization complete.");
    write("\r\n\r\n");
    await wait(TIME.LONG);
    terminal.clear();
};
