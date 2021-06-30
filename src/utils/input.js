import { write } from "./index.js";
import {
  choiceForInit,
  choiceForWelcome,
  choiceForRound1,
  choiceForRound2,
  choiceForRound3,
  choiceForRound4,
  choiceForRound5,
  choiceForRound6,
  choiceForRound7,
  choiceForRound8,
  choiceForRound9,
  choiceForRound10,
  choiceForRound11,
  choiceForRound12,
  choiceForRound13,
  choiceForRound14,
  choiceForRound15,
  choiceForRound16,
  choiceForRound17,
  choiceForRound18,
  choiceForRound19,
  choiceForRound20,
  choiceForRound21,
  choiceForRound22,
  choiceForRound23,
  choiceForRound24,
} from "../scripts/choices.js";

// Game prompts
let promptNum;
export const evaluateInput = async (input) => {
  return await new Promise(async (resolve) => {
    switch (promptNum) {
      case -1:
        await choiceForInit(input);
        break;
      case 0:
        await choiceForWelcome(input);
        break;
      case 1:
        await choiceForRound1(input);
        break;
      case 2:
        await choiceForRound2(input);
        break;
      case 3:
        await choiceForRound3(input);
        break;
      case 4:
        await choiceForRound4(input);
        break;
      case 5:
        await choiceForRound5(input);
        break;
      case 6:
        await choiceForRound6(input);
        break;
      case 7:
        await choiceForRound7(input);
        break;
      case 8:
        await choiceForRound8(input);
        break;
      case 9:
        await choiceForRound9(input);
        break;
      case 10:
        await choiceForRound10(input);
        break;
      case 11:
        await choiceForRound11(input);
        break;
      case 12:
        await choiceForRound12(input);
        break;
      case 13:
        await choiceForRound13(input);
        break;
      case 14:
        await choiceForRound14(input);
        break;
      case 15:
        await choiceForRound15(input);
        break;
      case 16:
        await choiceForRound16(input);
        break;
      case 17:
        await choiceForRound17(input);
        break;
      case 18:
        await choiceForRound18(input);
        break;
      case 19:
        await choiceForRound19(input);
        break;
      case 20:
        await choiceForRound20(input);
        break;
      case 21:
        await choiceForRound21(input);
        break;
      case 22:
        await choiceForRound22(input);
        break;
      case 23:
        await choiceForRound23(input);
        break;
      case 24:
      case 23:
        await choiceForRound24(input);
        break;
      case 25:
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

export const nextPrompt = () => {
  promptNum++;
};

export const setPrompt = (val) => {
  promptNum = val;
};

export { promptNum };
