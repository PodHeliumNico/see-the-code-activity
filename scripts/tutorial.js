import { morpheus, neo, wait } from "../utils/helpers.js";
import { promptUser } from "../utils/prompts.js";

export const tutorial = async () => {
  await morpheus();
  await promptUser("Excellent...");
};
