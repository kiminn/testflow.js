// 5, 6번 문제

console.log('자바스크립트 파일을 html로 로드하였음');

// 검색: html line through text
function handleSingleClick(e) {
    const singleItem = document.getElementById(e.id); // id
    singleItem.classList.toggle('mystyle');
}

function handleUpdate(e) {
    const singleItem = document.getElementById(e.id).previousSibling; // 앞에 형제 선택 같은 노드!
    singleItem.style.visibility = 'hidden';

    const updateInput = document.createElement('input');
    updateInput.setAttribute('id', 'update-input');
    updateInput.value = singleItem.innerHTML;

    // singleItem의 부모노드에 와서 singleItem앞에 updateInput을 넣겠다
    singleItem.parentNode.insertBefore(updateInput, singleItem);

    const updateButton = document.getElementById(e.id);
    updateButton.setAttribute('onclick', 'handleUpdateConfirm(this)');
}

// 수정 버튼
function handleUpdateConfirm(e) {
    // 수정버튼 눌렀을 때 한 개에서만 이루어지도록
    const updateInput = document.getElementById('update-input');

    const singleItem = document.getElementById(e.id).previousElementSibling;
    singleItem.innerHTML = updateInput.value; // 값을 update input값으로 바꾸기
    singleItem.style.visibility = 'visible'; // 보이게

    const updateButton = document.getElementById(e.id);
    updateButton.setAttribute('onclick', 'handleUpdate(this)');
    updateInput.remove(); // updateInput 사라지게
}

function handleDelete(e) {
    const singleItem = document.getElementById(e.id).parentElement; // li 선택되도록
    singleItem.remove();
}

function addItem() {
    console.log('addItem 실행');
    const itemInput = document.getElementById('item-input');
    const content = itemInput.value;
    if (content) {
        console.log('내용O');

        const mylist = document.getElementById('list');
        console.log(mylist.getElementsByTagName('li').length);
        // id=list 인 li의 개수 세기
        let list_num = mylist.getElementsByTagName('li').length + 1;
        // list 각각에 속성을 부여가능

        const newList = document.createElement('li');

        const newText = document.createElement('p');
        newText.innerText = content;
        newText.setAttribute('onclick', 'handleSingleClick(this)');
        newText.setAttribute('id', `${list_num}th-item`); // 새로운 id값 추가하여 줄 끄어지게 가능
        newList.appendChild(newText);

        // 수정 버튼 만들기
        const updateButton = document.createElement('button');
        updateButton.innerHTML = '수정';
        updateButton.setAttribute('onclick', 'handleUpdate(this)');
        updateButton.setAttribute('id', `${list_num}th-item-update-button`);
        newList.appendChild(updateButton);

        // 삭제 버튼 만들기
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '삭제';
        deleteButton.setAttribute('onclick', 'handleDelete(this)');
        deleteButton.setAttribute('id', `${list_num}th-item-delete-button`);
        newList.appendChild(deleteButton);

        mylist.append(newList);

        itemInput.value = '';
        // 입력 후 텍스트 상자 비어있게
    } else {
        console.log('내용X');
        alert('값을 입력하세요');
    }
}
// 검색: input value js 어떻게 input에 value값을 가져올수 있을까?
