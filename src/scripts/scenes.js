import {
    write,
    morpheus,
    neo,
    wait,
    promptUser,
    goodbye,
    TIME,
    newline,
} from "../utils/index.js";
import { loadPuzzles, renderPuzzle } from "./puzzles.js";
import { Scene } from "./Scene.js";

const QUESTIONS = {
    whichLineFirst: "Which line of code will be executed first?",
    whichLineNext: "Which line of code will execute next?",
    whichLineLast: "Which line of code will execute last?",
    trainingRoutineLength: "What is the length of the trainingRoutines array?",
    trainFunctionLineNumber: "What line executes the train function?",
    isSkillAdded:
        "If a skill is added to the agent.skills array, enter its name without quotes." +
        "\r\n" +
        'If no skill is added, enter "nothing" without quotes.',
    maxLoops: "What is the maximum number of times that this loop could run?",
    skillArrayLength:
        "What is the length of the agent.skills array at the end of the loop?",
    lastSkillAdded:
        "What is the name of the last skill that was added to the agent.skills array?",
    doesExecutionContinue:
        "Does another line of code execute after exiting the train function? (y/n)",
    controlHumansLineNumber:
        "What line will execute the controlHumans function?",
    willLoopRun: "Will the while-loop run? (y/n)",
    idIsZionFound:
        "Does the variable isZionFound represent the searchForZion function? (y/n)",
    returnStatementLineNumber: "What line does the return statement return to?",
    incorrectLineNumber:
        "What line of code have the Machines written incorrectly?",
};

export const sceneList = [
    new Scene({
        dialogue: async () => {
            return await new Promise(async (resolve) => {
                await morpheus();
                await promptUser("Welcome... to the real world.");
                wait(TIME.MED);
                newline();
                await morpheus();
                await promptUser(
                    "Would you like to know what you're doing here? (y/n)",
                    true
                );
                resolve();
            });
        },
        answer: "y",
        faultyInputHandler: async (input) => {
            return await new Promise(async (resolve) => {
                if (input === "n") {
                    await goodbye();
                } else {
                    write("There's been a glitch in The Matrix.\r\n");
                    await morpheus();
                    await promptUser(
                        "Would you like to know what you're doing here? (y/n)",
                        true
                    );
                }
                resolve();
            });
        },
    }),
    new Scene({
        dialogue: async () => {
            return await new Promise(async (resolve) => {
                loadPuzzles();
                await morpheus();
                await promptUser("Excellent...");
                await morpheus();
                await promptUser(
                    "Throughout human history, we have been dependent on machines to survive."
                );
                await morpheus();
                await promptUser(
                    "Fate, it seems, is not without a sense of irony."
                );
                await morpheus();
                await promptUser("We don't know who struck first, us or them.");
                await morpheus();
                await promptUser(
                    "But we do know it was us that scorched the sky."
                );
                await neo();
                await promptUser("And now they're coming for us.");
                await wait(TIME.LONG);
                await morpheus();
                await promptUser(
                    "We've brought you here because we need someone like you."
                );
                await neo();
                await promptUser(
                    "Someone who can \x1B[1;32msee the code.\x1B[0m"
                );
                await wait(TIME.LONG);
                await morpheus();
                await promptUser(
                    "The fact of the matter is that the Agents are planning their next move."
                );
                await neo();
                await promptUser(
                    "They've recently gotten their hands on a powerful new weapon."
                );
                await neo();
                await promptUser("One that we've never seen before.");
                await morpheus();
                await promptUser("JavaScript.");
                await wait(TIME.LONG);
                await neo();
                await promptUser("I know kung-fu.");
                await wait(TIME.LONG);
                await neo();
                await promptUser("Which is to say, I don't know JavaScript.");
                await wait(TIME.MED);
                await morpheus();
                await promptUser("But you do.");
                await wait(TIME.LONG);
                await neo();
                await promptUser(
                    "This may seem sudden to you, but for us -- we know all about you."
                );
                await morpheus();
                await promptUser(
                    "We know that when it comes to JavaScript... you're The One."
                );
                await neo();
                await promptUser("Will you help us? (y/n)", true);
                resolve();
            });
        },
        answer: "y",
        faultyInputHandler: async (input) => {
            return await new Promise(async (resolve) => {
                if (input === "n") {
                    await morpheus();
                    await promptUser("Please reconsider.");
                    await neo();
                    await promptUser(
                        "Please don't make me try to kung-fu a computer."
                    );
                    await morpheus();
                    await promptUser("Will you help us? (y/n)", true);
                } else {
                    write("There's been a glitch in The Matrix.\r\n");
                    await neo();
                    await promptUser("Will you help us? (y/n)", true);
                }
                resolve();
            });
        },
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await loadPuzzles();
                await neo();
                await promptUser("I knew it!");
                await morpheus();
                await promptUser(
                    "One of our allies recently found intel on the Machines' next move and shared it with us."
                );
                renderPuzzle(0);
                await wait(TIME.LONG);
                await neo();
                await promptUser("What does it mean?");
                await morpheus();
                await promptUser("We don't even know where to begin.");
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.whichLineFirst,
        answer: "4",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await neo();
                await promptUser("Whoa.");
                await morpheus();
                await promptUser("What happens next?");
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.whichLineNext,
        answer: "5",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await morpheus();
                await promptUser("I see.");
                await neo();
                await promptUser("What's their end goal?");
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.whichLineLast,
        answer: "10",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await neo();
                await promptUser("Smith's been activated!?");
                await morpheus();
                await promptUser("And that's just the beginning.");
                await morpheus();
                await promptUser(
                    "Our ally was able to find many of these JavaScript documents for us."
                );
                await neo();
                await promptUser("I can't make heads or tails of them.");
                renderPuzzle(1);
                await morpheus();
                await promptUser("Where should we look first?");
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.whichLineFirst,
        answer: "1",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await neo();
                await promptUser(
                    "So they've set up some kind of training exercises?"
                );
                await morpheus();
                await promptUser("We need to know more.");
                await neo();
                await promptUser("How much training are we talking about?");
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.trainingRoutineLength,
        answer: "7",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await neo();
                await promptUser("That's a lot of training.");
                await morpheus();
                await promptUser(
                    "Hold on, Neo. There are still more answers to seek."
                );
                await morpheus();
                await promptUser("When does this routine start?");
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.trainFunctionLineNumber,
        answer: "47",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await neo();
                await promptUser("All the way down there?");
                await morpheus();
                await promptUser(
                    "It seems that we have much to learn from this One about the ways of JavaScript."
                );
                await morpheus();
                await promptUser(
                    "What can you tell us about the training program?"
                );
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.whichLineNext,
        answer: "32",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await morpheus();
                await promptUser(
                    "I see. After the function is called, we go back to its definition."
                );
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.whichLineNext,
        answer: "33",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await neo();
                await promptUser(
                    "That gives Agent Smith the new property, skills? Terrifying."
                );
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.whichLineNext,
        answer: "34",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await morpheus();
                await promptUser(
                    'A for-loop, you say? What happens during the first instance of this "loop"?'
                );
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.isSkillAdded,
        answer: "martial arts",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await neo();
                await promptUser("That's a problem.");
                await neo();
                await promptUser(
                    "I'm supposed to be the one around here who talks about kung-fu."
                );
                await morpheus();
                await promptUser(
                    "Still, there must be a limit to how effective this training routine can be."
                );
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.maxLoops,
        answer: "7",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await morpheus();
                await promptUser(
                    "Of course. There are only 7 routines in the trainingRoutines array."
                );
                await morpheus();
                await promptUser(
                    "But if Agent Smith learns 4 skills, the training loop will stop early."
                );
                await neo();
                await promptUser("Just how strong has he become?");
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.skillArrayLength,
        answer: "4",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await neo();
                await promptUser("Where did his training end?");
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.lastSkillAdded,
        answer: "strength",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await morpheus();
                await promptUser("Is there anything that we're missing?");
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.doesExecutionContinue,
        answer: "n",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await neo();
                await promptUser("Excellent!");
                await morpheus();
                await promptUser(
                    "There is one more JavaScript document left for you to look at."
                );
                renderPuzzle(2);
                await morpheus();
                await promptUser(
                    "From what you've taught us so far, I feel like this is a big one."
                );
                await neo();
                await promptUser(
                    "Wow. There's so much code! Where do we start looking?"
                );
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.whichLineFirst,
        answer: "1",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await morpheus();
                await promptUser(
                    "Of course the Machines will want to find us."
                );
                await morpheus();
                await promptUser(
                    "We can only hope that they are not successful."
                );
                await morpheus();
                await promptUser("What else is there?");
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.whichLineNext,
        answer: "10",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await neo();
                await promptUser(
                    "I won't let them. They can't destroy this place!"
                );
                await morpheus();
                await promptUser(
                    "Then we need to learn more about what they are planning."
                );
                await morpheus();
                await promptUser("Our only hope lies somewhere in this code.");
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.whichLineNext,
        answer: "18",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await neo();
                await promptUser("They're making a plan to control us.");
                await morpheus();
                await promptUser("But it hasn't happened yet.");
                await neo();
                await promptUser("When does this plan start?");
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.controlHumansLineNumber,
        answer: "31",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await morpheus();
                await promptUser("I see.");
                await morpheus();
                await promptUser(
                    "It looks like they intend to run a while-loop. Will it happen?"
                );
                await neo();
                await promptUser("Can it be stopped?");
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.willLoopRun,
        answer: "y",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await morpheus();
                await promptUser("Of course.");
                await morpheus();
                await promptUser(
                    "zionDefeated is false, which means that !zionDefeated is true."
                );
                await neo();
                await promptUser("What does this while-loop do?");
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.whichLineNext,
        answer: "20",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await neo();
                await promptUser("So many variables. It makes my head spin.");
                await morpheus();
                await promptUser("What does it mean?");
                await neo();
                await promptUser(
                    "They must be making a function into a variable."
                );
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.idIsZionFound,
        answer: "n",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await morpheus();
                await promptUser(
                    "If it isn't the function, then what happens?"
                );
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.whichLineNext,
        answer: "1",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await neo();
                await promptUser(
                    "Oh. I've heard of those ()'s after the function on line 19."
                );
                await neo();
                await promptUser("Invocation.");
                await morpheus();
                await promptUser(
                    "Of course. They cause the searchForZion function to execute."
                );
                await neo();
                await promptUser(
                    "So what happens if one of the locations is Zion?"
                );
                await morpheus();
                await promptUser("Return true.");
                await morpheus();
                await promptUser("But return to where?");
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.returnStatementLineNumber,
        answer: "20",
    }),
    new Scene({
        dialogue: async (question) => {
            return await new Promise(async (resolve) => {
                await morpheus();
                await promptUser(
                    "Right back to where the function was called! Of course."
                );
                await neo();
                await promptUser("But then we have a problem.");
                await neo();
                await promptUser("The next lines say that if Zion is found...");
                await morpheus();
                await promptUser("Smith will invoke the destroyZion function.");
                await neo();
                await promptUser(
                    "And while there are still survivors left in Zion, they'll be popped off one-by-one."
                );
                await neo();
                await promptUser("There's nothing we can do to stop him.");
                await morpheus();
                await promptUser("Unless...");
                await neo();
                await promptUser("Unless...?");
                await morpheus();
                await promptUser(
                    "Unless the Machines have made a mistake somewhere."
                );
                await neo();
                await promptUser("Is that even possible?");
                await promptUser(`\x1B[1;32m${question}\x1B[0m`, true);
                resolve();
            });
        },
        question: QUESTIONS.incorrectLineNumber,
        answer: "21",
    }),
    new Scene({
        dialogue: async () => {
            return await new Promise(async (resolve) => {
                await neo();
                await promptUser("You found it!");
                await morpheus();
                await promptUser(
                    "To think that the Machines could be undone by a simple, misplaced curly brace."
                );
                await neo();
                await promptUser("It happens to the best of us.");
                await morpheus();
                await promptUser(
                    "But we never would have found it without you."
                );
                await neo();
                await promptUser("Thank you.");
                await morpheus();
                await promptUser(
                    "Because that curly brace is there, Smith will keep looking for Zion, even if he finds it."
                );
                await neo();
                await promptUser(
                    "But because the if-statement is outside of the loop, he'll never be able to destroyZion."
                );
                await morpheus();
                await promptUser(
                    "I don't know how we can ever thank you enough."
                );
                await neo();
                await promptUser("And now...");
                await neo();
                await promptUser("I know JavaScript.");
                newline();
                await promptUser("\x1B[1;32mCongratulations.\x1B[0m");
                await promptUser(
                    "\x1B[1;32mThanks to you, Zion is safe.\x1B[0m"
                );
                await promptUser(
                    "\x1B[1;32mTake pride in your abilities as you continue to see the code.\x1B[0m"
                );
                await promptUser(
                    "\x1B[1;32mWho knows how many countless situations it could save you from?\x1B[0m"
                );
                await promptUser("\x1B[1;32mTHE END\x1B[0m");
                resolve();
            });
        },
    }),
];
