/* Kiểu nguyên thủy:
Có 8 loại:
boolean / null / undefined / number / string /  
*/

// boolean:
let isPrivate = true;
var isDisplay = false;

// null
let num = null;

//undefined
let num2 = undefined;

//number

let num3 = 123;

/* Kiểu dữ liệu đối tượng:
Cú pháp
Để sử dụng Object, ta dùng cú pháp khai báo với let hoặc const:
let/const <object_name> = {
‘key1’: value1,
‘key2’: value2,
…
‘keyN’: valueN
}
*/



// Lợi ích:

// Không dùng object:
/*
Ví dụ với việc quản lý thông tin sinh viên, giả sử bạn cần quản lý 3 sinh viên với các thông tin:
mã sinh viên, tên sinh viên, tuổi.
Không dùng object
Khi không dùng object, ta cần khai báo các biến riêng biệt để lưu trữ dữ liệu cho các thông tin
của sinh viên
*/

const sv1ID = 1;
const sv1Name = "Alex";
const sv1Age = 20;
const sv2ID = 2;
const sv2Name = "Nagi";
const sv2Age = 18;
const sv3ID = 3;
const sv3Name = "Lua";
const sv3Age = 19;

// => Khi cần in:
console.log(`- Thông tin SV1: ${sv1ID}, ${sv1Name}, ${sv1Age}`);
console.log(`- Thông tin SV1: ${sv2ID}, ${sv2Name}, ${sv2Age}`);
console.log(`- Thông tin SV1: ${sv3ID}, ${sv3Name}, ${sv3Age}`);

// => Việc quản lý các biến rất dễ gây nhầm lẫn. Ví dụ, bạn có thể gõ nhầm biến sv3Name cho sinh viên 2.

// Dùng object:
const student1 = {
    'id': 1,
    'name': "Alex",
    'age': 18
}

const student2 = {
    'id': 2,
    'name': "Nagi",
    'age': 20
}

// => Khi in:
console.log(`Thông tin sinh viên 1: ${student1.id}, ${student1.age},${student1.name}`)
console.log(`Thông tin sinh viên 1: ${student2.id}, ${student2.age},${student2.name}`)
console.log("aaa" + student1["id"] + student2["age"])

// Object lồng nhau:

const student = {
    id: 1,
    name: "Alex",
    address: {
        province: "Ha Noi",
        isCapital: true,
        country: "Viet Nam"
    }
}

console.log(student.address.province)
console.log(student["address"]["country"])

/* Thêm thuộc tính:
Để thêm thuộc tính mới vào object, chúng ta chỉ cần dùng dấu . hoặc ngoặc vuông [] để định
nghĩa thuộc tính mới. 
*/

let bike = {
    "brand": 'Toyota',
    "name": "Raize"
}

// Cách 1: 
bike.color = "White";
console.log(bike);

// Cách 2
bike['price'] = 100;
console.log(bike);

/* Xóa thuộc tính:
*/
delete bike.price;
console.log(bike)

/* Tip:
Tips
1. Các thuộc tính có thể khai báo nằm trên cùng một dòng, có thể dùng nháy đơn hoặc
nháy kép để khai báo thuộc tính.
/*

const student = { 'id': 10 };
const student2 = { "id": 20 };

/*
2. Đối với các thuộc tính không có dấu cách, có thể bỏ dấu nháy đơn và nháy kép.
*/
const student = { id: 10 };
const student2 = { id: 20 };

/*
3. Thông thường, chúng ta hạn chế đặt tên thuộc tính có dấu cách, để việc khai báo và
truy cập thuộc tính dễ dàng hơn.
Không nên: đặt tên thuộc tính chứa dấu cách
*/

const student = { 'my name': "Alex" };

/*
Nên: đặt tên thuộc tính sử dụng camelCase, không chứa dấu cách.
*/
const student = { myName: "Alex" };

/*
4. Ta không thể thay đổi giá trị của hằng số. Tuy nhiên, nếu hằng số này là một Object, ta
có thể thay đổi giá trị các thuộc tính của chúng.
Không thể làm thế này:
*/
const student = { id: 10, name: "Alex" };
student = { id: 11, name: "Nagi" };
// ^
// TypeError: Assignment to constant variable.
//Có thể làm thế này:
const student = { id: 10, name: "Alex" };
student.id = 11;
student.name = "Nagi";
