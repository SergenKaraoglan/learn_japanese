const scenariosData = {
    greetings: [
        {
            character: 'yuki',
            text: 'Konnichiwa!',
            en: 'Hello!',
            jpTokens: [{ text: 'Konnichiwa!', color: '#6366f1' }],
            enTokens: [{ text: 'Hello!', color: '#6366f1' }]
        },
        {
            character: 'kenji',
            text: 'Konnichiwa!',
            en: 'Hello!',
            jpTokens: [{ text: 'Konnichiwa!', color: '#6366f1' }],
            enTokens: [{ text: 'Hello!', color: '#6366f1' }]
        },
        {
            character: 'kenji',
            text: 'O-genki desu ka?',
            en: 'How are you?',
            jpTokens: [
                { text: 'O-genki', color: '#10b981' },
                { text: 'desu', color: '#f59e0b' },
                { text: 'ka?', color: '#f43f5e' }
            ],
            enTokens: [
                { text: 'How', color: '#10b981' },
                { text: 'are', color: '#f59e0b' },
                { text: 'you?', color: '#f43f5e' }
            ]
        },
        {
            character: 'yuki',
            text: 'Hai, genki desu.',
            en: 'Yes, I am fine.',
            jpTokens: [
                { text: 'Hai,', color: '#8b5cf6' },
                { text: 'genki', color: '#10b981' },
                { text: 'desu.', color: '#f59e0b' }
            ],
            enTokens: [
                { text: 'Yes,', color: '#8b5cf6' },
                { text: 'I am', color: '#f59e0b' },
                { text: 'fine.', color: '#10b981' }
            ]
        },
        {
            character: 'yuki',
            text: 'Anata wa?',
            en: 'And you?',
            jpTokens: [
                { text: 'Anata', color: '#06b6d4' },
                { text: 'wa?', color: '#06b6d4' }
            ],
            enTokens: [
                { text: 'And', color: '#ec4899' },
                { text: 'you?', color: '#06b6d4' }
            ]
        }
    ],
    selfIntro: [
        {
            character: 'yuki',
            text: 'Hajimemashite.',
            en: 'Nice to meet you.',
            jpTokens: [{ text: 'Hajimemashite.', color: '#6366f1' }],
            enTokens: [{ text: 'Nice to meet you.', color: '#6366f1' }]
        },
        {
            character: 'yuki',
            text: 'Watashi wa Yuki desu.',
            en: 'I am Yuki.',
            jpTokens: [
                { text: 'Watashi', color: '#10b981' },
                { text: 'wa', color: '#f59e0b' },
                { text: 'Yuki', color: '#6366f1' },
                { text: 'desu.', color: '#f59e0b' }
            ],
            enTokens: [
                { text: 'I', color: '#10b981' },
                { text: 'am', color: '#f59e0b' },
                { text: 'Yuki.', color: '#6366f1' }
            ]
        },
        {
            character: 'kenji',
            text: 'Hajimemashite.',
            en: 'Nice to meet you.',
            jpTokens: [{ text: 'Hajimemashite.', color: '#6366f1' }],
            enTokens: [{ text: 'Nice to meet you.', color: '#6366f1' }]
        },
        {
            character: 'kenji',
            text: 'Kenji desu.',
            en: 'I am Kenji.',
            jpTokens: [
                { text: 'Kenji', color: '#6366f1' },
                { text: 'desu.', color: '#f59e0b' }
            ],
            enTokens: [
                { text: 'I am', color: '#f59e0b' },
                { text: 'Kenji.', color: '#6366f1' }
            ]
        },
        {
            character: 'yuki',
            text: 'Yoroshiku onegaishimasu.',
            en: 'Pleased to meet you.',
            jpTokens: [
                { text: 'Yoroshiku', color: '#8b5cf6' },
                { text: 'onegaishimasu.', color: '#8b5cf6' }
            ],
            enTokens: [
                { text: 'Pleased to', color: '#8b5cf6' },
                { text: 'meet you.', color: '#8b5cf6' }
            ]
        },
        {
            character: 'kenji',
            text: 'Kochira koso, yoroshiku.',
            en: 'Likewise, nice to meet you.',
            jpTokens: [
                { text: 'Kochira', color: '#06b6d4' },
                { text: 'koso,', color: '#06b6d4' },
                { text: 'yoroshiku.', color: '#8b5cf6' }
            ],
            enTokens: [
                { text: 'Likewise,', color: '#06b6d4' },
                { text: 'nice to', color: '#8b5cf6' },
                { text: 'meet you.', color: '#8b5cf6' }
            ]
        }
    ]
};

const flashcardsData = [
    { jp: 'Konnichiwa', en: 'Hello' },
    { jp: 'Arigatou', en: 'Thank you' },
    { jp: 'Sayounara', en: 'Goodbye' },
    { jp: 'Sumimasen', en: 'Excuse me' },
    { jp: 'Onegaishimasu', en: 'Please' },
    { jp: 'Hajimemashite', en: 'Nice to meet you' },
    { jp: 'Genki', en: 'Fine' },
    { jp: 'Ohayou', en: 'Good morning' },
    { jp: 'Konbanwa', en: 'Good evening' },
    { jp: 'Oyasumi', en: 'Good night' }
];

const availableScenarios = [
    {
        id: 'greetings',
        title: 'Greetings',
        description: 'Learn basic greetings and how to ask how someone is doing.',
        difficulty: 'Beginner'
    },
    {
        id: 'selfIntro',
        title: 'Self-Introduction',
        description: 'Learn how to introduce yourself and meet new people.',
        difficulty: 'Beginner'
    }
];

let scenarios = [];
let currentStep = 0;
let mode = 'WATCH'; // 'WATCH', 'REPEAT'
let currentPlayer = 'yuki'; // Who the user is currently playing
let currentScenarioId = null;

// Progress Tracking
let completedScenarios = JSON.parse(localStorage.getItem('completedScenarios')) || [];

function saveCompletion(id) {
    if (!completedScenarios.includes(id)) {
        completedScenarios.push(id);
        localStorage.setItem('completedScenarios', JSON.stringify(completedScenarios));
    }
}

const homeView = document.getElementById('home-view');
const lessonView = document.getElementById('lesson-view');
const scenarioGrid = document.getElementById('scenario-grid');
const exitLessonBtn = document.getElementById('exit-lesson');

const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const restartBtn = document.getElementById('restart-btn');
const testPhase = document.getElementById('test-phase');
const charStage = document.getElementById('character-stage');
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const testPrompt = document.getElementById('test-prompt');
const progressBar = document.getElementById('progress-bar');

// Flashcard Elements
const flashcardView = document.getElementById('flashcard-view');
const flashJpText = document.getElementById('flash-jp-text');
const flashUserInput = document.getElementById('flash-user-input');
const flashSubmitBtn = document.getElementById('flash-submit-btn');
const flashFeedback = document.getElementById('flash-feedback');
const flashScoreBadge = document.getElementById('flash-score');
const flashAudioBtn = document.getElementById('flash-audio-btn');
const flashAutoplayToggle = document.getElementById('flash-autoplay-toggle');
const deckCount = document.getElementById('deck-count');
const showScenariosBtn = document.getElementById('show-scenarios');
const showFlashcardsBtn = document.getElementById('show-flashcards');

let flashDeck = [...flashcardsData];

// Flashcard Scoring
let flashScores = JSON.parse(localStorage.getItem('flashScores')) || {};
let lastShownCardJp = null;
let autoplayEnabled = localStorage.getItem('flashAutoplay') !== 'false';

// Initialize Autoplay Toggle
if (flashAutoplayToggle) {
    flashAutoplayToggle.checked = autoplayEnabled;
}

function speakJapanese(text) {
    if (!window.speechSynthesis) return;

    // Stop any current speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';

    // Find a Japanese voice
    const voices = window.speechSynthesis.getVoices();
    const jaVoice = voices.find(v => v.lang.includes('ja'));
    if (jaVoice) utterance.voice = jaVoice;

    utterance.onstart = () => flashAudioBtn.classList.add('playing');
    utterance.onend = () => flashAudioBtn.classList.remove('playing');

    window.speechSynthesis.speak(utterance);
}

function updateFlashScore(jpWord, isCorrect) {
    if (!flashScores[jpWord]) {
        flashScores[jpWord] = { correct: 0, total: 0 };
    }
    flashScores[jpWord].total++;
    if (isCorrect) {
        flashScores[jpWord].correct++;
    }
    localStorage.setItem('flashScores', JSON.stringify(flashScores));
}

function sortFlashDeckByRatio() {
    flashDeck.sort((a, b) => {
        const scoreA = flashScores[a.jp] || { correct: 0, total: 0 };
        const scoreB = flashScores[b.jp] || { correct: 0, total: 0 };

        // Priority to new words (total === 0)
        if (scoreA.total === 0 && scoreB.total > 0) return -1;
        if (scoreB.total === 0 && scoreA.total > 0) return 1;
        if (scoreA.total === 0 && scoreB.total === 0) return 0;

        const ratioA = scoreA.correct / scoreA.total;
        const ratioB = scoreB.correct / scoreB.total;

        return ratioA - ratioB; // Lower ratio (worst) comes first
    });
}

const bubbles = {
    yuki: document.getElementById('bubble-yuki'),
    kenji: document.getElementById('bubble-kenji')
};

const characters = {
    yuki: document.getElementById('char-left'),
    kenji: document.getElementById('char-right')
};

function hideAllBubbles() {
    Object.values(bubbles).forEach(b => {
        if (b) b.classList.remove('active');
    });
    Object.values(characters).forEach(c => {
        if (c) c.classList.remove('speaking');
    });
}

function updateProgress() {
    const total = scenarios.length;
    const progress = (currentStep / total) * 100;
    progressBar.style.width = `${progress}%`;
}

function updateUI() {
    hideAllBubbles();
    updateProgress();

    // Always show restart once learning has begun
    restartBtn.classList.remove('hidden');

    if (currentStep >= scenarios.length) {
        if (mode === 'WATCH') {
            transitionToRepeat('yuki');
        } else if (mode === 'REPEAT' && currentPlayer === 'yuki') {
            transitionToRepeat('kenji');
        } else {
            finishLesson();
        }
        return;
    }

    const s = scenarios[currentStep];
    const bubble = bubbles[s.character];
    const character = characters[s.character];

    character.classList.add('speaking');

    // Show/Hide Back button based on step
    if (currentStep > 0) {
        backBtn.classList.remove('hidden');
    } else {
        backBtn.classList.add('hidden');
    }

    if (mode === 'WATCH') {
        bubble.querySelector('.jp-text').textContent = s.text;
        bubble.querySelector('.en-text').textContent = s.en;
        nextBtn.classList.remove('hidden');
        testPhase.classList.add('hidden');
        setTimeout(() => bubble.classList.add('active'), 100);
    } else {
        // REPEAT mode
        if (s.character === currentPlayer) {
            // User must type current character's line
            bubble.querySelector('.jp-text').textContent = '';
            bubble.querySelector('.en-text').textContent = s.en;
            nextBtn.classList.add('hidden');
            testPhase.classList.remove('hidden');
            const capPlayer = currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1);
            testPrompt.innerHTML = `Play as ${capPlayer}: <span class="highlight">How do you say "${s.en}"?</span>`;
            userInput.value = '';
            userInput.classList.remove('hidden');
            submitBtn.classList.remove('hidden');
            submitBtn.textContent = "Check";
            submitBtn.onclick = checkAnswer;
            userInput.focus();
            setTimeout(() => bubble.classList.add('active'), 100);
        } else {
            // Other character speaks normally
            bubble.querySelector('.jp-text').textContent = s.text;
            bubble.querySelector('.en-text').textContent = s.en;
            nextBtn.classList.remove('hidden');
            testPhase.classList.add('hidden');
            setTimeout(() => bubble.classList.add('active'), 100);
        }
    }
}

function transitionToRepeat(player) {
    currentPlayer = player;
    const capPlayer = player.charAt(0).toUpperCase() + player.slice(1);

    if (player === 'yuki') {
        feedback.textContent = "Great job watching! Now it's your turn. Repeat the conversation as Yuki.";
    } else {
        feedback.textContent = "Excellent progress! Now let's switch. Repeat the conversation as Kenji.";
    }

    feedback.className = "feedback success";
    testPhase.classList.remove('hidden');
    testPrompt.textContent = `Click 'Start ${capPlayer} Role-Play' to begin.`;
    userInput.classList.add('hidden');
    submitBtn.classList.remove('hidden');
    submitBtn.textContent = `Start ${capPlayer} Role-Play`;
    nextBtn.classList.add('hidden');
    backBtn.classList.remove('hidden');

    submitBtn.onclick = () => {
        mode = 'REPEAT';
        currentStep = 0;
        userInput.classList.remove('hidden');
        submitBtn.textContent = "Check";
        submitBtn.onclick = checkAnswer;
        feedback.textContent = "";
        updateUI();
    };
}

function finishLesson() {
    hideAllBubbles();
    progressBar.style.width = '100%';
    testPhase.classList.remove('hidden');
    testPrompt.textContent = "Congratulations! You've mastered the scenario from both perspectives.";
    userInput.classList.add('hidden');
    submitBtn.classList.add('hidden');
    feedback.textContent = "Subarashii! (Wonderful!)";
    feedback.className = "feedback success text-large";
    nextBtn.classList.add('hidden');
    backBtn.classList.add('hidden'); // Hide back button on true finish

    if (currentScenarioId) {
        saveCompletion(currentScenarioId);
    }
}

function levenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

// Flashcard Logic
function startFlashcards() {
    homeView.classList.add('hidden');
    lessonView.classList.add('hidden');
    flashcardView.classList.remove('hidden');
    sortFlashDeckByRatio();
    showFlashcard();
}

function showFlashcard() {
    if (flashDeck.length === 0) {
        flashDeck = [...flashcardsData];
    }

    // Prevent back-to-back repeats if possible
    if (flashDeck.length > 1 && flashDeck[0].jp === lastShownCardJp) {
        // Swap the top card with the second one
        const temp = flashDeck[0];
        flashDeck[0] = flashDeck[1];
        flashDeck[1] = temp;
    }

    const card = flashDeck[0];
    lastShownCardJp = card.jp;

    flashJpText.textContent = card.jp;
    flashUserInput.value = '';
    flashFeedback.textContent = '';
    flashFeedback.className = 'feedback';

    // Update Score Badge
    const score = flashScores[card.jp] || { correct: 0, total: 0 };
    flashScoreBadge.textContent = `${score.correct}/${score.total}`;

    deckCount.textContent = flashDeck.length;
    flashUserInput.focus();

    // Auto-play audio if enabled
    if (autoplayEnabled) {
        speakJapanese(card.jp);
    }
}

function checkFlashcardAnswer() {
    const val = flashUserInput.value.trim().toLowerCase();
    const expected = flashDeck[0].en.toLowerCase();

    if (val === expected) {
        flashFeedback.textContent = 'Correct!';
        flashFeedback.className = 'feedback success';

        updateFlashScore(flashDeck[0].jp, true);

        // Spaced repetition: move to bottom (initial shift) then sort
        const card = flashDeck.shift();
        flashDeck.push(card);
        sortFlashDeckByRatio();

        setTimeout(showFlashcard, 800);
    } else {
        flashFeedback.textContent = `Incorrect. The answer was "${flashDeck[0].en}".`;
        flashFeedback.className = 'feedback error shake';

        updateFlashScore(flashDeck[0].jp, false);

        // Spaced repetition: stay at top, but re-sort might move it
        setTimeout(() => {
            flashFeedback.classList.remove('shake');
            sortFlashDeckByRatio();
            showFlashcard(); // Refresh score display and potentially new word
        }, 1500);
    }
}

function switchMode(target) {
    showScenariosBtn.classList.remove('active');
    showFlashcardsBtn.classList.remove('active');

    if (target === 'scenarios') {
        showScenariosBtn.classList.add('active');
        flashcardView.classList.add('hidden');
        lessonView.classList.add('hidden');
        renderHome();
    } else {
        showFlashcardsBtn.classList.add('active');
        startFlashcards();
    }
}

function checkAnswer() {
    const val = userInput.value.trim().toLowerCase();
    const expected = scenarios[currentStep].text.toLowerCase().replace(/[!,?.]/g, '');
    const cleanVal = val.replace(/[!,?.]/g, '');

    if (cleanVal === expected) {
        feedback.textContent = 'Correct!';
        feedback.className = 'feedback success';

        // Show the actual text in the bubble
        const s = scenarios[currentStep];
        const bubble = bubbles[s.character];
        bubble.querySelector('.jp-text').textContent = s.text;

        setTimeout(() => {
            currentStep++;
            updateUI();
        }, 800);
    } else {
        const distance = levenshteinDistance(cleanVal, expected);
        if ((distance <= 2 && expected.length > 3) || (distance === 1)) {
            feedback.textContent = 'So close! Check your spelling.';
            feedback.className = 'feedback warning shake';
        } else {
            feedback.textContent = `Incorrect. Try again!`;
            feedback.className = 'feedback error shake';
        }
        setTimeout(() => feedback.classList.remove('shake'), 500);
    }
}

function renderHome() {
    homeView.classList.remove('hidden');
    lessonView.classList.add('hidden');
    scenarioGrid.innerHTML = '';

    availableScenarios.forEach(scen => {
        const isCompleted = completedScenarios.includes(scen.id);
        const card = document.createElement('div');
        card.className = `scenario-card ${isCompleted ? 'completed' : ''}`;
        card.innerHTML = `
            <div class="card-badges">
                <span class="badge difficulty">${scen.difficulty}</span>
                ${isCompleted ? '<span class="badge status">✓ Completed</span>' : ''}
            </div>
            <h3>${scen.title}</h3>
            <p>${scen.description}</p>
        `;
        card.onclick = () => startLesson(scen.id);
        scenarioGrid.appendChild(card);
    });
}

function startLesson(scenarioId) {
    currentScenarioId = scenarioId;
    scenarios = scenariosData[scenarioId];
    currentStep = 0;
    mode = 'WATCH';
    currentPlayer = 'yuki';

    homeView.classList.add('hidden');
    lessonView.classList.remove('hidden');
    testPhase.classList.add('hidden');
    feedback.textContent = '';

    updateUI();
}

function exitToHome() {
    hideAllBubbles();
    homeView.classList.remove('hidden');
    lessonView.classList.add('hidden');
}

nextBtn.addEventListener('click', () => {
    currentStep++;
    updateUI();
});

backBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        updateUI();
    } else if (mode === 'REPEAT' && currentStep === 0) {
        // Option to go back to WATCH mode if at start of REPEAT
        mode = 'WATCH';
        currentStep = scenarios.length - 1;
        updateUI();
    }
});

restartBtn.addEventListener('click', () => {
    mode = 'WATCH';
    currentStep = 0;
    feedback.textContent = "";
    testPhase.classList.add('hidden');
    submitBtn.classList.remove('hidden');
    submitBtn.onclick = checkAnswer;
    updateUI();
});

nextBtn.addEventListener('click', () => {
    currentStep++;
    updateUI();
});

showScenariosBtn.addEventListener('click', () => switchMode('scenarios'));
showFlashcardsBtn.addEventListener('click', () => switchMode('flashcards'));

// Flashcard Audio Events
flashAudioBtn.addEventListener('click', () => {
    if (flashDeck.length > 0) {
        speakJapanese(flashDeck[0].jp);
    }
});

flashAutoplayToggle.addEventListener('change', (e) => {
    autoplayEnabled = e.target.checked;
    localStorage.setItem('flashAutoplay', autoplayEnabled);
});

flashSubmitBtn.addEventListener('click', checkFlashcardAnswer);
flashUserInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkFlashcardAnswer();
});

exitLessonBtn.addEventListener('click', exitToHome);

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (!nextBtn.classList.contains('hidden')) {
            nextBtn.click();
        } else if (!submitBtn.classList.contains('hidden')) {
            submitBtn.click();
        }
        return;
    }

    // Don't trigger other nav if user is typing in input
    if (document.activeElement === userInput) return;

    if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') {
        if (!nextBtn.classList.contains('hidden')) {
            currentStep++;
            updateUI();
        }
    } else if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') {
        if (!backBtn.classList.contains('hidden')) {
            backBtn.click();
        }
    }
});

// Initial state
nextBtn.classList.add('hidden');
backBtn.classList.add('hidden');
restartBtn.classList.add('hidden');
submitBtn.onclick = checkAnswer;

renderHome();
