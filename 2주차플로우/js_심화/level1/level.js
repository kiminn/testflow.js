import { BANK_LIST, ACCOUNT_FORM } from './account.js';

console.log(BANK_LIST);
console.log(ACCOUNT_FORM);

let myParent = document.getElementById('bank-selector');

const array = Object.values(BANK_LIST);

console.log(array);

//Create and append the options
for (let i = 0; i < array.length; i++) {
    let option = document.createElement('option');
    option.value = array[i];
    option.text = array[i];
    myParent.appendChild(option);
}






function addItem() {
    console.log('addItem 실행');
    const accountInput = document.getElementById('account-input');
    const content = accountInput.value;
    if (content) {
        console.log('input');

        const bankSelector = document.getElementById('bank-selector');
    }
}
