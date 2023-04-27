// запускать каждый раз как ответили на вопрос но еще не отправили ответ
const getQuestion = () => {
    const name = 'questions';
    const array = JSON.parse(localStorage.getItem(name) ?? '[]');
    
    const obj = {
        title: document.querySelector('.qtext').innerText,
        answers: [...document.querySelector('.answer').childNodes].filter((el) => el.data != '\n').reduce((array, el) => {
            return [...array, {
                html: el.querySelector('div.d-flex').innerHTML,
                isTrue: el.querySelector('input').checked,
            }];
        }, []),
        isTrue: false,
    };

    console.log(obj);

    array.push(obj);

    localStorage.setItem(name, JSON.stringify(array));
};
getQuestion();


// запустить один раз в начале (очищает хранилище)
localStorage.setItem('questions', '[]');


// вывести все что сохранено
localStorage.getItem('questions');
