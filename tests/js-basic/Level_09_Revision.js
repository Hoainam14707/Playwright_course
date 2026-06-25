
console.log("===================== Ex 01 ==========================")
/*
1. Tạo file ex1.js để giải bài sau:
a. Khai báo một hằng số number với giá trị là 12.
b. Khai báo một biến name với giá trị là ”my number”
c. Khai báo một biến isEven với giá trị là sai.
d. Kiểm tra nếu number là số chẵn, gán lại isEven thành giá trị đúng.
*/

const number = 12;
const label = "my number";
let isEven = false;

if (number % 2 === 0) {
    isEven = true;
}

console.log(`Ex 01: ${isEven}`);

console.log("===================== Ex 02 ==========================")
/*
Tạo file ex2.js, kiểm tra đoạn code sau sai ở đâu, sửa lại cho đúng và đưa nội dung
đáp án vào file:
const myName = "Alex";
myName ="Nagi";
console.log(myName);
*/

var myName = "Alex";
myName = "Nagi"
console.log(myName);

console.log("===================== Ex 03 ==========================")

/* 
 Tạo file ex3.js, thêm vào code đáp án cho đề bài sau:
a. Khai báo một hằng số với giá trị kiểu Number bất kỳ.
b. In ra dòng sau ở console:
i. Nếu hằng số lớn hơn 0: “Giá trị bạn nhập là số dương”
ii. Nếu hằng số nhỏ hơn 0: “Giá trị bạn nhập là số âm”
iii. Nếu hằng số = 0: “Giá trị bạn nhập là số 0”
*/

const a = 0;
if (a > 0) {
    console.log(`${a} là số dương`)
} else if (a < 0) {
    console.log(`${a} là số âm`)

} else {
    console.log(`${a} là số 0`)
}

console.log("===================== Ex 04 ==========================")
/*
Các thông số sức khỏe được tính như sau:
Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
Mức cân tối đa = Bằng số lẻ của chiều cao (tính bằng cm)
Mức cân tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10
Như vậy, nếu bạn cao 1,7m, tức 170cm thì :
Cân cân nặng lý tưởng của bạn là: 70 x 9: 10 = 63 kg
Cân nặng tối đa là: 70kg
Cân nặng tối thiểu là: 70 x 8 :10 = 56 kg

Tạo file ex4.js, thêm vào code đáp án cho đề bài sau:
a. Khai báo chiều cao của bạn (cm)
b. In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng một dòng.
*/

var height = 170;
var weight;

var weight_per = (height - 100) * 9 / 10;
var weght_max = height - 100;
var weight_min = (height - 100) * 8 / 10;

console.log(`cân nặng lý tưởng: ${weight_per} `)
console.log(`cân nặng tối đa: ${weght_max} `)
console.log(`cân nặng tối thiểu: ${weight_min} `)

console.log("===================== Ex 05 ==========================")
/*
Tạo file ex5.js, thêm vào code đáp án cho đề bài sau:
a. Lặp từ 1 tới 100
b. Trong mỗi vòng lặp, in ra:
i. Nếu giá trị của vòng lặp chia hết cho 2, in “Số <i> là số chẵn”
ii. Nếu giá trị của vòng lặp không chia hết cho 2, in “Số <i> là số lẻ”
*/

for (var i = 1; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`${i} là số chẵn`)
    } else {
        console.log(`${i} là số lẻ`)
    }
}

console.log("===================== Ex 05 ==========================")
/*
Tạo file ex7.js, thêm vào code đáp án cho đề bài sau:
a. In ra các giá trị chia hết cho 3 từ 1000 đến 2000
*/

for (var i = 1000; i < 2000; i++) {
    if (i % 3 === 0) {
        console.log(i + "chia hết cho 3")
    }
}

console.log("===================== Ex 06 ==========================")
/*
Tạo file ex8.js, thêm vào code đáp án cho đề bài sau:
a. In các giá trị cách nhau 4 đơn vị từ 1 đến 100.
i. VD: 1, 5, 9, 13,...
*/
for (var i = 1; i < 100; i += 4) {
    console.log(i)
}

console.log("===================== Ex 07 ==========================")
/*
Tạo file ex9.js, thêm vào code đáp án cho đề bài sau:
a. In ra các giá trị từ 25 về 12
i. VD: 25, 24, 23, 22, 21,..., 12
*/
for (var i = 25; i > 0; i--) {
    console.log(i)
}
