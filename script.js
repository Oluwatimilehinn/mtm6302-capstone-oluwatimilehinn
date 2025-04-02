const apiKey = '9UZPeZZTOu8cUSCMbXduLpgnkw7jYbnoqfP4BRZb';
const correctCountEl = document.getElementById('correct-count');
const incorrectCountEl = document.getElementById('incorrect-count');
let correctCount = 0;
let incorrectCount = 0;

document.getElementById('fetch-question').addEventListener('click', fetchQuestion);

function fetchQuestion() {
    fetch(`https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=1`)
        .then(response => response.json())
        .then(data => {
            displayQuestion(data[0]);
        })
        .catch(error => console.error('Error fetching question:', error));
}

function displayQuestion(questionData) {
    const container = document.getElementById('question-container');
    container.innerHTML = `<p>${questionData.question}</p>`;
    const answers = Object.entries(questionData.answers).filter(([key, value]) => value !== null);

    answers.forEach(([key, value]) => {
        const button = document.createElement('button');
        button.textContent = value;

        // Safely check for the correct answer
        button.addEventListener('click', () => {
            const isCorrect = questionData.correct_answers && questionData.correct_answers[`${key}_correct`] === 'true';
            checkAnswer(isCorrect);
        });

        container.appendChild(button);
    });
}

function checkAnswer(isCorrect) {
    const result = document.getElementById('result');
    if (isCorrect) {
        result.textContent = 'Correct!';
        result.style.color = 'green';
        correctCount++;
    } else {
        result.textContent = 'Incorrect!';
        result.style.color = 'red';
        incorrectCount++;
    }
    correctCountEl.textContent = correctCount;
    incorrectCountEl.textContent = incorrectCount;
}