'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
        return;
    }

    //TODO 診断結果表示エリアの作成
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
    //TODO ツイートエリアの作成
    removeAllChildren(tweetDivided);
};

const answers = [
    '{userName}のいいところは声です。',
    '{userName}のいいところは眼差しです。',
    '{userName}のいいところは情熱です。',
    '{userName}のいいところは厳しさです。',
    '{userName}のいいところは知識です。',
    '{userName}のいいところはユニークさです。',
    '{userName}のいいところは用心深さです。',
    '{userName}のいいところは見た目です。',
    '{userName}のいいところは決断力です。',
    '{userName}のいいところは思いやりです。',
    '{userName}のいいところは感受性です。',
    '{userName}のいいところは節度です。',
    '{userName}のいいところは好奇心です。',
    '{userName}のいいところは気配りです。',
    '{userName}のいいところは自制心です。',
    '{userName}のいいところは全てです。',
    '{userName}のいいところは優しさです。'
];

function assessment(userName){
    //TO DO 診断処理を実装する

    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++) {
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }

    const index = sumOfCharCode % answers.length;
    let result = answers[index];
    
    result = result.replace(/\{userName\}/g, userName);

    return result;
}

console.assert(
assessment('太郎') === assessment('太郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
);


/*
console.log(assessment('太郎'));
console.log(assessment('次郎'));
console.log(assessment('太郎'));
*/
