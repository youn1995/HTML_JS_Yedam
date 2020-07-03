
function fun1() {
    document.getElementById("show").innerHTML = "HELLO?";
}
fun1();

var fun2 = function(str) { // 변수에 function정의문을 넣고 해당이름으로 실행
    document.getElementById("show").innerHTML = str;
}
fun2("heoeoeoe");


function outerFunc(func){
    func(2,3,4,5,6);//어떤 함수 정의문이 오던간에 func(이안에있는걸 써서 실행하겠다.)
}

function argsFunc(){
    var sum = 0;
    for(var i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    document.getElementById("show").innerHTML = sum;
}

outerFunc(argsFunc); //이게 아래의방식으로 실행하는 거임 but아래의 방식은 문법적으로 맞지않음.
// outerFunc(function argsFunc(2,3,4,5,6,9){
//     var sum = 0;
//     for(var i=0; i<arguments.length; i++){
//         sum += arguments[i];
//     }
//     document.getElementById("show").innerHTML = sum;
// })();

