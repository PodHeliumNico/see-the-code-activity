import { getTerminal } from "./utils/index.js";
import { boot } from "./scripts/index.js";
import "./styles/style.css";
import "./styles/xterm.css";
import { SceneController } from "./scripts/SceneController";
import { sceneList } from "./scripts/scenes.js";

export let terminal;
export let controller;

const init = async () => {
    let root = document.createElement("div");
    root.id = "root";
    let title = document.createElement("h1");
    title.innerText = "See The Code";
    root.append(title);

    terminal = await getTerminal();

    let terminalElem = document.createElement("div");
    terminalElem.id = "terminal";
    root.append(terminalElem);

    let codeElem = document.createElement("div");
    codeElem.id = "code";
    root.append(codeElem);

    document.body.append(root);

    terminal.open(document.getElementById("terminal"));
    await boot();

    controller = new SceneController(sceneList);
    await controller.advanceScene();
};

init();
