import { RESERVATION_LIST } from './reservation .js';
console.log(RESERVATION_LIST);

let inputName;
let inputPhone;

const $button = document.querySelector('button');

$button.addEventListener('click', function () {
    console.log('submit실행');
    inputName = document.getElementById('input-name').value;
    inputPhone = document.getElementById('input-phone').value;
    console.log(inputName);
    console.log(inputPhone);

    let returnValue = RESERVATION_LIST.find(function (data) {
        return data.name === inputName && data.phone === inputPhone;
    });
    console.log(returnValue);

    let num;
    if (returnValue) {
        let num = returnValue['number'];
        console.log(num);
    } else {
        alert('일치하는 항목이 없습니다.');
    }

    let result = '';
    result += `<div>${num}</div>`;
    document.getElementById('reservation-number').innerHTML = result;

    if (inputName == '') {
        alert('이름을 입력하세요.');
    } else if (inputPhone == '') {
        alert('번호를 입력하세요.');
    }
});
