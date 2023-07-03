function map(array, callback){
    //5
    for(let i=0; i<array.length; i++){
        // i=0;
        // i=1;
        callback(array[i], i)
        // array[0] // 1 -> 2
        // i // 0->1
    }
}

map([1,2,3,4,5], (el, i)=> {
    console.log(el, i)
    // 1, 0
    // 2, 1
})

// 콜백함수 -> 1. 익명함수 -> 실행문x, 즉시실행, 콜백함수

function addNumber (num1, num2) {
    return num1 + num2
}
addNumber(1,2)


/*
[1,2,3,4,5].map((number, index)=> {

})

*/