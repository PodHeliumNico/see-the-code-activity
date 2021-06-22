let codeblock = document.querySelector("#code");

export const puzzles = [
  ["This is the first line of the code block", "This is the second line of the code block", "This is the thrid line of the code block"],
];

export const renderPuzzle = (num) => {
  for (let i = 0; i < puzzles[num].length; i++) {
    let line = document.createElement("tr");
    let ln = document.createElement("td");
    ln.classList.add("ln");
    ln.innerText = `${i}.`;
    let text = document.createElement("td");
    text.classList.add("text");
    text.innerText = puzzles[num][i];
    line.append(ln, text);
    codeblock.append(line);
  }
};
