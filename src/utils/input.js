import { write } from "./index.js";
import { controller } from "../main.js";

/** */
export const handleInput = async (input) => {
    return await new Promise(async (resolve) => {
        switch (true) {
            case controller.sceneNumber >= 0 &&
                controller.sceneNumber + 2 < controller.scenes.length:
                controller.evaluateInput(input);
                break;
            case controller.sceneNumber == controller.scenes.length - 1:
                write("Thank you for playing.");
                write("You've reached the end.");
                write("To play again, please restart the page.");
                break;
            default:
                write("There's been a glitch in The Matrix.\r\n");
        }
        resolve("Input Evaluated");
    });
};
