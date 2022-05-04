import { morpheus, neo, wait, promptUser, TIME } from "../utils/index.js";

export const welcomeUser = async () => {
    await morpheus();
    await promptUser("Excellent...");
    await morpheus();
    await promptUser(
        "Throughout human history, we have been dependent on machines to survive."
    );
    await morpheus();
    await promptUser("Fate, it seems, is not without a sense of irony.");
    await morpheus();
    await promptUser("We don't know who struck first, us or them.");
    await morpheus();
    await promptUser("But we do know it was us that scorched the sky.");
    await neo();
    await promptUser("And now they're coming for us.");
    await wait(TIME.LONG);
    await morpheus();
    await promptUser(
        "We've brought you here because we need someone like you."
    );
    await neo();
    await promptUser("Someone who can \x1B[1;32msee the code.\x1B[0m");
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
};
