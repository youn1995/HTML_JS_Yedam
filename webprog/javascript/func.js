var num;
document.write(typeof num + '<br>'); //undifined도 일종의 타입임
num = null; // null은 오브젝트타입.
document.write(typeof num + '<br>');
num = 10;
document.write(typeof num + '<br>');
num = 'nice';
document.write(typeof num + '<br>');
num = {
    name: "hong",
    age: 10
};
document.write(typeof num);

var num1, num2; //자바스크립트에서는 var 선언이 뒤에 나와도 상관없음 undifined 두개를 합하면 no a number가 나옴
// num1 = 10;
// num2 = 15;

num1 = "HEeleleleeoeooe";
num2 = 15;
num3 = 30;
//첫번째가 문자면 뒤에는 문자열로 인식함 하지만 우선순위를 지정해서 하면 숫자끼리 더하고 문자열과 합해짐
num = num1 + (num2 + num3); // 문자열과 숫자를 더하면 숫자를 문자열로 인식함
console.log(num);

num3 = "15";
console.log(num2 == num3);
console.log(num2 === num3);
console.log(num2 !== num3);

var sum =0;
// for(var i = 0; i<10; i++){
//     if(i<5)
//         continue;
//     sum = sum + i;
// }
var i =0; 
for(; i<10; i++){ // 밖에서 선언 하면 for 밖에서도 i를 쓸수있음
    if(i<5)
        continue;
    sum = sum + i;
}
console.log("합계:" + sum);


var $sum = 10;
var _sum= 20;
