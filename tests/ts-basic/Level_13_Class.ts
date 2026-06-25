/*
Class
- Class là một khái niệm quan trọng trong lập trình hướng đối tượng (OOP), được dùng
để tạo ra các đối tượng (object).
- Class là một khuôn mẫu định nghĩa các thuộc tính và phương thức mà các đối tượng
thuộc class đó sẽ có.
*/

class Animal {
    name: string; // Khai báo thuộc tính
    constructor(name: string) {
        this.name = name;
    }
    makeSound() {
        console.log("Generic animal sound");
    }
}

let ani1 = new Animal("Lion");
ani1.makeSound();
console.log(ani1);
console.log("abc");