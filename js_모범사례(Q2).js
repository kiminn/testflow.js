/* !!스코프(유효범위)
변수 위치 찾기
변수 a는 main 함수 안에서 사용된다 -> 변수 a는 매개변수다
변수 b는 dom api selector로 다른 이벤트에서 사용된다
변수 c는 메인 함수 안에서 실행되는 콜백함수 solution의 인자이다
변수 d는 솔루션 함수에서 전달받은 c를 다른 형태로 바꿔준다.
변수 e는 main함수의 최종 반환 값으로 향후 다른 함수에서 재사용된다.  -> 최종반환 값. 재사용.
*/

/*
 * 배열의 고차함수
    고차함수는 함수를 인자를 전달받거나 함수를 결과로 반환하는 함수

    * callback function(콜백함수)
        부모 함수의 인자<ex)function(a,b)>에 자식 함수가 전달되어 부모 함수가 자식 함수에게 매개변수를
        전달하고 실행하는 함수를 말한다.

    함수는 호출될 때 사용자로부터 재료를 받아서
    재료를 토대로 기능을 수행할 수 있다!
    => 이러한 재료를 '인자(argument)'라 한다.

 */

let b = document.getElementsByName("b"); //?

function solution(c) {
  let d = 0;
  c(d);

}
function parse() { // parse : 어떤 데이터 형태를 다른 데이터로 바꿔주는 것
  let b = 
 
}
function main() {
  let a = 0;
  console.log(a);
  solution(c);
}
