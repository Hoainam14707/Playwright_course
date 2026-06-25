/* While:
-
Vòng lặp while phù hợp khi bạn muốn lặp lại một logic code khi một điều kiện nào đó
còn đúng.
-
Hãy cẩn thận để đảm bảo rằng điều kiện cuối cùng sẽ trở thành false, nếu không vòng
lặp sẽ chạy vô hạn.
*/
let i = 0;              // i = 0: Khởi tạo biến i bằng 0.
while (i < 5) {         // while (i < 5): Vòng lặp tiếp tục chạy khi i nhỏ hơn 5.
    console.log(i);     // console.log(i): In giá trị của i ra console.
    i++;                // i++: Tăng giá trị của i lên 1 sau mỗi lần lặp.
}


/* Vòng lặp do…while
Giải thích:
-
đó mới kiểm tra điều kiện.
-
Tips sử dụng
-
Khác với while, vòng lặp do...while sẽ thực thi logic code bên trong ít nhất một lần, sau
Vòng lặp tiếp tục chạy khi i nhỏ hơn 5.
Vòng lặp do...while phù hợp khi bạn muốn đảm bảo rằng một logic code được thực thi ít
nhất một lần, bất kể điều kiện ban đầu là gì.
*/

let j = 0;              // giá trị bạn đầu
do {
    console.log(j);     // in ra giá trị của i
    j++;                // Tăng i thêm 1 đơn vị
} while (j < 5);        // Điều kiện để dừng vòng lặp