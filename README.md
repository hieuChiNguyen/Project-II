# Project-II
## Đề tài: Thiết kế và xây dựng website mua bán giày online

// Các sơ đồ mô tả được vẽ bằng draw.io. Link drive: https://drive.google.com/file/d/13JRD5gPvJ-i-0dkMi2TNgQvDB4fgLX2_/view?usp=sharing

### Tuần 1-2: Khảo sát yêu cầu
  * Phân tích nghiệp vụ:
    + Để thiết kế được một hệ thống hỗ trợ mua bán giày, trước tiên ta cần biết được các luồng sự kiện có thể diễn ra trong hệ thống. 
  Hệ thống gồm nhiều quy trình nghiệp vụ như: Quy trình sử dụng của người mua, quy trình sử dụng của người bán, quy trình sử dụng của người quản lý, …
    + Sơ đồ mô tả các quy trình sử dụng của từng đối tượng nêu trên: https://drive.google.com/file/d/13JRD5gPvJ-i-0dkMi2TNgQvDB4fgLX2_/view?usp=sharing
    
  * Các tác nhân của hệ thống:
    + Khách hàng (người mua): Là những người dùng thường, chưa có tài khoản, đăng ký thành viên để có tài khoản đăng nhập vào hệ thống, khi đó họ sẽ có thể xem sản phẩm, thêm sản phẩm vào giỏ hàng, đặt hàng trên hệ thống
    + Nhân viên (người bán): Là người đăng nhập với vai trò nhân viên, có các chức năng nổi bật như: đăng bán sản phẩm, xử lý đơn hàng
    + Quản lý: Là người đăng nhập với vai trò quản lý, thường liên quan đến việc quản lý doanh thu, kho hàng, thông tin khách hàng 
    
  * Các tính năng cơ bản của website đối với user (người mua sản phẩm):
    + Đăng kí, đăng nhập tài khoản
    + Xem thông tin và chỉnh sửa thông tin cá nhân
    + Tìm kiếm sản phẩm
    + Xem thông tin các sản phẩm     
    + Đặt hàng 
    + Thanh toán trực tuyến
    + Đánh giá sản phẩm
    + Chat với hệ thống để nhận tư vấn qua chatbot
      
  * Các tính năng cơ bản của website đối với đội hỗ trợ khách hàng (người bán sản phẩm, tư vấn):
    + Đăng kí, đăng nhập tài khoản (vai trò nhân viên)
    + Xem thông tin và chỉnh sửa thông tin cá nhân
    + Đăng bán sản phẩm
    + Quản lý thông tin các sản phẩm 
    + Tiếp nhận feedback khách hàng và xử lý phản hồi
    + Theo dõi các đơn hàng (hoàn tất, hoàn trả)
  
  * Các tính năng cơ bản của website đối với admin (người quản lý):
    + Đăng nhập tài khoản (vai trò admin)
    + Thực hiện quản lý các thông tin liên quan:
      - Kho hàng (sản phẩm, số lượng nhập, bán, tồn kho)
      - Thông tin cơ bản của khách hàng, nhân viên
      - Doanh thu 
      - Lịch sử giao dịch
      - Khuyến mãi, voucher
      
  * Các công cụ, framework, ngôn ngữ dự định sử dụng để xây dựng website:
  
### Tuần 3-4: Vẽ biểu đồ usecase
 * Usecase tổng quan: 
   + Usecase tổng quan với tác nhân Khách hàng
   + Usecase tổng quan với tác nhân Nhân viên
   + Usecase tổng quan với tác nhân Quản lý
   
 * Phân rã usecase:
 
 * Đặc tả use case:
