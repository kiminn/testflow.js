/* 
레시피 재료 추가하기
*/
const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', (e) => {
    event.preventDefault();
});

const addItem = document.querySelector('button');
addItem.addEventListener('click', append);

let inputName = document.getElementById('input-name');
let inputWeight = document.getElementById('input-weight');
let showTbl = document.getElementById('show-tbl');
const nameList = [];
const weightList = [];

// 추가
function append() {
    console.log('추가');
    let obj = {
        name: inputName.value,
        id: randomID(),
    };
    // push
    nameList.push(obj['name']);
    weightList.push(inputWeight.value);
    // result 객체를 생성
    const result = {};
    // itemList 배열을 순회하며 item.value를 key, item.value의 갯수를 value로 가지는 객체를 생성
    // 중복 값 https://hianna.tistory.com/459
    nameList.forEach((x) => {
        result[x] = (result[x] || 0) + 1;
    });
    console.log(inputName.value);
    console.log(inputWeight.value);
    console.log(result);

    // item.value의 value가 1이 아닐경우(2이상)
    if (!(result[inputName.value] === 1)) {
        // 중복값 발생시 itemList에 마지막 인덱스(중복값)을 제거
        nameList.pop();
        weightList.pop();
        // 중복값 발생시 요소를 추가하지 않고 alert()를 return
        return alert('이미 존재하는 재료입니다.');
    }

    const content1 = inputName.value;
    const content2 = inputWeight.value;

    // https://zetawiki.com/wiki/자바스크립트_HTML_테이블_행_추가/삭제
    let newRow = showTbl.insertRow(showTbl.rows.length); // 하단에 추가
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    cell1.innerHTML = content1;
    cell2.innerHTML = content2;
    // 삭제 이벤트 부분 수정하기
    const deleteBtn = document.createElement('button');
    deleteBtn.addEventListener('click', deleteRow);
    deleteBtn.innerText = '가영님 바보';
    cell3.append(deleteBtn);
}

// 이부분 잘모르겠음 (????????)
function randomID() {
    return Math.random().toString(36).substr(2, 16);
}

// 삭제
function deleteRow() {
    console.log('삭제');
    if (showTbl.rows.length < 1) return;
    showTbl.deleteRow(showTbl.rows.length - 1); // 하단부터 삭제
}

// function submit() -> html에서 바로 사용 불가 이렇게 바꾸기
const $button = document.querySelector('#submit_button');
$button.addEventListener('click', submit);

// 제출 {key : value} 가져오기
function submit() {
    console.log('제출');
    let submitList = document.querySelector('#ingredient-list');
    const ingredient = document.getElementById('input-name').value;
    const weight = document.getElementById('input-weight').value;
    const newList = document.createElement('li');
    console.log(newList);

    const spanElement = document.createElement('span');
    const span2Element = document.createElement('span');

    spanElement.innerHTML = `${ingredient} : `;
    span2Element.innerHTML = weight;

    newList.append(spanElement);
    newList.append(span2Element);

    submitList.append(newList);
}
