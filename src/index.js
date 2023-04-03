// DOM Refs

const refs = {
    questionBtn: document.querySelector('#question-btn'),
    stickyBtn: document.querySelector('#sticky-btn'),
    planeBtn: document.querySelector('#plane-btn'),
    planePage: document.querySelector('#plane-js'),
    stickPage: document.querySelector('#sticky-js'),
    questionPage: document.querySelector('#question-js')
};

// helper functions to add and remove elements from DOM

const navToQuestions = () => {
    planePage.classList.add('hidden');
    stickyPage.classList.add('hidden');
    questionBtn.classList.add('hidden');
    stickyBtn.classList.remove('hidden');
};

// event listeners

refs.questionBtn.addEventListener('click', navToQuestions);



