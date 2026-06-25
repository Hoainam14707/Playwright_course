/*
Khái niệm
Vòng lặp là cách chạy 1 đoạn logic 1 số lần nhất định.
*/

// Vòng lặp for
for (let i = 0; i < 10; i++) {
    console.log(i);
}

/* 
Trong đó:
-
Mệnh đề khởi tạo:let i = 0: khởi tạo biến i có giá trị là 0.
-
Mệnh đề điều kiện lặp: kiểm tra biến i < 100 thì mới chạy đoạn code nằm trong vòng
for
-
Mệnh đề thay đổi: i++: sau mỗi vòng lặp, mệnh đề này sẽ được chạy để tăng giá trị của
biến i lên 1 đơn vị.
-
Đoạn code trong vòng lặp: console.log(i): in ra giá trị của biến i.
*/

/* Vòng lặp forEach :
 Vòng lặp forEach dùng để lặp các phần tử trong mảng, khi bạn không cần lấy thứ tự
 của các phần tử
*/

// Cách viết 1:
let numberArr = [1, 20.5, -300, 4];
numberArr.forEach(number => {
    console.log(number)
});

// Cách viết 2:
numberArr.forEach(number => console.log(number))

/*
Giải thích:
numberArr: tên biến
-
number => { console.log(number)}: hàm callback chứa thông tin mảng.
-
Chú ý tới tên biến number, biến này đại diện cho các phần tử trong mảng. Ở mỗi
vòng lặp, biến number sẽ được gán giá trị của từng phần tử trong mảng.
*/


/* Vòng lặp for…in
Vòng lặp for..in thường được sử dụng khi bạn muốn lặp trong các thuộc tính của object.
*/

const student = {
    id: 1,
    name: "Alex",
    isGraduated: true
};
for (const property in student) {
    console.log(property) // => Lấy ra key của object
    console.log(student[property]) // => Lấy ra key và value của key
};

/* Vòng lặp for…of
Lặp qua các giá trị của mảng: for...of là cách đơn giản và rõ ràng để lặp qua tất cả các
giá trị trong một mảng, đặc biệt khi bạn không cần quan tâm đến chỉ số của từng phần
tử.
*/
const arr = [1, 3, 5, 2];
for (const item of arr) {
    console.log(item);
}

/*
Lặp qua các chuỗi: Chuỗi trong JavaScript cũng có thể được coi là một dãy các ký tự, vì
vậy bạn có thể sử dụng for...of để lặp qua từng ký tự trong chuỗi.
*/
const str = "Hello";
for (const char of str) {
    console.log(char); // => Kết quả là: H E L L O
}