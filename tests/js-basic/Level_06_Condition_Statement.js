/*
Câu điều kiện kiểm tra nếu điều kiện đúng thì sẽ thực thi code trong khối lệnh, giúp thực hiện
các logic rẽ nhánh phức tạp.
Có một số loại câu điều kiện thường dùng:
-
if
-
if…else
-
if…else…if
-
switch…case
*/

/* IF
Cú pháp điều kiện if:
if (condition) {
// code block
}
Trong đó, condition = true thì sẽ chạy đoạn code block.
*/

const a = 6;
if (a > 5) {
    console.log(`số ${a} lớn hơn 5`)
};

/* Điều kiện if…else…
Cú pháp điều kiện if…else…:
if (condition) {
// code block 1
} else {
// code block 2
}
Trong đó:
-
Nếu condition = true, sẽ chạy logic ở code block 1.
-
Nếu condition = false, sẽ chạy logic ở code block 2.
Có thể hiểu đơn giản, điều kiện if…else là điều kiện dạng nếu…thì… Nếu đúng thì chạy logic ở
block của nếu. Nếu không đúng thì chạy logic ở block của thì…
*/

if (a < 5) {
    console.log(`số ${a} nhỏ hơn 5`)
} else {
    console.log(`số ${a} lớn hơn 5`)
};

/*
Điều kiện if…else if…
Cú pháp điều kiện if…else if…:
*/

const day = 3;
if (day === 2) {
    console.log("Thứ 2");
} else if (day === 3) {
    console.log("Thứ 3");
} else if (day === 4) {
    console.log("Thứ 4");
} else if (day === 5) {
    console.log("Thứ 5");
} else if (day === 6) {
    console.log("Thứ 6");
} else if (day === 7) {
    console.log("Thứ 7");
} else {
    console.log("Chủ nhật")
};

/*
Điều kiện switch…case
switch…case thường dùng để rẽ nhánh trong trường hợp có nhiều điều kiện khác nhau.
switch…case giúp code trở nên gọn gàng, dễ nhìn hơn.
*/
switch (day) {
    case 2:
        console.log("Thứ 2");
        break;
    case 3:
        console.log("Thứ 3");
        break;
    case 4:
        console.log("Thứ 4");
        break;
    case 5:
        console.log("Thứ 5");
        break;
    case 6:
        console.log("Thứ 6");
        break;
    case 7:
        console.log("Thứ 7");
        break;
    default:``
        console.log("Chủ nhật");
}