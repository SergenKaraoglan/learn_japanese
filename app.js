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
    ]
};

const availableScenarios = [
    {
        id: 'greetings',
        title: 'Greetings',
        description: 'Learn basic greetings and how to ask how someone is doing.',
        difficulty: 'Beginner'
    }
];

let scenarios = [];
let currentStep = 0;
let mode = 'WATCH'; // 'WATCH', 'REPEAT'
let currentPlayer = 'yuki'; // Who the user is currently playing

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
        const card = document.createElement('div');
        card.className = 'scenario-card';
        card.innerHTML = `
            <span class="badge">${scen.difficulty}</span>
            <h3>${scen.title}</h3>
            <p>${scen.description}</p>
        `;
        card.onclick = () => startLesson(scen.id);
        scenarioGrid.appendChild(card);
    });
}

function startLesson(scenarioId) {
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
