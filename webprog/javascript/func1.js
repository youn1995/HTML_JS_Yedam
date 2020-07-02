
function sum(a, b) {
    console.log("이게 나오냐?")
    var sum = a + b;
    var result = document.getElementById("show"); //자바스크립트를 읽어오는 시점에는 show id가 정의가 안되어있어 모르지만
    //해당 함수는 onclick이벤트에서 실행되기 때문에 클릭이 발생하는 시점에서는 문서를 다읽었기 때문에 정상적으로 show라는 id를 알고있게됨
    result.innerHTML = sum;

}

function hi() {
    console.log("hi");
}

function hi() { //동일한 함수가 있으면 밑에 있는걸로 override됨
    console.log("overrided hi");
}

function sum() { //자바스크립트에서는 매개변수의 갯수와 상관없이 arguments를 이용해서 처리할수있음
    console.log("sum호출")
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}


function mySum() {
    var result = sum(2, 4, 5, 6, 7, 3);
    // var result = sum(2,4);
    console.log("결과: " + result);
}

function arraySum(ary) {
    var sum = 0;
    for (ar of ary) {
        sum += ar;
    }
    return sum;
}

function arrayTest() {
    var numAry = [3, 4, 5, 6, 7];
    var result = arraySum(numAry);
    console.log(result);
}

function funcTest(){
    funcTest1(helloFunc());
}

function funcTest1() {
    var hi = document.getElementById("hi").innerHTML;
    hi += "war";
    document.getElementById("hi").innerHTML = hi;
}
function helloFunc(){
    document.getElementById("hi").innerHTML = "hi?";
}