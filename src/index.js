// DOM Refs

const refs = {
    questionBtn: document.querySelector('#question-btn-js'),
    stickyBtn: document.querySelector('#sticky-btn-js'),
    planeBtn: document.querySelector('#plane-btn-js'),

    questionBtnWrapper: document.querySelector('.question-js'),
    stickyBtnWrapper: document.querySelector('.sticky-js'),
    planeBtnWrapper: document.querySelector('.plane-js'),

    plane: document.querySelector('#plane-js'),
    questionPage: document.querySelector('#question-js'),
    stickyPage: document.querySelector('#sticky-js')
};

// helper functions to add and remove elements from DOM

const navToQuestionPage = () => {
    refs.plane.classList.add('hidden');
    refs.questionBtnWrapper.classList.add('hidden');
    refs.stickyBtnWrapper.classList.remove('hidden');
    refs.questionPage.classList.remove('hidden');
    console.log('test');
};

const navToStickyPage = () => {
    refs.stickyBtnWrapper.classList.add('hidden');
    refs.questionPage.classList.add('hidden');
    refs.planeBtnWrapper.classList.remove('hidden');
    refs.stickyPage.classList.remove('hidden');
    console.log('test two');
};

const navToPlanePage = () => {
    refs.planeBtnWrapper.classList.add('hidden');
    refs.stickyPage.classList.add('hidden');
    refs.questionBtnWrapper.classList.remove('hidden');
    refs.plane.classList.remove('hidden');
    console.log('test three');
};

// // event listeners

refs.questionBtn.addEventListener('click', navToQuestionPage);

refs.stickyBtn.addEventListener('click', navToStickyPage);

refs.planeBtn.addEventListener('click', navToPlanePage);


