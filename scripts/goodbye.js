import { promptUser } from "../utils/prompts.js";
import { redirect } from "../utils/helpers.js";

export const goodbye = async () => {
  await promptUser("Most unfortunate.");
  await promptUser("Goodbye.");
  redirect();
};
