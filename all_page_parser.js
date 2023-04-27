const parse = (isTrue = true) => {    
    const data = [];

    document.querySelectorAll('.que').forEach((que) => {
        const obj = {
            title: que.querySelector('.qtext').innerText,
            answers: [...que.querySelector('.answer').childNodes].filter((el) => el.data != '\n').reduce((array, el) => {
                return [...array, {
                    html: el.querySelector('div.d-flex').innerHTML,
                    isTrue: el.querySelector('input').checked,
                }];
            }, []),
            isTrue,
        };

        data.push(obj);
    });

    console.log(data);
};
