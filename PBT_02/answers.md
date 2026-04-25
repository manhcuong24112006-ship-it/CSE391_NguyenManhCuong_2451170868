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