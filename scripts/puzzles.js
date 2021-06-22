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
    `let trainingRoutines = [`,
    `&emsp;{`,
    `&emsp;&emsp; name: "martial arts",`,
    `&emsp;&emsp; type: "combat",`,
    `&emsp;},`,
    `&emsp;{`,
    `&emsp;&emsp; name: "marksmanship",`,
    `&emsp;&emsp; type: "combat",`,
    `&emsp;},`,
    `&emsp;{`,
    `&emsp;&emsp; name: "intelligence",`,
    `&emsp;&emsp; type: "espionage",`,
    `&emsp;},`,
    `&emsp;{`,
    `&emsp;&emsp; name: "investing",`,
    `&emsp;&emsp; type: "finance",`,
    `&emsp;},`,
    `&emsp;{`,
    `&emsp;&emsp; name: "strength",`,
    `&emsp;&emsp; type: "combat",`,
    `&emsp;},`,
    `&emsp;{`,
    `&emsp;&emsp; name: "cooking",`,
    `&emsp;&emsp; type: "entertainment",`,
    `&emsp;},`,
    ``,
    `function train(agent, exercises) {`,
    `&emsp; agent.skills = []`,
    `&emsp; for(let i = 0; i < exercises.length; i++){`,
    `&emsp;&emsp; if(exercises[i].type === "combat" || exercises[i].type === "espionage"){`,
    `&emsp;&emsp;&emsp; agent.skills.push(exercises[i])`,
    `&emsp;&emsp; }`,
    `&emsp;}`,
    `},`,
    ``,
    `// PROGRAM IS THE CODE NAME FOR AGENT SMIH (FROM THE PREVIOUS DOCUMENT)`,
    `// program === { name: "Smith", role: "Agent", status: "ACTIVE" }`,
    `train(program, trainingRoutines)`,
  ],

  [
    `function findZion(coordinates) {`,
    `&emsp; `,
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
  codeblock.innerHTML = "";
  for (let i = 0; i < puzzles[num].length; i++) {
    let line = document.createElement("tr");
    let ln = document.createElement("td");
    ln.classList.add("ln");
    ln.innerText = `${i + 1}.`;
    let text = document.createElement("td");
    text.classList.add("text");
    text.innerHTML = puzzles[num][i];
    line.append(ln, text);
    codeblock.append(line);
  }
};
