var num = 'Hello1';
document.write(num);
console.log(num);
window.alert(num);

var num1, num2, num3;
num1 = 10;
num2 = 20;
num3 = num1 + num2;

document.write('<br>' + 'result ' + num3 + '입니다.');

document.write("<ul>");
for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        document.write(`<li>result i is ${i}입니다.</li>`);
        console.log('result i is' + i + '입니다.');
    }
}
document.write("</ul>")

var titleAry = ['이름', '국어', '영어', '수학'];
var nameAry = ['신발', '수박', '소박'];

// document.write('<table border="1">');
// document.write('<tr>');
// for (var i = 0; i < titleAry.length; i++) {
//     document.write('<th>' + titleAry[i] + '</th>');
// }
// document.write('</tr>');
// for (var i = 0; i < nameAry.length; i++) {
//     document.write('<tr>');
//     document.write('<td style="background-color:red;">' + nameAry[i] + '</td>');
//     for (var j = 0; j < 3; j++) {
//         document.write('<td>' + (j + 10) + '</td>')
//     }

//     document.write('</tr>');
// }
// document.write('</table>');

var dateAry = ['일','월','화','수','목','금','토'];
document.write('<table border="1">');

document.write('<tr>');
for(var i = 0; i<dateAry.length; i++){
    document.write('<th>' + dateAry[i] + '</th>');
}
document.write('</tr>')
var num4 = 0;
for(var i=1; i<=5; i++){
    document.write('<tr>');
    for(var j=num4; j<=30; j++ ){
        if(j==0){
            document.write('<td>' + ' ' + '</td>');
        } else{
        document.write('<td>' + j + '</td>');
        }
        if(j==6){
            num4 = ++j; 
            break;
        } else if(j==13 || j==20 || j==27){
            num4 = ++j; 
            break;
        }
        
    }
    
    document.write('</tr>');
}

document.write('</table>');


// var dateAry = ['일','월','화','수','목','금','토'];
// document.write('<table border="1">');

// document.write('<tr>');
// for(var i = 0; i<dateAry.length; i++){
//     document.write('<th>' + dateAry[i] + '</th>');
// }
// document.write('</tr>')
// document.write('<tr>');
// for(var i=1; i<=31; i++){
//     document.write('<td>'+i+'</td>')
//     if(i==6){
//         document.write('<td style="background-color:blue;">'+i+'</td>')
//         document.write('</tr> <tr>');
//     }
    
// }
// document.write('</tr>');



document.write('</table>');