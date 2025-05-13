# Luồng chạy của project ReactJS

## 1. Khởi động ứng dụng
- File đầu tiên được thực thi là **src/index.js**.
    - Tạo root React tại phần tử có id `'root'` trong `public/index.html`.
    - Bọc toàn bộ ứng dụng với `<Provider store={store}>` để cung cấp Redux store cho toàn bộ app.
    - Bọc tiếp với `<BrowserRouter>` để sử dụng React Router cho điều hướng.
    - Định nghĩa các route chính:
        - `/` sử dụng component `App`.
            - Trang chủ (`/`) hiển thị `HomePage`.
            - `/users` hiển thị component `User`.
        - `/admins` sử dụng component `Admin`.
            - `/admins` (mặc định) hiển thị `DashBoard`.
            - `/admins/manage-users` hiển thị `ManageUser`.
    - Gọi hàm `reportWebVitals()` để đo hiệu năng (không ảnh hưởng luồng chính).

## 2. Component App.js
- Được render khi truy cập `/`.
- Hiển thị:
    - Header (`Header` component).
    - Phần nội dung chính (`<Outlet />`) sẽ render các component con tùy theo route (ví dụ: `HomePage`, `User`).

## 3. Component Header/Header.js
- Hiển thị thanh điều hướng với các link tới Home, User, Admin.
- Các nút Login, SignUp (chưa có logic xử lý).

## 4. Component Admin/Admin.js
- Được render khi truy cập `/admins`.
- Giao diện chia làm hai phần:
    - Sidebar (`Sidebar` component) bên trái.
    - Nội dung chính (`<Outlet />`) bên phải, sẽ render `DashBoard` hoặc `ManageUser` tùy route con.
- Có ToastContainer để hiển thị thông báo.

## 5. Sidebar (components/Admin/Sidebar.js)
- Sử dụng thư viện `react-pro-sidebar`.
- Có các menu điều hướng tới Dashboard, Quản lý Users, Quản lý Quiz, Quản lý Câu hỏi.
- Các link điều hướng sử dụng `react-router-dom`.

## 6. Trang quản lý người dùng (ManageUser.js)
- Được render khi truy cập `/admins/manage-users`.
- Khi mount, gọi API lấy danh sách user (`getAllUsers`).
- Hiển thị bảng danh sách user (dùng `TableUserPaginate`).
- Có các modal để tạo, cập nhật, xem, xóa user (ModalCreateUser, ModalUpdateUser, ViewUser, ModalDeleteUser).

## 7. Các component con của quản lý user
- **TableUserPaginate.js**: Hiển thị bảng user, phân trang (dùng `react-paginate`).
- **ModalUpdateUser.js**: Modal cập nhật thông tin user.
- **ViewUser.js**: Modal xem thông tin user.
- **ModalDeleteUser.js**: Modal xác nhận xóa user.

## 8. Redux
- **store.js**: Tạo Redux store, sử dụng middleware thunk.
- **reducer/rootReducer.js**: Kết hợp các reducer (hiện tại chỉ có `counterReducer`).
- **reducer/counterReducer.js**: Quản lý state bộ đếm (không liên quan trực tiếp tới luồng chính).
- **action/counterAction.js**: Định nghĩa action tăng/giảm counter.

## 9. API Service & Axios
- **ultils/axiosCustomize.js**: Tạo instance axios với baseURL, interceptor cho request/response.
- **services/apiService.js**: Định nghĩa các hàm gọi API như `getAllUsers`, `putUpdateUser`, `deleteUser`,...

## 10. Các file khác
- **App.scss, SideBar.scss**: Chứa style cho các component.
- **HomePage.js**: Hiển thị trang chủ với video và nội dung giới thiệu.
- **User.js**: Hiển thị nội dung đơn giản cho route `/users`.
- **reportWebVitals.js**: Đo hiệu năng (không ảnh hưởng luồng chính).

---

### Tóm tắt luồng chạy chính:
1. **index.js** khởi tạo app, thiết lập Redux, Router.
2. **App.js** là component gốc cho route `/`, render Header và nội dung theo route con.
3. **Admin.js** là component gốc cho route `/admins`, render Sidebar và nội dung theo route con.
4. Các component con (`HomePage`, `User`, `DashBoard`, `ManageUser`, ...) được render tùy theo đường dẫn.
5. Các thao tác với user (CRUD) đều thông qua các modal và gọi API qua service.

---

## Chi tiết luồng chạy các chức năng quan trọng

### 1. Quản lý User (CRUD)

#### a. Lấy danh sách user
- Khi vào trang `/admins/manage-users`, component `ManageUser.js` sẽ gọi hàm `getAllUsers` từ `apiService.js` để lấy danh sách user từ backend.
- Kết quả trả về sẽ được lưu vào state và truyền xuống component `TableUserPaginate.js` để hiển thị bảng danh sách user.

#### b. Xoá user
- Trong bảng user, khi nhấn nút xoá ở một dòng, hàm `handleClickBtnDelete(user)` sẽ được gọi với tham số là object user tương ứng.
- Hàm này sẽ mở modal xác nhận xoá (`ModalDeleteUser`) và truyền thông tin user cần xoá vào.
- Khi xác nhận xoá, hàm `handleSubmitDeleteUser` trong `ModalDeleteUser.js` sẽ gọi `deleteUser(dataDelete.id)` (id của user cần xoá).
- Hàm `deleteUser` trong `apiService.js` sẽ gửi request DELETE lên backend với id user.
- Nếu backend trả về thành công, danh sách user sẽ được cập nhật lại.

#### c. Thêm mới user
- Nhấn nút "Thêm mới" sẽ mở modal `ModalCreateUser`.
- Khi xác nhận, hàm xử lý sẽ gọi API tạo user mới, sau đó cập nhật lại danh sách user.

#### d. Cập nhật user
- Nhấn nút "Sửa" ở một dòng user sẽ mở modal `ModalUpdateUser`.
- Khi xác nhận, hàm xử lý sẽ gọi API cập nhật thông tin user, sau đó cập nhật lại danh sách user.

#### e. Xem chi tiết user
- Nhấn nút "Xem" sẽ mở modal `ViewUser` để hiển thị thông tin chi tiết user.

---

### 2. Điều hướng (Routing)
- Sử dụng `react-router-dom` để điều hướng giữa các trang: Home, User, Admin, Dashboard, Manage Users.
- Sidebar trong trang Admin giúp chuyển nhanh giữa các chức năng quản trị.

---

### 3. Giao tiếp với Backend (API Service)
- Tất cả các thao tác CRUD với user đều thông qua các hàm trong `services/apiService.js`.
- Sử dụng axios để gửi request và nhận response từ backend.
- Có custom axios instance trong `ultils/axiosCustomize.js` để xử lý token, lỗi, v.v.

---

### 4. Redux (nếu sử dụng)
- Store được tạo ở `redux/store.js`, hiện tại chủ yếu dùng cho counter demo.
- Có thể mở rộng để quản lý state toàn cục cho các chức năng lớn hơn.

---

### 5. Hiển thị thông báo
- Sử dụng `react-toastify` để hiển thị thông báo thành công/thất bại khi thao tác với user (thêm, xoá, sửa).

---

Nếu bạn muốn xem chi tiết luồng chạy của một chức năng hoặc file cụ thể nào, hãy hỏi rõ tên chức năng hoặc file đó để được giải thích sâu hơn!
