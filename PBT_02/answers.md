Câu A1
type="email" → ô nhập text, tự kiểm tra có @ → dùng cho đăng ký tài khoản
type="password" → ô nhập bị ẩn ký tự → dùng cho đăng nhập
type="text" → ô nhập text thường → dùng nhập tên sản phẩm, tên khách hàng
type="number" → ô nhập số, có nút tăng giảm → dùng nhập số lượng mua
type="tel" → ô nhập số điện thoại → dùng nhập SĐT khách hàng
type="url" → ô nhập link, kiểm tra định dạng URL → dùng nhập website shop
type="search" → ô tìm kiếm → dùng tìm sản phẩm
type="date" → chọn ngày bằng lịch → dùng chọn ngày giao hàng
type="checkbox" → ô tick chọn nhiều → dùng chọn nhiều sản phẩm hoặc option
type="radio" → chọn 1 trong nhiều → dùng chọn phương thức thanh toán

Câu A2
Trường hợp 1 không submit được  vì có required nhưng value rỗng nên browser bắt buộc nhập
Trường hợp 2  không submit được  vì type="email" yêu cầu đúng định dạng email (phải có @), "abc" không hợp lệ
Trường hợp 3  không submit được  vì max="10" nhưng user nhập 15 (vượt giới hạn)
Trường hợp 4  không submit được  vì pattern="[0-9]{10}" yêu cầu đúng 10 chữ số, "abc123" không đúng format
Trường hợp 5  không submit được  vì minlength="8" nhưng chỉ nhập 3 ký tự

Câu A3
<label for="email"> quan trọng vì 
screen reader sẽ đọc nội dung thẻ label để người dùng biết ô input dùng để làm gì
nêu không có thì người khiếm thị sẽ không biết phải nhập gì
=> từ đó giúp accessibility + UX tốt hơn
<fieldset> + <legend> dùng khi cần nhóm các input liên quan
ví dụ : 
<!-- <fieldset>
    <legend>Giới tính</legend>
    <label><input type="radio" name="gender"> Nam</label>
    <label><input type="radio" name="gender"> Nữ</label>
</fieldset> -->
aria-label dùng khi không có text hiển thị rõ ràng
aria-label không nên dùng khi đã có <label> vì <label> đã cung cấp thông tin đầy đủ nếu dùng thêm sẽ gây nhiễu cho screen reader

Câu A4
loading="lazy" là thuộc tính giúp trì hoãn việc tải ảnh cho đến khi ảnh gần xuất hiện trên màn hình nên nó giúp giảm thời gian load ban đầu, tiết kiệm băng thông và tăng hiệu năng, nhưng không nên dùng cho ảnh quan trọng ở phần đầu trang như logo hoặc banner vì cần hiển thị ngay; việc dùng nhiều <source> trong thẻ <video> là để đảm bảo tương thích nhiều trình duyệt vì mỗi browser hỗ trợ format khác nhau, các format phổ biến gồm mp4, webm, ogg; thuộc tính alt của <img> dùng để mô tả nội dung ảnh cho screen reader, SEO và khi ảnh lỗi, ví dụ alt cho ảnh iPhone 16 là "iPhone 16 Pro màu titan với camera 48MP", ảnh trang trí thì alt="" để rỗng, còn ảnh biểu đồ doanh thu thì alt="biểu đồ doanh thu quý 1 năm 2026 tăng 20% so với quý trước"

Câu A5
dùng cách 1 khi ảnh chỉ mang tính minh họa đơn giản, không cần chú thích đi kèm và alt đã đủ mô tả nội dung, ví dụ ảnh thumbnail sản phẩm trong danh sách tìm kiếm hoặc ảnh icon nhỏ trong UI; dùng cách 2 khi ảnh là nội dung chính cần giải thích thêm bằng văn bản và muốn semantic rõ ràng hơn cho SEO và accessibility, ví dụ ảnh chi tiết sản phẩm kèm giá và tên đầy đủ hoặc ảnh trong bài blog cần caption mô tả nội dung ảnh rõ hơn

Câu C2
pattern cmnd/cccd: pattern="[0-9]{12}", số tài khoản: pattern="[0-9]{10,15}"
html5 validation không đủ an toàn cho ứng dụng ngân hàng vì chỉ chạy phía client nên có thể bị bypass bằng devtools hoặc gửi request trực tiếp nên bắt buộc phải validate lại ở backend
html5 không làm được: kiểm tra trùng dữ liệu (email đã tồn tại), so sánh 2 field (confirm password/pin), validate logic phức tạp
rủi ro nếu chỉ validate frontend: có thể gửi dữ liệu sai/độc hại lên server và có thể bị tấn công như sql injection do backend không kiểm tra lại

Câu C1
lỗi 1: dòng 2 — thiếu label, name, required — sửa: <label for="name">tên:</label> <input type="text" id="name" name="name" required>

lỗi 2: dòng 4 — email không có label — sửa: <label for="email">email:</label> <input type="email" id="email" name="email" required>

lỗi 3: dòng 4 — dùng placeholder thay label — sửa: thêm label riêng

lỗi 4: dòng 6-7 — password không có label, không phân biệt — sửa: thêm label + id + name cho từng ô

lỗi 5: dòng 9 — phone dùng type="text" — sửa: type="tel"

lỗi 6: dòng 9 — dùng value mặc định — sửa: dùng placeholder

lỗi 7: dòng 11 — select thiếu label, name — sửa: thêm label + name

lỗi 8: dòng 16 — thiếu checkbox input, không required — sửa: <label><input type="checkbox" required> tôi đồng ý</label>


