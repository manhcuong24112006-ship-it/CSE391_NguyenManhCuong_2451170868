Bài A1
Trình tự truy cập trang shopee. Vn
Các bước tiến hành truy cập trang shopee. Vn như sau:
B1 Tra cứu DNS (DNS lookup) về địa chỉ IP tương ứng của tên miền shopee. Vn.
B2 Kết nốI TCP cùng vớI bảo mật HTTPS (HTTPS).
B3 GửI yêu cầu HTTP (GET) tớI máy chủ.
B4 Trả lại HTTP Response từ máy chủ chứa nộI dung HTML.
B4 Lấy được HTTP Response về, lập trình duyệt triển khai Parse (Xử lý cú pháp HTML) rồI hiện lên, dựng trang web. 
Tham Chiếu: 01_introduction_html_universe.md

Bài A2 
lỗi SEO thấp tại vì
1. dùng quá nhiều thẻ div mà trong khi có có thể dùng header
2. menu không dùng thẻ nav
3. sản phẩm không dùng thẻ article
4. ảnh không có thẻ alt
SỬA LẠI CODE
<!-- <div class="header">
    <div class="logo">ShopTLU</div>
    <div class="menu">
        <div><a href="/">Trang chủ</a></div>
        <div><a href="/products">Sản phẩm</a></div>
    </div>
</div>
<div class="main">
    <div class="product">
        <div class="title">iPhone 16 Pro</div>
        <div class="price">25.990.000đ</div>
        <div class="image"><img src="iphone.jpg"></div>
    </div>
</div>
<div class="footer">© 2026 ShopTLU</div> -->

Bài A3
Hộp 1
Text A  Text B
Hộp 2
Text C Text D
Hộp 3

Bài A4
<thead> chứa phần tiêu đề của bảng 
<tbody> chứa dữ liệu chính của bảng
<tfoot> chứa phần cuối 
lý do không nên dùng table để layout vì
1. web load chậm 
2. code nhìn rắc rối
3. seo kém

Bài C1
<!-- <header> <!-- header: phần đầu trang -->
    <nav> <!-- nav: khu vực điều hướng chính -->
        <a href="#">Trang chủ</a>
        <a href="#">Sản phẩm</a>
        <a href="#">Liên hệ</a>
    </nav>
</header>

<nav aria-label="breadcrumb"> <!-- nav: breadcrumb là điều hướng -->
    <ol> <!-- ol: có thứ tự -->
        <li><a href="#">Trang chủ</a></li>
        <li><a href="#">Điện thoại</a></li>
        <li>iPhone 16</li>
    </ol>
</nav>

<main> <!-- main: nội dung chính của trang -->

    <section> <!-- section: khu vực sản phẩm -->
        
        <section> <!-- section: khu ảnh -->
            <figure> <!-- figure: nhóm ảnh -->
                <img src="#" alt="ảnh 1">
                <img src="#" alt="ảnh 2">
                <img src="#" alt="ảnh 3">
                <img src="#" alt="ảnh 4">
                <img src="#" alt="ảnh 5">
            </figure>
        </section>

        <article> <!-- article: thông tin sản phẩm là nội dung độc lập -->
            <h1>Tên sản phẩm</h1> <!-- h1: tiêu đề chính -->
            <p>Giá</p> <!-- p: hiển thị giá -->
            <p>Đánh giá ⭐⭐⭐⭐⭐</p> <!-- p: rating -->
            <p>Mô tả sản phẩm</p> <!-- p: mô tả -->
        </article>

    </section>

    <section> <!-- section: bảng thông số -->
        <h2>Thông số kỹ thuật</h2>
        <table> <!-- table: dữ liệu dạng bảng -->
            <thead>
                <tr><th>Thông số</th><th>Giá trị</th></tr>
            </thead>
            <tbody>
                <tr><td>CPU</td><td>...</td></tr>
            </tbody>
        </table>
    </section>

    <section> <!-- section: đánh giá -->
        <h2>Đánh giá</h2>
        <article> <!-- article: mỗi bình luận là 1 nội dung riêng -->
            <p>Người dùng A: Sản phẩm tốt</p>
        </article>
    </section>

</main>

<aside> <!-- aside: nội dung phụ (sản phẩm liên quan) -->
    <h2>Sản phẩm tương tự</h2>
    <article> <!-- mỗi sản phẩm là 1 article -->
        <p>Sản phẩm 1</p>
    </article>
</aside>

<footer> <!-- footer: chân trang -->
    <p>© 2026</p>
</footer> -->

Bài C2
Nếu chỉ dùng thẻ div mà không dùng các thẻ khác thì sẽ khiến cho code trở nên rối mắt và khó nhìn hơn từ đó coder sẽ gặp khó khăn trong việc chỉnh sửa hoặc cập nhật lại code.Nếu chúng ta dùng thẻ khác ví dụ như thẻ header thì chúng ta có thể đưa phần nào là phần đầu lên trên đỉnh trang web.Vì vậy nên việc ta cần phải thông thạo các thẻ khác là vô cùng quan trọng vì nó sẽ khiến trang web trở nên chuyên nghiệp hơn 



