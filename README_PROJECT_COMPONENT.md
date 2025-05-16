# Chức năng các file trong dự án

- **App.js**: Là component gốc của ứng dụng, chứa Header và Outlet để render các route con.
- **Layout.js**: Định nghĩa cấu trúc các route chính của ứng dụng, bao gồm Home, User, Admin, Login, Register và ToastContainer để hiển thị thông báo.
- **index.js**: Điểm khởi đầu của ứng dụng React, thiết lập Redux Provider, PersistGate, BrowserRouter và render Layout.
- **reportWebVitals.js**: Đo hiệu suất web (web vitals) và gửi dữ liệu này nếu cần.
- **services/apiService.js**: Chứa các hàm gọi API liên quan đến user (tạo, lấy danh sách, cập nhật, xóa, đăng nhập, đăng ký, lấy quiz của user).
- **redux/action/userAction.js**: Định nghĩa action và action creator cho việc login user.
- **redux/reducer/userReducer.js**: Xử lý state liên quan đến user (thông tin tài khoản, trạng thái đăng nhập).
- **redux/reducer/counterReducer.js**: Quản lý state bộ đếm (count) và tên (name), có thể dùng cho mục đích demo hoặc test.
- **redux/store.js**: (Nếu có) Thường là nơi cấu hình store Redux và persistor.
- **components/Header/Header.js**: Component Header, hiển thị thanh điều hướng, các nút login/register hoặc dropdown settings khi đã đăng nhập.
- **components/Home/HomePage.js**: Trang chủ, hiển thị video nền và nội dung giới thiệu, nút "Get started".
- **components/Auth/Login.js**: Form đăng nhập, xử lý validate, gọi API login, dispatch action login, chuyển hướng sau khi đăng nhập.
- **components/Auth/Register.js**: Form đăng ký, validate email/password, gọi API đăng ký, chuyển hướng sang login khi thành công.
- **components/Auth/LoginClone.js**: Một phiên bản đơn giản của form login, chỉ có input email (có thể dùng để demo hoặc test UI).
- **components/User/User.js**: Component đơn giản, chỉ hiển thị "user component" (có thể là placeholder).
- **components/User/ListQuiz.js**: Lấy danh sách quiz của user từ API và hiển thị dưới dạng các card.
- **components/Admin/Admin.js**: Layout cho trang admin, gồm sidebar, header, main content (Outlet).
- **components/Admin/Sidebar.js**: Sidebar cho trang admin, có các menu điều hướng tới dashboard, quản lý user, quiz, câu hỏi.
- **components/Admin/Content/ManageUser.js**: Trang quản lý user, hiển thị danh sách user, phân trang, các nút thêm/sửa/xem/xóa user, gọi các modal tương ứng.
- **components/Admin/Content/TableUserPaginate.js**: Bảng hiển thị danh sách user với phân trang, các nút thao tác (xem, sửa, xóa).
- **components/Admin/Content/ModalCreateUser.js**: Modal thêm mới user, nhập thông tin, upload ảnh, gọi API tạo user.
- **components/Admin/Content/ModalUpdateUser.js**: Modal cập nhật thông tin user, cho phép sửa username, role, ảnh đại diện.
- **components/Admin/Content/ModalDeleteUser.js**: Modal xác nhận xóa user, gọi API xóa user.
- **components/Admin/Content/ViewUser.js**: Modal xem chi tiết thông tin user (chỉ đọc, không chỉnh sửa).
- **assets/**: Chứa các file media như ảnh, video dùng cho giao diện.
- **ultils/axiosCustomize.js**: (Nếu có) Thường là nơi cấu hình instance axios cho các request API.

> Các file css/scss không liệt kê vì chỉ phục vụ cho việc style giao diện.