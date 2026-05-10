Câu A1

-static	vẫn chiếm	mặc định	top/left ko tác dụng	Mặc định — không cần viết
-relative	vẫn chiếm	Dịch so với vị trí GỐC	có	Làm anchor cho absolute con, dịch nhẹ
-absolute	bay khỏi flow	Bám vào cha RELATIVE gần nhất	có	Badge, dropdown, tooltip, overlay
-fixed	không	Bám vào VIEWPORT	không cuộn theo trang	Chat button, cookie banner, header cố định
-sticky	vẫn chiếm	mặc định	dính khi scroll đến ngưỡng	Sticky header, sticky table header, sidebar

absolute sẽ tham chiếu tới body khi phần tử không nằm trong thẻ nào khác
absolute sẽ tham chiếu tới parent nếu có parent

Câu A2
/* Trường hợp 1 */
display: flex; flex: 1;
→ 4 items chia đều 1 hàng

[1][2][3][4]
(1 hàng, 4 cột, mỗi item bằng nhau)

/* Trường hợp 2 */
flex-wrap: wrap; width:45% + margin
→ mỗi item ~50% → 2 item / hàng

[1][2]
[3][4]
[5][6]

→ 3 hàng, 2 cột

/* Trường hợp 3 */
justify-content: space-between; align-items: center

[1        2        3]

→ 1 hàng
→ item 1 sát trái, item 3 sát phải, item 2 ở giữa
→ tất cả căn giữa theo chiều dọc

/* Trường hợp 4 */
grid-template-columns: 200px 1fr 200px

[1][   2 (co giãn)   ][3]

→ 1 hàng, 3 cột
→ cột giữa chiếm phần còn lại
→ có gap 20px giữa các cột

/* Trường hợp 5 */
grid-template-columns: repeat(3,1fr)

[1][2][3]
[4][5][6]
[7]

→ 3 cột
→ 7 items → 3 hàng
→ hàng cuối chỉ có 1 item (item 7 nằm cột 1)

Câu C1
TH1:dùng flexbox vì layout 1 chiều cần căn trái phải linh hoạt
TH2:dùng grid vì layout 2 chiều cần chia đều 3 cột và tự xuống dòng khi thêm ảnh
TH3:dùng grid vì chia layout rõ ràng theo cột
TH4:dùng grid vì cần chia đều 4 cột
TH5:dùng flexbox vì layout dọc
Câu C2
Lỗi 1 : do nút mua nằm ở dưới text nên nút mua bị nhảy vị trí
Lỗi 2 : do hero content nằm trong hero do vậy khi dùng thẻ text align center thì chỉ có thể căn vị trí trong hero content thôi
Lỗi 3 do flexbox cho phép các box co lại để chen cho đủ chỗ do trong hoàn cảnh này content quá lớn nên sidebar phải thu nhỏ để vừa với content