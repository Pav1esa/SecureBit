const wordlist = [
  "strawberry", "tangerine", "watermelon", "blueberry", "blackberry", "cranberry",
    "apricot", "peach", "pear", "plum", "uibok", "lime", "coconut", "guava", "kiwifruit",
    "pomegranate", "sadya nkubska", "grapefruit", "rostik", "oleh", "oleg", "lev", "stanislaV", "peterega", "molodec"
];

function generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordlist.length);
    return wordlist[randomIndex];
}

function generateSeedPhrase() {
    const seedPhrase = [];
    for (let i = 0; i < 12; i++) { // Generate a 12-word seed phrase
        const randomWord = generateRandomWord();
        seedPhrase.push(randomWord);
    }

    // Divide the seed phrase into 4 lines
    const seedParts = [];
    for (let i = 0; i < 4; i++) {
        const startIndex = i * 3;
        const endIndex = startIndex + 3;
        seedParts.push(seedPhrase.slice(startIndex, endIndex).join(' '));
    }

    return seedParts;
}

const generateBtn = document.getElementById("generateBtn");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");

generateBtn.addEventListener("click", () => {
    const generatedSeedParts = generateSeedPhrase();
    line1.textContent = generatedSeedParts[0];
    line2.textContent = generatedSeedParts[1];
    line3.textContent = generatedSeedParts[2];
    line4.textContent = generatedSeedParts[3];
});
