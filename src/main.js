import { morpheus, wait, promptUser, setPrompt, getTerminal } from "./utils/index.js";
import { boot } from "./scripts/index.js";
import "./styles/style.css";
import "./styles/xterm.css";

export let terminal;

const init = async () => {
  terminal = await getTerminal();

  let terminalElem = document.createElement("div");
  terminalElem.id = "terminal";
  document.body.append(terminalElem);

  let codeElem = document.createElement("table");
  codeElem.id = "code";
  document.body.append(codeElem);

  terminal.open(document.getElementById("terminal"));
  await boot();
  await promptUser("Welcome to \x1B[1;32mThe Matrix\x1B[0m");
  await wait(2000);
  terminal.focus();
  inZion = true;
  setPrompt(-1);
  await morpheus();
  await promptUser("Welcome... to the real world.");
  wait(1000);
  await morpheus();
  await promptUser("Would you like to know what you're doing here? (y/n)", true);
};

init();
