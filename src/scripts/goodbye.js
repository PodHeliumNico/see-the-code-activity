import { promptUser, redirect } from "../utils/index.js";

export const goodbye = async () => {
  await promptUser("Most unfortunate.");
  await promptUser("Goodbye.");
  redirect();
};
