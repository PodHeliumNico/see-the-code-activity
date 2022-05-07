import { promptUser, write } from "../utils";

const defaultHandler = async (question) => {
    write("There's been a glitch in The Matrix.\r\n");
    await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
};

export class Scene {
    constructor({
        dialogue,
        question,
        answer,
        faultyInputHandler = defaultHandler,
    }) {
        this.dialogue = (v) => dialogue(v);
        this.question = question;
        this.answer = answer;
        this.handleIncorrectInput = async (input) => {
            if (faultyInputHandler === defaultHandler) {
                await faultyInputHandler(this.question);
            } else {
                await faultyInputHandler(input);
            }
        };
    }

    async play() {
        return this.question
            ? await this.dialogue(this.question)
            : await this.dialogue();
    }
}
