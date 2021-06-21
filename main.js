// Instantiate XTerm
const terminal = new Terminal({
  cursorBlink: true,
  fontFamily: "Fira Code, courier-new, courier, monospace",
  theme: { foreground: "green" },
  // rows: 80,
});

// Helper functions to insert newlines
const newline = () => {
  terminal.write("\r\n");
};

const awaitInput = () => {
  terminal.write("\r\n\x1B[3;32mnewuser@terminal42~$\x1B[0m ");
};

const redirect = () => {
  window.location = "https://kenzie.academy";
};

// Helper function to simulate typewriter-style user prompts
let interval;
let char = 0;
let isMessageOver;

const animatePrompt = async (message, allowInput) => {
  isMessageOver = false;
  if (message[char]) {
    terminal.write(message[char]);
  }

  if (char === message.length - 1) {
    setTimeout(() => {
      allowInput ? awaitInput() : newline();
      char = 0;
      isMessageOver = true;
    }, 750);
  }

  char++;
};

// Display prompts to user
// Written with async / await in order to allow animations to resolve sequentially
const promptUser = async (message, allowInput) => {
  return await new Promise(async (resolve) => {
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

// Helper function to delay next prompt
const wait = async (ms) => {
  return await new Promise(async (resolve) => setTimeout(resolve, ms));
};

// Handle user input
let currentLine = "";
// Guard against deleting CLI prompt
let col = 0;

terminal.onKey(async ({ key, domEvent: event }) => {
  if (event.code === "Backspace" && col > 0) {
    terminal.write("\b \b");
    col--;
    return;
  } else if (event.code === "Enter") {
    newline();
    col = 0;
    if (currentLine) {
      await evaluateInput(currentLine.trim());
      currentLine = "";
    }
    return;
  }
  currentLine += key.toLowerCase();
  terminal.write(key);
  col++;
});

// Create terminal

const init = async () => {
  terminal.open(document.getElementById("terminal"));
  terminal.write("\x1B[3;32mguest@terminal42~$\x1B[0m ");
  await wait(2000);
  await promptUser("\x1B[1;32mzion.exe\x1B[0m --init");
  terminal.write("Initializing startup sequence ");
  await promptUser(". . . . . . . . . . . . . . . . . .");
  terminal.write("\x1B[1;31mPERMISSION DENIED\x1B[0m\r\n");
  await wait(1000);
  terminal.write("User unable to access \x1B[1;32mzion.exe\x1B[0m\r\n");
  await wait(1000);
  terminal.write("Contacting \x1B[1;31mSystem Administrator Smith ");
  await promptUser(". . . . . . . . \x1B[0m");
  terminal.write("\x1B[3;32mguest@terminal42~$\x1B[0m ");
  terminal.write("^C\r\n");
  terminal.write("Recieved SIGTERM from PID1 (systemd).\r\n");
  terminal.write("Process terminated.\r\n");
  terminal.write("\x1B[3;32mguest@terminal42~$\x1B[0m ");
  await wait(4000);
  await promptUser("sudo \x1B[1;32mzion.exe\x1B[0m --init -f");
  await terminal.write("Initializing startup sequence ");
  await promptUser(". . . . . . . . . . . . . . . . . .");
  terminal.write("\x1B[1;32mPassword Required for root access.\x1B[0m\r\n");
  await wait(1000);
  terminal.write("\x1B[1;32mPASSWORD:\x1B[0m ");
  await wait(2000);
  await promptUser("*******");
  terminal.write("Validating credentials ");
  await promptUser(". . . . . . . . . . . . . . . . . .");
  terminal.write("\x1B[1;32mACCESS AUTHORIZED.\x1B[0m\r\n");
  await wait(1000);
  terminal.write("Initializing \x1B[1;32mzion.exe\x1B[0m\r\n");
  await wait(1000);
  terminal.write("Preparing Boot Sequence ");
  await promptUser(". . . . . . . . . . . . . . . . . .");
  terminal.write("Starting process with command `bundle exec rabbit-hole -C config/redpill.js\r\n");
  await wait(1000);
  terminal.write("[4] [REDACTED] starting in cluser mode ");
  await promptUser(". . . . .");
  terminal.write("[4] * Version 03.31.99 (ECMASCRIPT 3.0.1 [ES3]), codename: Morpheus\r\n");
  await wait(1000);
  terminal.write("[4] * Min threads: 2, max threads: 4\r\n");
  await wait(250);
  terminal.write("[4] * Environment: staging\r\n");
  await wait(500);
  terminal.write("[4] * Process workers: 2\r\n");
  await wait(250);
  terminal.write("[4] * Preloading application\r\n");
  await wait(500);
  terminal.write("[4] * Listenting on tcp://0.0.0.0:51751\r\n");
  await wait(250);
  terminal.write("[4] Use Ctrl-C to stop\r\n");
  await wait(1000);
  terminal.write("[4] - Worker 0 (pid: 9) booted, phase: 0\r\n");
  await wait(250);
  terminal.write("[4] - Worker 1 (pid: 13) booted, phase: 0\r\n");
  await wait(250);
  terminal.write("State changed from starting to up\r\n");
  await wait(1000);
  terminal.write("System Reboot Required.\r\n");
  await wait(1000);
  terminal.write("Restarting ");
  await promptUser(". . . . . . . . . . . . . . . . . .");
  await wait(3000);
  terminal.clear();
  await wait(1000);
  terminal.write("Boot Sequence Initiatilized\r\n");
  await wait(1000);
  terminal.write("Mounting \x1B[1;32mzion.exe\x1B[0m ");
  await promptUser(". . . . . . . . . . . . . . . . . .");
  await (async () => {
    return await new Promise(async (resolve) => {
      for (let i = 0; i < 2000; i++) {
        terminal.write(String.fromCharCode(Math.floor(Math.random() * 65535)));
        await wait(1);
      }
      resolve();
    });
  })();
  terminal.write("\r\n\r\n ");
  await wait(100);
  terminal.clear();
  await wait(2000);
  terminal.write("Initialization complete.");
  terminal.write("\r\n\r\n");
  await wait(3000);
  terminal.clear();
  await promptUser("Welcome to \x1B[1;32mThe Matrix\x1B[0m");
  terminal.focus();

  promptNum = 0;
  await promptUser("Would you like to know what you're doing here? (y/n)", true);
};

// Game prompts
let promptNum;
const evaluateInput = async (input) => {
  return new Promise(async (resolve) => {
    switch (promptNum) {
      case 0:
        if (input === "y") {
          await promptUser("Excellent...");
          await promptUser("");
          await promptUser("I've brought you here because I need someone who can \x1B[1;32msee the code.\x1B[0m");
          promptNum++;
          break;
        } else if (input === "n") {
          await promptUser("Most unfortunate.");
          await promptUser("Goodbye.");
          redirect();
        } else {
          break;
        }
      default:
        await promptUser("There's been a glitch in The Matrix.");
    }
    resolve("Input Evaluated");
  });
};

init();
