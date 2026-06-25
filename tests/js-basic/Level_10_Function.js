/*
Khái niệm hàm
Hàm là một khối code. Hàm thường được dùng để viết các đoạn logic lặp đi lặp lại.
Khai báo hàm
Cú pháp
function <tên_hàm(<danh_sách_tham_số>) {
// Code của hàm
}
Trong đó:
function: từ khoá khai báo hàm
<tên_hàm>: tên của hàm.
<danh sách tham số>: các tham số của hàm, cách nhau bởi dấu phẩy “”
Code của hàm: đoạn logic thực thi trong hàm.
*/

// Hàm không tham số
function sayHello() {
    console.log("Hello")
}

sayHello();

// Hàm có tham số
function describePerson(name, age, city) {
    console.log(name + " is " + age + " years old and lives in " + city + "");
}
describePerson("Bob", 30, "New York");

// Hàm có return
function add(a, b) { // a và b là tham số
    return a + b; // Trả về tổng của a và b
}
let sum = add(5, 3);
console.log(sum);
