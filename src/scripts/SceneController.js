export class SceneController {
    constructor(scenes) {
        this.sceneNumber = -1;
        this.scenes = scenes;
    }

    get sceneNumber() {
        return this._sceneNumber;
    }

    set sceneNumber(num) {
        this._sceneNumber = num;
    }

    async advanceScene() {
        console.log({
            sceneNumber: this.sceneNumber,
            sceneLenght: this.scenes.length,
        });
        if (this.sceneNumber + 1 < this.scenes.length) {
            this.sceneNumber++;
            return await this.scenes[this.sceneNumber].play();
        }
    }

    async evaluateInput(input) {
        return await new Promise(async (resolve) => {
            const scene = this.scenes[this.sceneNumber];
            if (input === scene.answer) {
                this.advanceScene();
            } else {
                await scene.handleIncorrectInput(input);
            }
            resolve();
        });
    }
}
