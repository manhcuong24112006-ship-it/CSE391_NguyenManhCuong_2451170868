Câu A1
Ví dụ:
<h1 style="color: #2563eb; font-size: 32px;">Tiêu đề</h1>
 Ưu điểm:
- Dễ dùng áp dụng rất nhanh và tiện lợi 
Nhược điểm 
- Khó bảo trì,chỉ có thể dùng tạm thời 

Internal
Ví dụ:
<head>
    <style>
        h1 {
            color: #2563eb;
            font-size: 32px;
        }
    </style>
</head>
Ưu điểm:
- Dễ quản lý
Nhược điểm:
-Không tái sử dụng nhiều trang
-HTML bị dài

External 
Ví dụ:
<head>
    <link rel="stylesheet" href="styles.css">
</head>
h1 {
    color: #2563eb;
    font-size: 32px;
}

Ưu điểm:
- Tái sử dụng được nhiều trang
- dễ bảo trì
- load nhanh
Nhược điểm:
- phụ thuộc file ngoài

Nếu cùng 1 element có cả 3 cách CSS đồng thời áp dụng, cách inline thắng vì inline gắn trực tiếp vào element

Câu A2
1. h1

Chọn:

ShopTLU
2. .price

Chọn:

25.990.000đ
45.990.000đ
3. #app header

Chọn toàn bộ <header> trong #app, gồm text:

ShopTLU
Home
Products
About
4. nav a:first-child

Chọn:

Home
5. .product.featured h2

Chọn:

MacBook Pro
6. article > p

Chọn tất cả <p> là con trực tiếp của <article>:

25.990.000đ
Mô tả sản phẩm...
45.990.000đ
Mô tả sản phẩm...
7. a[href="/"]

Chọn:

Home
8. .top-bar.dark h1

Chọn:

ShopTLU
Câu A3
Trường hợp 1: content-box (mặc định)
width: 400px;
padding: 20px;
border: 5px;
margin: 10px;

Width thực = content + padding2 + border2
= 400 + 40 + 10 = 450px
Kết quả:
Chiều rộng hiển thị = 450px
Không gian chiếm trên trang = 470px
(470 = 450 + margin*2 = 450 + 20)

Trường hợp 2: border-box
box-sizing: border-box;
width: 400px;
padding: 20px;
border: 5px;
margin: 10px;
Width hiển thị = 400px (cố định)
Content = 400 - padding2 - border2
= 400 - 40 - 10 = 350px
Chiều rộng hiển thị = 400px
Kích thước content thực tế = 350px
Không gian chiếm trên trang = 420px
(420 = 400 + margin*2)

Trường hợp 3: Margin collapse
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
Khoảng cách = 40px
max(25, 40) = 40px

Câu A4
Rule A: (0,0,1), Rule B: (0,1,0), Rule C: (1,0,0), Rule D: (0,1,1) → màu: đỏ (Rule C thắng do ID cao nhất); nếu có inline style → màu cam (inline > tất cả); nếu Rule A có !important → màu đen (!important override toàn bộ specificity)

Câu C1
Sidebar thực tế = 342px (300 + 40 + 2), Content thực tế = 722px (660 + 60 + 2) → Tổng = 1064px > 960px nên layout bị vỡ và content bị đẩy xuống dòng vì content-box tính cả padding + border vào kích thước thật, vượt quá container

Câu C2
"Sản phẩm A" (h2) có font-size = 20px (do .card .title override kế thừa từ .container 14px) và color = green (do .highlight có !important thắng tất cả kể cả #featured .title red); "Mô tả sản phẩm" (p trong card featured) có color = blue vì .card đặt color: blue và p { color: inherit } nên kế thừa từ .card; "Sản phẩm B" (h2) có font-size = 20px (do .card .title) và color = blue (kế thừa từ .card vì không có rule nào mạnh hơn áp vào h2); "Mô tả sản phẩm B" (p.highlight) có color = green vì .highlight có !important override color: inherit từ p và color: blue từ .card; nguyên tắc: cascade xét !important > specificity (ID > class > tag) > thứ tự, còn inheritance áp dụng khi dùng inherit hoặc không có rule trực tiếp

Câu B2
Hộp 1 (content-box): chiều rộng thực tế = 350px (300 + 40 + 10, vì width chỉ tính content, padding + border cộng thêm ra ngoài); Hộp 2 (border-box): chiều rộng thực tế = 300px (width đã bao gồm padding + border nên không tăng kích thước); Giải thích: content-box tính width chỉ cho phần content nên kích thước thật bị tăng khi có padding/border, còn border-box tính cả padding + border vào width nên giữ nguyên kích thước hiển thị, giúp layout ổn định hơn

Câu B1
Các loại selector đã dùng:
- Element selector: body, header, table, footer
- Class selector: .active
- Descendant selector: nav a, tbody tr
- Pseudo-class: :hover, :nth-child(even)
- Group selector: th, td