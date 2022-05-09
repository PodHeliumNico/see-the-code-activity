import { getTerminal } from "./utils/index.js";
import { boot } from "./scripts/index.js";
import "./styles/style.css";
import "./styles/xterm.css";
import { SceneController } from "./scripts/SceneController";
import { sceneList } from "./scripts/scenes.js";

export let terminal;
export let controller;

const init = async () => {
    terminal = await getTerminal();

    let terminalElem = document.createElement("div");
    terminalElem.id = "terminal";
    document.body.append(terminalElem);

    let codeElem = document.createElement("div");
    codeElem.id = "code";
    document.body.append(codeElem);

    terminal.open(document.getElementById("terminal"));
    await boot();

    controller = new SceneController(sceneList);
    await controller.advanceScene();
};

init();
