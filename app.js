const scenariosData = {
    greetings: [
        {
            character: 'yuki',
            text: 'Konnichiwa!',
            kanji: 'こんにちは！',
            en: 'Hello!',
            jpTokens: [{ text: 'Konnichiwa!', color: '#6366f1' }],
            enTokens: [{ text: 'Hello!', color: '#6366f1' }]
        },
        {
            character: 'kenji',
            text: 'Konnichiwa!',
            kanji: 'こんにちは！',
            en: 'Hello!',
            jpTokens: [{ text: 'Konnichiwa!', color: '#6366f1' }],
            enTokens: [{ text: 'Hello!', color: '#6366f1' }]
        },
        {
            character: 'kenji',
            text: 'O-genki desu ka?',
            kanji: 'お元気ですか？',
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
            kanji: 'はい、元気です。',
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
            kanji: 'あなたは？',
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
            kanji: 'はじめまして。',
            en: 'Nice to meet you.',
            jpTokens: [{ text: 'Hajimemashite.', color: '#6366f1' }],
            enTokens: [{ text: 'Nice to meet you.', color: '#6366f1' }]
        },
        {
            character: 'yuki',
            text: 'Watashi wa Yuki desu.',
            kanji: '私はユキです。',
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
            kanji: 'はじめまして。',
            en: 'Nice to meet you.',
            jpTokens: [{ text: 'Hajimemashite.', color: '#6366f1' }],
            enTokens: [{ text: 'Nice to meet you.', color: '#6366f1' }]
        },
        {
            character: 'kenji',
            text: 'Kenji desu.',
            kanji: 'ケンジです。',
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
            kanji: 'よろしくお願いします。',
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
            kanji: 'こちらこそ、よろしく。',
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
    { jp: 'Konnichiwa', kanji: 'こんにちは', en: 'Hello' },
    { jp: 'Arigatou', kanji: 'ありがとう', en: 'Thank you' },
    { jp: 'Sayounara', kanji: 'さようなら', en: 'Goodbye' },
    { jp: 'Sumimasen', kanji: 'すみません', en: 'Excuse me' },
    { jp: 'Onegaishimasu', kanji: 'お願いします', en: 'Please' },
    { jp: 'Hajimemashite', kanji: 'はじめまして', en: 'Nice to meet you' },
    { jp: 'Genki', kanji: '元気', en: 'Fine' },
    { jp: 'Ohayou', kanji: 'おはよう', en: 'Good morning' },
    { jp: 'Konbanwa', kanji: 'こんばんは', en: 'Good evening' },
    { jp: 'Oyasumi', kanji: 'おやすみ', en: 'Good night' }
];

const quizData = [
    {
        sentenceJp: 'Tanaka-san, ___!',
        kanji: '田中さん、こんにちは！',
        correctJp: 'こんにちは',
        sentenceEn: 'Hello, Mr. Tanaka!',
        correct: 'Konnichiwa',
        options: ['Konnichiwa', 'Sayounara', 'Arigatou', 'Sumimasen']
    },
    {
        sentenceJp: 'Hontou ni ___ gozaimasu.',
        kanji: '本当にありがとうございます。',
        correctJp: 'ありがとう',
        sentenceEn: 'Thank you very much.',
        correct: 'Arigatou',
        options: ['Ohayou', 'Arigatou', 'Oyasumi', 'Genki']
    },
    {
        sentenceJp: 'Sumimasen, ___!',
        kanji: 'すみません、お願いします！',
        correctJp: 'お願いします',
        sentenceEn: 'Excuse me, please!',
        correct: 'Onegaishimasu',
        options: ['Sumimasen', 'Ohayou', 'Onegaishimasu', 'Hajimemashite']
    },
    {
        sentenceJp: 'O-namae wa ___ desu ka?',
        kanji: 'お名前は何ですか？',
        correctJp: '何',
        sentenceEn: 'What is your name?',
        correct: 'Nan',
        options: ['Nan', 'Doko', 'Dare', 'Itsu']
    },
    {
        sentenceJp: 'Watashi wa ___ desu.',
        kanji: '私は元気です。',
        correctJp: '元気',
        sentenceEn: 'I am fine.',
        correct: 'Genki',
        options: ['Samui', 'Genki', 'Atsui', 'Nemui']
    }
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

// Quiz Elements
const quizView = document.getElementById('quiz-view');
const quizSentenceJp = document.getElementById('quiz-sentence-jp');
const quizSentenceEn = document.getElementById('quiz-sentence-en');
const quizOptions = document.getElementById('quiz-options');
const quizFeedback = document.getElementById('quiz-feedback');
const quizProgressBar = document.getElementById('quiz-progress-bar');
const showQuizBtn = document.getElementById('show-quiz');
const quizSubtitle = document.getElementById('quiz-subtitle');
const quizInputContainer = document.getElementById('quiz-input-container');
const quizUserInput = document.getElementById('quiz-user-input');
const quizSubmitBtn = document.getElementById('quiz-submit-btn');
const quizSpeechContainer = document.getElementById('quiz-speech-container');
const quizMicBtn = document.getElementById('quiz-mic-btn');
const diffButtons = document.querySelectorAll('.diff-btn');
const showScenariosBtn = document.getElementById('show-scenarios');
const showFlashcardsBtn = document.getElementById('show-flashcards');
const showVocabBtn = document.getElementById('show-vocab');

// Vocabulary Elements
const vocabView = document.getElementById('vocab-view');
const vocabGrid = document.getElementById('vocab-grid');

let flashDeck = [...flashcardsData];

// Quiz State
let currentQuizIndex = 0;
let quizQuestionsOrder = [];
let quizDifficulty = 'easy';

// Flashcard Scoring
let flashScores = JSON.parse(localStorage.getItem('flashScores')) || {};
let lastShownCardJp = null;
let autoplayEnabled = localStorage.getItem('flashAutoplay') !== 'false';
let scenarioAutoplayEnabled = localStorage.getItem('scenarioAutoplay') !== 'false';
const lastShownTimes = {}; // Track when each word was last shown in memory
const COOLDOWN_MS = 60000; // 1 minute

const scenarioAutoplayToggle = document.getElementById('scenario-autoplay-toggle');
if (scenarioAutoplayToggle) {
    scenarioAutoplayToggle.checked = scenarioAutoplayEnabled;
}

if (flashAutoplayToggle) {
    flashAutoplayToggle.checked = autoplayEnabled;
}

function speakJapanese(text, activeBtn = null) {
    if (!window.speechSynthesis) return;

    // Stop any current speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';

    // Voices are loaded asynchronously
    const voices = window.speechSynthesis.getVoices();

    // Selection Strategy:
    // 1. Look for 'Kyoko' (Common high-quality macOS voice)
    // 2. Look for any 'ja-JP' native voice
    // 3. Look for any 'ja' voice

    let voice = voices.find(v => v.name.includes('Kyoko')) ||
        voices.find(v => v.lang === 'ja-JP' && !v.localService) || // Prefer online high-quality if any
        voices.find(v => v.lang === 'ja-JP') ||
        voices.find(v => v.lang.includes('ja'));

    if (voice) {
        utterance.voice = voice;
        // console.log(`Selected voice: ${voice.name}`);
    } else {
        // console.warn('No Japanese voice found, falling back to browser defaults.');
    }

    utterance.rate = 0.9; // Slightly slower for better clarity
    utterance.pitch = 1.0;

    utterance.onstart = () => {
        if (activeBtn) activeBtn.classList.add('playing');
        else if (flashAudioBtn) flashAudioBtn.classList.add('playing'); // Check if flashAudioBtn exists
    };
    utterance.onend = () => {
        if (activeBtn) activeBtn.classList.remove('playing');
        else if (flashAudioBtn) flashAudioBtn.classList.remove('playing');
    };
    utterance.onerror = (e) => {
        console.error('Speech synthesis error:', e);
        if (activeBtn) activeBtn.classList.remove('playing');
        else if (flashAudioBtn) flashAudioBtn.classList.remove('playing');
    };

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

    // Auto-play scenario audio if enabled (Only in WATCH mode)
    if (scenarioAutoplayEnabled && mode === 'WATCH') {
        const bubble = bubbles[s.character];
        const btn = bubble.querySelector('.bubble-audio-btn');
        speakJapanese(s.kanji || s.text, btn);
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
    feedback.textContent = "Excellent!";
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

    const now = Date.now();
    let cardIndex = 0;

    // Search for the best candidate considering cooldown
    // Iterate through the sorted deck (best to worst ratio)
    for (let i = 0; i < flashDeck.length; i++) {
        const wordJp = flashDeck[i].jp;
        const lastShown = lastShownTimes[wordJp] || 0;

        // Pick the first one that satisfies cooldown AND isn't the immediate repeat
        if ((now - lastShown) >= COOLDOWN_MS && wordJp !== lastShownCardJp) {
            cardIndex = i;
            break;
        }
    }

    // If no candidate satisfies cooldown, pick the one shown longest ago
    if (cardIndex === 0 && flashDeck.length > 1) {
        const wordJp = flashDeck[0].jp;
        const lastShown = lastShownTimes[wordJp] || 0;

        if ((now - lastShown) < COOLDOWN_MS || wordJp === lastShownCardJp) {
            // Find the word with the smallest timestamp (oldest)
            let oldestIndex = 0;
            let oldestTime = Infinity;

            for (let i = 0; i < flashDeck.length; i++) {
                const t = lastShownTimes[flashDeck[i].jp] || 0;
                if (t < oldestTime && flashDeck[i].jp !== lastShownCardJp) {
                    oldestTime = t;
                    oldestIndex = i;
                }
            }
            cardIndex = oldestIndex;
        }
    }

    // Move the selected candidate to the top if it's not already there
    if (cardIndex !== 0) {
        const [selected] = flashDeck.splice(cardIndex, 1);
        flashDeck.unshift(selected);
    }

    const card = flashDeck[0];
    lastShownCardJp = card.jp;
    lastShownTimes[card.jp] = now;

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
        speakJapanese(card.kanji || card.jp);
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

function switchMode(newMode) {
    homeView.classList.add('hidden');
    lessonView.classList.add('hidden');
    flashcardView.classList.add('hidden');
    quizView.classList.add('hidden');

    document.getElementById('show-scenarios').classList.remove('active');
    document.getElementById('show-flashcards').classList.remove('active');
    document.getElementById('show-quiz').classList.remove('active');
    document.getElementById('show-vocab').classList.remove('active');

    homeView.classList.add('hidden');
    lessonView.classList.add('hidden');
    flashcardView.classList.add('hidden');
    quizView.classList.add('hidden');
    vocabView.classList.add('hidden');

    if (newMode === 'scenarios') {
        renderHome();
        homeView.classList.remove('hidden');
        document.getElementById('show-scenarios').classList.add('active');
    } else if (newMode === 'flashcards') {
        flashcardView.classList.remove('hidden');
        document.getElementById('show-flashcards').classList.add('active');
        showFlashcard();
    } else if (newMode === 'quiz') {
        quizView.classList.remove('hidden');
        document.getElementById('show-quiz').classList.add('active');
        startQuiz();
    } else if (newMode === 'vocabulary') {
        vocabView.classList.remove('hidden');
        document.getElementById('show-vocab').classList.add('active');
        renderVocabulary();
    }
}

function renderVocabulary() {
    vocabGrid.innerHTML = '';
    flashcardsData.forEach(word => {
        const card = document.createElement('div');
        card.className = 'vocab-card';
        card.innerHTML = `
            <div class="vocab-audio-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
            </div>
            <div class="vocab-jp">${word.kanji || word.jp}</div>
            <div class="vocab-romaji">${word.jp}</div>
            <div class="vocab-en">${word.en}</div>
        `;
        card.onclick = () => speakJapanese(word.kanji || word.jp);
        vocabGrid.appendChild(card);
    });
}

function startQuiz() {
    currentQuizIndex = 0;
    quizQuestionsOrder = [...quizData].sort(() => Math.random() - 0.5);
    updateQuizDifficultyUI();
    showQuizQuestion();
}

function updateQuizDifficultyUI() {
    diffButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.diff === quizDifficulty);
    });

    if (quizDifficulty === 'easy') {
        quizSubtitle.textContent = "Fill in the blank with the correct word";
        quizOptions.classList.remove('hidden');
        quizInputContainer.classList.add('hidden');
        quizSpeechContainer.classList.add('hidden');
    } else if (quizDifficulty === 'normal') {
        quizSubtitle.textContent = "Type the missing word in Romaji";
        quizOptions.classList.add('hidden');
        quizInputContainer.classList.remove('hidden');
        quizSpeechContainer.classList.add('hidden');
        quizUserInput.value = '';
        quizUserInput.focus();
    } else if (quizDifficulty === 'hard') {
        quizSubtitle.textContent = "Speak the missing word into the microphone";
        quizOptions.classList.add('hidden');
        quizInputContainer.classList.add('hidden');
        quizSpeechContainer.classList.remove('hidden');
    }
}

function showQuizQuestion() {
    if (currentQuizIndex >= quizQuestionsOrder.length) {
        quizFeedback.textContent = "Quiz Complete! Fantastic work.";
        quizFeedback.className = "feedback success";
        setTimeout(() => switchMode('scenarios'), 3000);
        return;
    }

    const q = quizQuestionsOrder[currentQuizIndex];
    quizSentenceJp.textContent = q.sentenceJp;
    quizSentenceEn.textContent = q.sentenceEn;
    quizFeedback.textContent = "";
    quizFeedback.className = "feedback";

    // Update Progress
    const progress = (currentQuizIndex / quizQuestionsOrder.length) * 100;
    quizProgressBar.style.width = `${progress}%`;

    if (quizDifficulty === 'easy') {
        quizOptions.innerHTML = '';
        const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
        shuffledOptions.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.onclick = () => checkQuizAnswer(opt, btn);
            quizOptions.appendChild(btn);
        });
    } else if (quizDifficulty === 'normal') {
        quizUserInput.value = '';
        quizUserInput.focus();
        quizSubmitBtn.onclick = () => checkQuizAnswer(quizUserInput.value.trim());
    } else if (quizDifficulty === 'hard') {
        initSpeechRecognition();
    }
}

let recognition = null;
function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        quizFeedback.textContent = "Speech recognition is not supported in this browser.";
        quizFeedback.className = "feedback error";
        return;
    }

    if (!recognition) {
        recognition = new SpeechRecognition();
        recognition.lang = 'ja-JP';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            quizMicBtn.classList.add('recording');
            document.querySelector('.mic-status').textContent = 'Listening...';
        };

        recognition.onend = () => {
            quizMicBtn.classList.remove('recording');
            document.querySelector('.mic-status').textContent = 'Click to speak';
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            checkQuizAnswer(transcript);
        };

        recognition.onerror = (event) => {
            if (event.error !== 'no-speech') {
                quizFeedback.textContent = "Speech error. Try again!";
                quizFeedback.className = "feedback error";
            }
        };
    }

    quizMicBtn.onclick = () => {
        try {
            recognition.start();
        } catch (e) {
            // Already started
        }
    };
}

// Difficulty changes
diffButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        quizDifficulty = btn.dataset.diff;
        startQuiz(); // Restart with new difficulty
    });
});

function checkQuizAnswer(selected, btn = null) {
    const q = quizQuestionsOrder[currentQuizIndex];

    let isCorrect = false;
    const cleanSelected = selected.toLowerCase().replace(/[!,?.]/g, '').trim();

    if (quizDifficulty === 'hard') {
        // Recognition returns Japanese script. Compare against correctJp
        const cleanCorrectJp = q.correctJp.replace(/[!,?.]/g, '').trim();
        isCorrect = cleanSelected === cleanCorrectJp || cleanSelected.includes(cleanCorrectJp);
    } else {
        const cleanCorrectRomaji = q.correct.toLowerCase().replace(/[!,?.]/g, '').trim();
        isCorrect = cleanSelected === cleanCorrectRomaji;
    }

    if (quizDifficulty === 'easy' && btn) {
        const allBtns = quizOptions.querySelectorAll('.option-btn');
        allBtns.forEach(b => b.style.pointerEvents = 'none');
    }

    // Play pronunciation as feedback
    speakJapanese(q.kanji);

    if (isCorrect) {
        if (btn) btn.classList.add('correct');
        quizFeedback.textContent = "Correct!";
        quizFeedback.className = "feedback success";

        setTimeout(() => {
            currentQuizIndex++;
            showQuizQuestion();
        }, 1500);
    } else {
        if (btn) btn.classList.add('wrong');
        quizFeedback.textContent = `Not quite. The correct answer was "${quizDifficulty === 'hard' ? q.correctJp : q.correct}".`;
        quizFeedback.className = "feedback error";

        if (quizDifficulty === 'easy') {
            const allBtns = quizOptions.querySelectorAll('.option-btn');
            allBtns.forEach(b => {
                if (b.textContent === q.correct) b.classList.add('correct');
            });
        }

        setTimeout(() => {
            currentQuizIndex++;
            showQuizQuestion();
        }, 2500);
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
showQuizBtn.addEventListener('click', () => switchMode('quiz'));
showVocabBtn.addEventListener('click', () => switchMode('vocabulary'));

// Scenario Audio Events
document.querySelectorAll('.bubble-audio-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const scenario = scenarios[currentStep];
        if (scenario) {
            speakJapanese(scenario.kanji || scenario.text, btn);
        }
    });
});

if (scenarioAutoplayToggle) {
    scenarioAutoplayToggle.addEventListener('change', (e) => {
        scenarioAutoplayEnabled = e.target.checked;
        localStorage.setItem('scenarioAutoplay', scenarioAutoplayEnabled);
    });
}

// Flashcard Audio Events
flashAudioBtn.addEventListener('click', () => {
    if (flashDeck.length > 0) {
        speakJapanese(flashDeck[0].kanji || flashDeck[0].jp);
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

quizUserInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkQuizAnswer(quizUserInput.value.trim());
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
