# Một bó hoa dành tặng em · 20/10

Trang tặng hoa, album ảnh người nhận và thiệp chúc mừng ngày Phụ nữ Việt Nam 20/10, dùng HTML, CSS và JavaScript thuần. Hoạt động offline, không cần cài thư viện hoặc build.

## Chạy

Mở `index.html` trực tiếp trong trình duyệt, hoặc chạy từ thư mục này:

```bash
python3 -m http.server 8080
```

Truy cập http://localhost:8080.

## Trang vườn hoa mới

Mở `garden.html` trực tiếp trong trình duyệt, chọn **Ngắm vườn hoa** ở góc trên bên phải trang `index.html`, hoặc truy cập http://localhost:8080/garden.html khi chạy server ở trên. Trang hoạt động offline; khi sao chép sang nơi khác, chép kèm `garden-botany.js`, `background-music.js` và thư mục `assets`.

- Ban đầu chỉ có một bông hoa giữa màn hình. Bấm vào hoa (hoặc dùng Tab rồi Enter/Space) để cả vườn hoa dần nở từ giữa ra hai bên.
- Sau khoảng 7 giây, thiệp chúc 20/10 tự hiện. Chọn **Ngắm vườn hoa**, nút × hoặc Escape để đóng thiệp.
- Chọn **Đọc lại thiệp** để mở lại, hoặc **Cho hoa nở lại** để trở về bông hoa đầu tiên.
- Thiệp và lời chúc được khóa khi xem trên trình duyệt. Để đổi nội dung, sửa văn bản mặc định trong các tệp nguồn.
- Trang thử phát bài `assets/angel-baby_RBZwqvE8.mp3` khi mở và tự lặp lại. Nếu trình duyệt chặn tự phát, chọn **♫ Bật nhạc** để bắt đầu; nút này cũng dùng để tắt nhạc.
- Trang tự điều chỉnh theo màn hình và bỏ qua hoạt ảnh nở khi người xem bật chế độ giảm chuyển động.
- Hoa hồng dùng cùng cách dựng cánh với `index.html`: nhiều vòng cánh cong, tâm xoắn, bóng giữa các cánh, viền bắt sáng và giọt sương. Các hàm vẽ được lấy từ `script.js` sang `garden-botany.js` cho vườn hoa. Lá có gân, thân lay theo gió, hoa nghiêng nhẹ khi rê chuột gần và có cánh hoa bay; chuyển động tạm dừng khi tab bị ẩn.
- Hoa hồng, kem được xen với hoa xanh lá nhạt, xanh dương và trắng. Nền trời xanh có mây mỏng trôi chậm; gió làm thân, lá và đầu hoa lắc lư cùng nhau.
- Có thêm 20 nụ hoa nhiều màu xen qua các lớp của khu vườn, cánh còn khép và đài xanh ôm quanh gốc nụ. Nụ xuất hiện cùng đợt hoa và giữ dáng khép khi vườn đã nở.
- Trang dùng Noto Serif (chữ đứng và nghiêng) cho tiêu đề, lời gửi và chữ ký; Noto Sans cho nội dung. Font có đầy đủ dấu tiếng Việt, được lưu tại `assets/fonts` kèm giấy phép để dùng offline. Khi sao chép trang sang nơi khác, chép kèm thư mục này.

## Trải nghiệm

- Bó hoa nở trước, sau đó xuất hiện phong bì để người xem tự mở thiệp.
- Chạm từng bông hoa để nhận một lời chúc nhỏ. Khi dùng bàn phím, Tab đến bó hoa rồi nhấn Enter, Space hoặc các phím mũi tên.
- Chọn **Mở thiệp** để đọc lời chúc; đóng bằng nút ×, phím Escape hoặc **Gấp thiệp** trên phong bì.
- Hoa và tiêu đề được căn giữa khi vào trang. Khi mở thiệp, cả cụm hoa và thiệp được cân giữa; trang tự chia cột trên màn hình rộng và xếp thiệp xuống dưới trên màn hình hẹp. Thiệp nằm trong luồng trang, nên tiêu đề, ảnh, hoa và lời chúc không bị che; có thể tiếp tục tương tác với hoa khi thiệp mở.
- Chọn **Cho hoa nở lại** để xem lại hiệu ứng.
- Trang thử phát nhạc khi mở và tự lặp lại. Nếu trình duyệt chặn tự phát, bấm **♫ Bật nhạc**; nút này cũng dùng để tắt nhạc.
- Thiệp dài tự tăng chiều cao và cuộn cùng trang. Trang tôn trọng thiết lập giảm chuyển động và tạm dừng hoạt ảnh khi tab bị ẩn.

## Album kỷ niệm

- Album xuất hiện sau lần đầu mở thiệp, hiện dần khi cuộn tới phần ảnh.
- Chọn **Xem album kỷ niệm** trong thiệp để chuyển đến album.
- Ban đầu ảnh xếp chồng như ảnh giấy. **Xòe album** trải ba ảnh thành một hàng trên màn hình rộng và bố cục hai ảnh trên, một ảnh dưới trên điện thoại; **Gấp album** xếp lại.
- Album vẫn giữ lại khi đóng thiệp, để người xem có thể ngắm ảnh tiếp.
- Album chỉ hiển thị các ảnh mặc định; người xem có thể xòe hoặc gấp album nhưng không thể thay ảnh trên trang.


Album gồm ba ô ảnh và chỉ hiển thị ảnh mặc định. Muốn thay ảnh trong bản trang, sửa mã nguồn như sau:

1. Chép ảnh muốn dùng vào thư mục `assets`, ví dụ `assets/me.jpg`.
2. Trong phần `memoryAlbum` ở `index.html`, đổi `src="./assets/portrait-placeholder.webp"` của từng ô ảnh thành đường dẫn tương ứng, ví dụ `src="./assets/me.jpg"`.
3. Sửa `alt` và hai dòng chữ trong `figcaption` nếu muốn cá nhân hóa phần ảnh.

Khung ảnh dùng tỉ lệ 3:4 và tự cắt ảnh vừa khung. Có thể chỉnh `object-position` trong `.portrait-photo img` ở `style.css` để giữ khuôn mặt đúng vị trí.

Ảnh mẫu `assets/portrait-placeholder.webp` (768 × 1024) được tạo bằng công cụ imagegen tích hợp; prompt cuối nằm trong `assets/portrait-prompt.txt`.

## Các tệp

- `index.html`: bố cục, Canvas, thiệp và ảnh mặc định.
- `style.css`: nền hồng, phong bì, giấy gấp, bố cục responsive và chuyển động.
- `script.js`: vẽ bó hoa, hiệu ứng nở hoa, parallax, cánh hoa bay và tương tác từng bông.
- `card.js`: mở/đóng thiệp, chuyển bố cục và hiển thị lời chúc mặc định.
- `album.js`: xòe và gấp album ảnh.
- `background-music.js`: phát và lặp bài nhạc trong `assets/angel-baby_RBZwqvE8.mp3`.
- `assets/portrait-placeholder.webp`: ảnh mẫu có thể thay thế.

Đổi nội dung thiệp mặc định tại `defaultGreeting` trong `card.js`; đổi các lời chúc theo bông hoa tại `WHISPER_NOTES` trong `script.js`. Nội dung được render dưới dạng văn bản thuần.

# flowers-20-10
