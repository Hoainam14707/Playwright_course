/*
Hàm util là các hàm nhỏ, có mục đích cụ thể, thường được sử dụng lại nhiều lần trong một dự
án. Chúng giúp làm cho code sạch hơn, dễ đọc và dễ bảo trì hơn.
*/

/* 1. trim()
Khái niệm: Phương thức trim() dùng để loại bỏ khoảng trắng ở đầu và cuối chuỗi.
Khoảng trắng bao gồm cả dấu cách, dấu tab, và các ký tự không in khác.
*/
let str = " JavaScript is awesome! ";
str = str.trim();
console.log(str); // Kết quả: "JavaScript is awesome!"

/* 2. toLowerCase() và toUpperCase()
Khái niệm:
toLowerCase() chuyển đổi tất cả các ký tự trong chuỗi thành chữ thường.
toUpperCase() chuyển đổi tất cả các ký tự trong chuỗi thành chữ hoa.
*/

let str2 = "JavaScript is awesome!";
console.log(str2.toLowerCase());
// Kết quả: "javascript is awesome!"
console.log(str2.toUpperCase());

/* 3. includes()
Khái niệm:
Phương thức includes() kiểm tra xem một chuỗi có chứa một chuỗi con
(substring) hay không.
Nó trả về true nếu tìm thấy và false nếu không.
*/

let str3 = "JavaScript is awesome!";
console.log(str3.includes("awesome")); // Kết quả: true
console.log(str3.includes("Awesome")); // Kết quả: false

/*
4. replace()
Khái niệm:
Phương thức replace() dùng để thay thế một chuỗi con trong chuỗi bằng một
chuỗi khác.
Bạn có thể thay thế chỉ chuỗi đầu tiên hoặc tất cả chuỗi con bằng cách sử dụng
biểu thức chính quy.
*/

str4 = str.replace("awesome", "fun")
console.log(str4); // Kết quả: "javascript is fun!"

/* 
5. split()
Khái niệm: Phương thức split() chia một chuỗi thành một mảng các chuỗi con, dựa trên một ký tự (delimiter).
*/
let words = str.split(" ");
console.log(words); // Kết quả: ["JavaScript","is","awesome!"]

/*
6. substring()
Khái niệm: Phương thức substring() trả về một phần của chuỗi, bắt đầu từ chỉ số
(index) được chỉ định đến một chỉ số khác hoặc đến cuối chuỗi.
*/
let str5 = "Hello World!";
console.log(str5.substring(0, 5)); // Kết quả: "Hello"
console.log(str5.substring(6)); // Kết quả: "World!

/*
7. indexOf()
Khái niệm: Phương thức indexOf() trả về vị trí xuất hiện đầu tiên của một chuỗi con
trong chuỗi, hoặc -1 nếu không tìm thấy.
*/
console.log(str5.indexOf("World")); // Kết quả: 6
console.log(str5.indexOf("JavaScript")); // Kết quả: -1