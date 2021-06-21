import { promptUser } from "../utils/prompts.js";

export const welcomeUser = async () => {
  await promptUser("Excellent...");
  await promptUser("I've brought you here because I need someone who can \x1B[1;32msee the code.\x1B[0m");
};
