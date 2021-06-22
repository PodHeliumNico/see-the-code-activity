let codeblock = document.querySelector("#code");

export const puzzles = [
  [
    `// TOP SECRET`,
    `// REVEAL UNDER NO CIRCUMSTANCES`,
    `let program = {`,
    `&emsp; name: "Smith",`,
    `&emsp; role: "Agent",`,
    `&emsp; status: null,`,
    `&emsp;},`,
    `}`,
    ``,
    `program.status = "ACTIVE"`,
  ],

  [
    `let program = {`,
    `&emsp; name: "Smith",`,
    `&emsp; role: "Agent",`,
    `&emsp; status: "ACTIVE",`,
    `&emsp; greetNeo: function() {`,
    `&emsp;&emsp; console.log("Mr. Anderson.")`,
    `&emsp;},`,
    `}`,
    ``,
    `program.greetNeo()`,
  ],
];

export const renderPuzzle = (num) => {
  for (let i = 0; i < puzzles[num].length; i++) {
    let line = document.createElement("tr");
    let ln = document.createElement("td");
    ln.classList.add("ln");
    ln.innerText = `${i}.`;
    let text = document.createElement("td");
    text.classList.add("text");
    text.innerHTML = puzzles[num][i];
    line.append(ln, text);
    codeblock.append(line);
  }
};
