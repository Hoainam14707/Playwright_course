// Toán tử gán
let name = "Nguyen Hoai Nam" //=> Giá trị Nguyen Hoai Nam được gán cho biến name

let age = 2;

age += 10; // => age = age +10
console.log(age);

age -= 10; // => age = age - 10
console.log(age);

age *= 10; // => age = age * 10
console.log(age);

age /= 10; // => age = age / 10
console.log(age);

age %= 10; // => age chia 10 lấy phần dư sau đó lấy phần dư chia 10 tiếp


// Toán tử số học:
let a = 10;
var b = 5;

const sum = a + b;
console.log(sum);

const sub = a - b;
console.log(sub);

const mul = a * b;
console.log(mul);

const div = a / b;
console.log(div);

console.log(a++);
console.log(a--);

// Toán tử so sánh:
/* Toán tử so sánh dùng để so sánh giá trị của 2 vế. Toán tử so sánh sẽ trả về true nếu đúng, trả
về false nếu sai.
*/

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

// So sánh "==" => là chỉ so sánh về giá trị, không so sánh kiểu dữ liệu
var c = "5";
var d = 5;
var e = 6;

console.log(c == d); // => true

// So sánh "===" => là so sánh cả gía trị và cả kiểu dữ liệu
console.log(c === d); // => false

// So sánh "!=" => chỉ so sánh giá trị, không so sánh kiểu dữ liệu
console.log(c != e); // => true

// So sánh "!==" => so sánh cả kiểu dữ liệu và gía trị


// Toán tử logic:
const g = true;
const h = false;
const j = true;

console.log(g && h) // => false
console.log(g && j) // => true

console.log(g || h); // => true

// Toán tử nối chuỗi
const ab = " Hello";
const bc = "World";
console.log(ab + " " + bc);
console.log("abcdef: " + ab + " " + bc);

// Dùng dấu ` ` để có thể truyền biến vào trong chuỗi
console.log(`Chuỗi mới là : ${ab} ${bc}`);

// Tóan tử typeof => trả về kiểu dữ liệu của biến
const pw1 = 100;
const pw2 = "Playwright Viet Nam";
const pw3 = true;
const pw4 = null;
// const pw5;

console.log(typeof (pw1)); // trả về number
console.log(typeof (pw2)); // trả về string
console.log(typeof (pw3)); // trả về boolean
console.log(typeof (pw4)); // trả về object
// console.log(typeof (pw5)); // trả về undefined