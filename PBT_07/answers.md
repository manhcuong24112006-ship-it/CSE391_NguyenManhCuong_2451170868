Câu C1
lỗi 1:if (giasaugiam = 0) dùng toán tử gán thay vì so sánh nên điều đó dẫn đến việc sai logic 
-> sửa thành if(giasaugiam ===0)

lỗi 2 giaban được dùng ở đây là string thay vì number => ép kiểu bằng number(giaBan)

lỗi 3 thiếu dấu ; ở nhiều dòng

lỗi 4 hàm chỉ kiểm tra % giảm mà không kiểm tra giaBan có phải số hay không
=> sửa bằng
if (isNaN(giaBan) || giaBan < 0) {
    return "Giá bán không hợp lệ";
}

lỗi 5 đổi từ var giamGia thành const giamGia

lỗi 6
lỗi ở vòng lặp
for (var i = 0; i < 5; i++)
=> sửa bằng let 
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}

Câu A2
console.log(typeof null);         // "object"
console.log(typeof undefined);    // "undefined"
console.log(typeof NaN);          // "number"
console.log("5" + 3);             // "53"
console.log("5" - 3);             // 2
console.log("5" * "3");           // 15
console.log(true + true);         // 2
console.log([] + []);             // ""
console.log([] + {});             // "[object Object]"
console.log({} + []);             // 0

"5" + 3 cho "53" vì dấu + vừa dùng để cộng nhưng cũng đồng thời dùng để nối chuỗi string nên bị lỗi
"5" - 3 cho 2 vì toán tử - chỉ dùng cho toán học nên nó ép 5 thành number rồi thực hiện phép toán

Câu A3
console.log(5 == "5");              // true
console.log(5 === "5");             // false
console.log(null == undefined);     // true
console.log(null === undefined);    // false
console.log(NaN == NaN);            // false
console.log(0 == false);            // true
console.log(0 === false);           // false
console.log("" == false);           // true

== sẽ ép kiểu trước khi so sánh
=== được dùng để so sánh nghiêm ngặt, dùng để so sánh xem 2 giá trị có giống nhau hoàn toàn không,yêu cầu giá trị và kiểu dữ liệu phải hoàn toàn trùng khớp 
=> từ đó kết luận ta nên dùng ===

Câu A4
if ("0") console.log("A");   // In
if ("") console.log("B");    // Không in
if ([]) console.log("C");    // In
if ({}) console.log("D");    // In
if (null) console.log("E");  // Không in
if (0) console.log("F");     // Không in
if (-1) console.log("G");    // In
if (" ") console.log("H");   // In

0 là string có ký tự nên truthy
"" là chuỗi rống nên falsy
[] và {} luôn truthy
null và 0 là falsy
-1 khac 0 nên trhthy
" " có chứa dấu cách nên truthy

Câu A5
// Cách 1:
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2:
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cách 3:
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>

Câu A1
// Đoạn 1
console.log(x);
var x = 5;
// Output: undefined

// Đoạn 2
console.log(y);
let y = 10;
// Output: ReferenceError

// Đoạn 3
const z = 15;
z = 20;
console.log(z);
// Output: TypeError

// Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
// Output: [1, 2, 3, 4]

// Đoạn 5
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
// Output:
// Trong block: 2
// Ngoài block: 1

