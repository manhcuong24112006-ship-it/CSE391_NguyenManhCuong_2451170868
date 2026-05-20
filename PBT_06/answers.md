Câu A1
Kích thước	< 768px	768px - 991px	≥ 992px
Số cột	1	2	4
Box layout	4	4	4
col-md-6 nghĩa là từ md trở lên thì element chiếm 6/12 cột
Câu A2
d-none d-md-block nghia là màn hình nhỏ hơn 768px thì element bị ẩn , từ 768px trở lên thì hiện dang block
5 spacing utilities phổ biến:
mt-3 = margin-top mức 3
mb-4 = margin-bottom mức 4
ms-2 = margin-left/start mức 2
px-4 = padding trái + phải mức 4
py-5 = padding trên + dưới mức 5
mb-auto = margin-bottom tự động để căn layout/flex
.container = container có max-width thay đổi theo breakpoint và được căn giữa.
.container-fluid = luôn full width 100% màn hình.
.container-md = dưới md thì full width, từ md trở lên mới có max-width cố định theo Bootstrap.

Câu C1
Để đổi màu $primary từ xanh mặc định sang #E63946
ta cần các công cụ : nodejs, file scss riêng, bootstrap source code
trước hết ta tạo project bằng
npm init -y
npm install bootstrap sass
sau đó tạo cấu trúc thư mục 
project/
├── src/
│   └── custom.scss
├── dist/
│   └── style.css
└── package.json
rồi sau đó trong package.json ta build scss
"scripts": {
    "sass:build": "sass src/custom.scss dist/style.css",
    "sass:watch": "sass --watch src/custom.scss dist/style.css"
}
sau đó vào file custom.scss đầu tiên import bootstrap functions
@import "bootstrap/scss/functions";
tiếp theo override biến
$primary: #E63946;
sau đó import các core system của bootstrap
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";
cuối cùng import bootstrap
@import "bootstrap/scss/bootstrap";
cuối cùng ta chạy để compile ra file css cuối cùng
npm run sass:build

ta không nên override trực tiếp vì chỉ đổi được riêng .btn-primary, dễ bị bootstrap ghi đè khi update version, code khó maintain và không đồng bộ toàn hệ thống. dùng SASS variables sẽ giúp toàn bộ component liên quan như btn, alert, navbar, text-primary, bg-primary đổi màu cùng lúc và đúng theo kiến trúc của bootstrap.

Câu C2
Tiêu chí	Code thuần	Bootstrap
Số dòng cần thiết	Dài hơn vì phải tự viết CSS	Tối thiểu vì có class sẵn
Thời gian phát triển	Lâu hơn	Nhanh hơn nhiều
Khả năng tùy biến	Tốt hơn, kiểm soát toàn bộ UI	Phụ thuộc structure/class của Bootstrap

chỉ nên dùng bootstrap khi xây dựng các deadline ngắn cần prototype nhanh vì bootstrap giúp dựng layout nhanh 

còn nếu để xây dựng dự án lớn thì không nên dùng bởi bootstrap sẽ khiến giao diện trở nên đại trà dễ giống với các web khác khiến dự án trở nên thiếu chuyên nghiệp