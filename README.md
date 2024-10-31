### Bài 1: 
Ý tưởng: Sử dụng vòng lặp có điều kiện while (l < r) (với l là vị trí đầu tiên của chuỗi và r là vị trí cuối của chuỗi), khi vị trí của l và r có kí tự giống nhau sẽ tăng dần vị trí của l, giảm vị trí r đến khi l === r => trả về true, ngược lại trả về false.

### Bài 2:
Ý tưởng : Sử dụng 2 vòng lặp: với i = 0, tăng dần 1 vị trí đến vị trí kế cuối trong mảng và vòng lặp con với j = i+1 tăng dần 1 vị trí đến vị trí cuối trong mảng. Nếu phần tử vị trí i + phần tử vị trí j === target thì thêm 2 phần tử đó vào 1 mảng và thêm mảng đó vào mảng kết quả.

### Bài 3: 
Ý tưởng: Sử dụng Brotli để nén có thể thu được file có size nhỏ nhất có thể.

Các công nghệ, thư viện đã dùng: NodeJS, ExpressJS, Mocha.\
Để chạy thử chương trình, vui lòng tải các thư viện cần thiết với câu lệnh: npm install, sau đó chạy câu lệnh npm test để test.