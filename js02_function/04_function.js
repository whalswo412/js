// 코드 정렬[Alt + Shift + F]
/*
    자바스크립트에서는 함수를 '일급 객체'로 취급한다.(마치 변수처럼 취급한다.)
    - 함수를 변수에 할당할 수 있다.
    - 함수를 다른 함수의 인자로 전달할 수 있다.
    - 함수를 다른 함수의 반환값으로 사용할 수 있다.
*/

// 1. 함수 선언(함수 정의)
function gugudan() {
    for (let i = 1; i <= 9; i++) {
        console.log(`2 * ${i} = ${2 * i}`);
    }
}
// 함수 호출
gugudan();

console.log('=============================================');

// 2. 함수 표현식(함수 리터럴)
const gugudan2 = function () {
    for (let i = 1; i <= 9; i++) {
        console.log(`3 * ${i} = ${3 * i}`); // 백틱(`)을 사용하여 문자열을 표현
    }
};   // 세미콜론(;)을 붙여줘야 한다.

gugudan2(); // 함수 호출

console.log('=============================================');

// 3. 화살표 함수(arrow function)
const gugudan3 = () => {
    for (let i = 1; i <= 9; i++) {
        console.log(`4 * ${i} = ${4 * i}`); // 백틱(`)을 사용하여 문자열을 표현
    }
};
// 함수 호출
gugudan3();