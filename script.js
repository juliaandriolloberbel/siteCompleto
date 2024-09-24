function submitQuiz() {
    let correctAnswers = {
        q1: "C",
        q2: "A",
        q3: "C",
        q4: "A",
        q5: "A",
        q6: "A",
        q7: "B",
        q8: "B",
        q9: "B",
        q10: "B",
    };

    let form = document.getElementById('quizForm');
    let score = 0;

    for (let key in correctAnswers) {
        let userAnswer = form.elements[key].value; 
        if (userAnswer === correctAnswers[key]) {
            score++;
        }    
    }
    
    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas!`;

    if (score === 10) {
        let successSound = document.getElementById('venceusom');
        successSound.play();
    } else {
        let lostSound = document.getElementById('perdeusom');
        lostSound.play();
    }

  
    document.querySelector('button[type="button"]').disabled = true; 
    document.getElementById('resetButton').style.display = 'inline';
}

function resetQuiz() {
    let form = document.getElementById('quizForm');
    form.reset();
    let options = form.querySelectorAll('input[type="radio"]');
    options.forEach(option => {
        option.disabled = false;
    });
    document.getElementById('result').innerHTML = '';
    document.querySelector('button[type="button"]').disabled = false; 
    document.getElementById('resetButton').style.display = 'none'; 
}
