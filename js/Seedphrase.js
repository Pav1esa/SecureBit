const wordlist = [
    "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "nectarine",
    "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "watermelon", "blueberry", "blackberry", "cranberry",
    "apricot", "peach", "pear", "plum", "pineapple", "lime", "coconut", "guava", "kiwifruit", "pomegranate", "melon", "grapefruit"
];

function generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordlist.length);
    return wordlist[randomIndex];
}

function generateSeedPhrase() {
    const seedPhrase = [];
    for (let i = 0; i < 12; i++) { // Generate 12 random words
        const randomWord = generateRandomWord();
        seedPhrase.push(randomWord);
    }
    return seedPhrase;
}

const generateBtn = document.getElementById("generateBtn");
const wordContainers = Array.from({ length: 12 }, (_, index) => document.getElementById(`word${index + 1}`));

generateBtn.addEventListener("click", () => {
    const generatedSeedPhrase = generateSeedPhrase();
    generatedSeedPhrase.forEach((word, index) => {
        wordContainers[index].textContent = word;
    });

    // Show the word containers after generating the seed phrase
    document.querySelector('.word-container').classList.add('visible');
});

const confirmBtn = document.getElementById("confirmBtn");

confirmBtn.addEventListener("click", () => {
    const generatedSeedPhrase = generateSeedPhrase();
    window.location.href = "wallet6.html";
});