const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

questions[0].classList.add('open');
answers[0].classList.add('open');

questions.forEach((question, i) =>{
    question.addEventListener('click',() => {
        question.classList.toggle('open');
        answers[i].classList.toggle('open');
    });
});