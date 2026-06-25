/*
Mảng (hay array) là một đối tượng trong Javascript, giúp lưu trữ một tập hợp các giá trị, lưu trữ
dưới một tên biến và có thể sử dụng các thao tác trên mảng.
Một mảng có thể chứa nhiều loại dữ liệu khác nhau.
Khai báo mảng
Để khai báo mảng, ta sử dụng cú pháp:
let/const/var <tên_mảng> = [<danh sách các giá trị, cách nhau
bởi dấu phẩy ","]
*/

const arr1 = [1, 2, 3];
const arr2 = ['Nam', 'Hoa', 'Tung'];

console.log(arr1);
console.log(arr2);

// Độ dài của mảng:
console.log(arr1.length);

// Truy xuất các phần tử của Mảng
console.log(arr1[0])
console.log(arr1[1])
console.log(arr1[2])

console.log(arr2[0])
console.log(arr2[1])
console.log(arr2[2])

// Thêm phần tử vào mảng
// Thêm vào đầu mảng => unshift()
arr1.unshift(4)
console.log(arr1)

// Thêm phần tử vào cuối mảng: => push()
arr2.push('Long');
console.log(arr2);

//Xóa phần tử khỏi mảng
// Xóa ở đầu mảng => shift()
arr1.shift();
console.log(arr1)

// Xóa phần tử cuối mảng => pop();
arr2.pop();
console.log(arr2);

/* Tips
-
Mặc dù mảng có thể chứa nhiều kiểu dữ liệu khác nhau, nhưng trong thực tế, chúng ta
thường chỉ sử dụng một loại dữ liệu duy nhất cho một mảng
Không nên: khai báo mix các kiểu dữ liệu trong cùng một mảng
*/
var mixedArr = ["Playwright", 10, true, null, {
    id: 1, name:
        "Alex"
}];
/*
Nên: tách kiểu dữ liệu tương ứng thành từng mảng.
*/
let numberArr = [1, 20.5, -300, 4];
const strArr = ["Playwright", "Việt", "Nam"];


