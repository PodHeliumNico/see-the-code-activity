export const puzzles = [];

async function getFileText(path, name) {
    const res = await fetch(path);
    const data = await res.blob();
    return await data.text();
}

export const loadPuzzles = async () => {
    const puzzle1 = await getFileText("/puzzles/p01.html", "p01.js");
    const puzzle2 = await getFileText("/puzzles/p02.html", "p02.js");
    const puzzle3 = await getFileText("/puzzles/p03.html", "p03.js");

    puzzles.push(puzzle1, puzzle2, puzzle3);
};

export const renderPuzzle = (num) => {
    let codeblock = document.querySelector("#code");
    codeblock.innerHTML = puzzles[num];
};
