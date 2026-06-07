Câu A1
DOM tree
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button[type="submit"]
    │       └── "Add"
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        └── li.todo-item.completed
            └── "Learn CSS"
             
querySelector
const heading = document.querySelector("h1");

const input = document.querySelector("#todoForm input");

const todoItems = document.querySelectorAll(".todo-item");

const activeLink = document.querySelector("a.active");

const firstTodo = document.querySelector("#todoList li");

const navLinks = document.querySelectorAll("nav a");

Câu A2
sự khác nhau giữa innerHTML và textContent là
innerHTML:
- đọc ghi nội dung dưới dạng html
- có nguy cơ bị XSS nếu dữ liệu đến từ user
- các thẻ sẽ dc trình duyệt render
textContent
- đọc nội dung dưới dạng văn bản
- thẻ html hiển thị như text bth
- an toàn hơn khi hiển thị dữ liệu
Câu A3
khi click vào btn sự kiện sẽ xảy ra từ phần tử được click ra các phần tử cha theo thứ tự 
#btn -> #inner -> #outer

Câu C1
- lỗi 1 addEventListener("onclick", ...)
onclick không phải tên event hợp lệ trong addEventListener
Đổi thành "click"

- lỗi 2 countDisplay = count;
countDisplay là const, không thể gán lại. Cần cập nhật nội dung hiển thị
countDisplay.textContent = count;

- lỗi 3 historyList.innerHTML = null;
innerHTML nên gán chuỗi rỗng để xóa nội dung
historyList.innerHTML = "";

- lỗi 4 item.remove;
Chỉ tham chiếu tới hàm remove, chưa gọi hàm
item.remove();
 
- lỗi 5 count = localStorage.getItem("count");
getItem() trả về string, count cần là number
`count = Number(localStorage.getItem("count"))

- lỗi 6 Chỉ load count từ localStorage mà không load history
Refresh trang sẽ mất lịch sử
Thêm `historyList.innerHTML = localStorage.getItem("history")

- lỗi 7 Event click của các <li> trong history bị mất sau khi load từ localStorage
innerHTML không lưu event listeners
Dùng Event Delegation hoặc bind lại event sau khi load

Câu C2 
bind event lên 1000 elements riêng lẻ là BAD PRACTICE vì 
- gây tốn ram và giảm hiệu năng
- code khó bảo trì
- tạo 1000 event listeners trong bộ nhớ.

Event Delegation giải quyết bằng cách thay vì gắn event cho từng phần tử, ta gắn 1 event listener lên phần tử cha và tận dụng event bubbling.

Refactor dùng DocumentFragment để chỉ gây 1 lần reflow nhanh hơn vì
- DocumentFragment là một DOM ảo tạm thời, không nằm trong cây DOM thật.
- việc thêm 1000 phần tử vào fragment không gây reflow.