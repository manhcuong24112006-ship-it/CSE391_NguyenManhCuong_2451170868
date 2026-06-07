Câu A1
<!-- Function Declaration -->
function tinhThueBaoHiem(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
}
=> được hoisting toàn bộ nên có thể được gọi trước khi khai báo
kết quả : 5
<!-- Function Expression -->
const tinhThueBaoHiem = function (luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
};
=> chỉ biến được hoisting giá trị hàm chưa gắn
kết quả : lỗi
<!-- Arrow Function -->
const tinhThueBaoHiem = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
};
=> chỉ biến được hoisting giá trị hàm chưa gắn
kết quả lỗi

Câu A3
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Lấy các số chẵn
nums.filter(num => num % 2 === 0);

// 2. Nhân mỗi số với 3
nums.map(num => num * 3);

// 3. Tính tổng tất cả
nums.reduce((sum, num) => sum + num, 0);

// 4. Tìm số đầu tiên > 7
nums.find(num => num > 7);

// 5. Kiểm tra CÓ số > 10 không
nums.some(num => num > 10);

// 6. Kiểm tra TẤT CẢ đều > 0
nums.every(num => num > 0);

// 7. Tạo mảng "Số X là [chẵn/lẻ]"
nums.map(num => `Số ${num} là ${num % 2 === 0 ? "chẵn" : "lẻ"}`);

// 8. Đảo ngược mảng (không mutate gốc)
[...nums].reverse();

Câu A4
const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: { ram: 8, storage: 256, color: "Titan" }
};

// Destructuring
const { name, price, specs: { ram, color } } = product;
console.log(name, price, ram, color);
// iPhone 16 25990000 8 Titan
console.log(specs);
// ReferenceError
// Spread
const updated = { ...product, price: 23990000, sale: true };
console.log(updated.price);
// 23990000
console.log(updated.sale);
// true
console.log(product.price);
// 25990000 (object gốc không đổi)
// Spread gotcha
const copy = { ...product };
copy.specs.ram = 16;
console.log(product.specs.ram);
// 16

Câu C1
const processOrders = orders =>
    orders
        .filter(order => order.status === "completed" && order.total > 100000)
        .map(({ id, customer, total }) => ({
            id,
            customer,
            total,
            discount: total * 0.1,
            finalTotal: total * 0.9
        }))
        .sort((a, b) => b.finalTotal - a.finalTotal);

Câu C2
const miniArray = {

    map(arr, fn) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }

        return result;
    },

    filter(arr, fn) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }

        return result;
    },

    reduce(arr, fn, initialValue) {
        let accumulator = initialValue;

        for (let i = 0; i < arr.length; i++) {
            accumulator = fn(accumulator, arr[i], i, arr);
        }

        return accumulator;
    }
};

// Test
console.log(miniArray.map([1, 2, 3], x => x * 2));
// [2, 4, 6]

console.log(miniArray.filter([1, 2, 3, 4], x => x > 2));
// [3, 4]

console.log(
    miniArray.reduce(
        [1, 2, 3, 4],
        (a, b) => a + b,
        0
    )
);
// 10

Câu A2
// Đoạn 1:
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}
const c = counter();

console.log(c.increment());  // 1
console.log(c.increment());  // 2
console.log(c.increment());  // 3
console.log(c.decrement());  // 2
console.log(c.getCount());   // 2

// Đoạn 2:
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}

// Output sau 200ms:
// var: 3
// var: 3
// var: 3
// let: 0
// let: 1
// let: 2

var và let cho kết quả khác nhau trong vòng lặp setTimeout vì scope khác nhau