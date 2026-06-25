/*
1. map()
Khái niệm: Phương thức map() tạo ra một mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc.
*/

let numbers = [1, 2, 3, 4];
let squared = numbers.map(num => num * 2);
console.log(squared); // Kết quả: [2, 4, 6, 8]

/*
2. filter()
Khái niệm: Phương thức filter() tạo ra một mảng mới chỉ bao gồm các phần tử
thỏa mãn điều kiện được chỉ định trong hàm callback.
*/
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Kết quả: [2, 4]

/*
3. find()
Khái niệm: Phương thức find() trả về giá trị của phần tử đầu tiên trong mảng thỏa
mãn điều kiện được chỉ định trong hàm callback, nếu không có phần tử nào thỏa mãn
thì trả về undefined.
*/
let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // Kết quả: 2


/*
4. reduce()
Khái niệm: Phương thức reduce() áp dụng một hàm lên từng phần tử của mảng (từ
trái qua phải) để trả về một giá trị duy nhất.
*/
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Kết quả: 10

//total: biến nhận giá trị duy nhất
//num: phần tử của mảng
//0 giá trị khởi tạo cho biến total

/*
5. some()
Khái niệm: Phương thức some() kiểm tra xem có ít nhất một phần tử trong mảng thỏa
mãn điều kiện được chỉ định trong hàm callback. Trả về true nếu tìm thấy, ngược lại trả
về false.
*/
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Kết quả: true

/*
6. every()
Khái niệm: Phương thức every() kiểm tra xem tất cả các phần tử trong mảng có thỏa
mãn điều kiện được chỉ định trong hàm callback hay không. Trả về true nếu tất cả đều
thỏa mãn, ngược lại trả về false.
*/

let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // Kết quả: true

/*
7. push()
Khái niệm: Phương thức push() thêm một hoặc nhiều phần tử vào cuối mảng và
trả về độ dài mới của mảng.
*/
let nums = [1, 2, 3];
nums.push(4, 5);
console.log(nums); // Kết quả: [1, 2, 3, 4, 5]

/*
8. shift()
Khái niệm: Phương thức shift() loại bỏ phần tử đầu tiên của mảng và trả về phần
tử bị loại bỏ. Phương thức này thay đổi độ dài của mảng****
*/
let firstElement = nums.shift();
console.log(firstElement); // Kết quả: 1
console.log(nums); // Kết quả: [2, 3]

/*
9. sort
Khái niệm: Phương thức sort() sắp xếp các phần tử của mảng theo thứ tự tăng
dần hoặc theo hàm so sánh được cung cấp. Nó thay đổi mảng ban đầu.
sort() mặc định: sắp xếp các phần tử của mảng như chuỗi theo thứ tự từ điển Unicode (ASCII hoặc UTF-16). Điều này có nghĩa là mỗi phần tử sẽ được chuyển
đổi thành chuỗi (nếu không phải là chuỗi) trước khi so sánh.
*/

let num = [4, 2, 3, 1];
num.sort();
console.log(num); // Kết quả: [1, 2, 3, 4] s