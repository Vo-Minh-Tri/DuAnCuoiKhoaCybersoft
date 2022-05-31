import React from "react";

export default function Detail() {
  return (
    <section className="container">
      {/* header-detail */}
      <div className="header-detail pt-6">
        <h1 className="font-semibold text-3xl">
          Biệt thự Luna tại Sumberkima Hill Retreat
        </h1>
        <div className="flex justify-between mt-2 text-sm">
          <div className="flex items-center">
            <span className="font-semibold">
              <i className="fa fa-star"></i>
              <span> 5,0 · </span>
              <button>
                <span className="font-semibold underline">8 đánh giá</span>
              </button>
            </span>

            <span className="mx-2 mr-2">.</span>
            <span className="mr-1">
              <i className="ionicons ion-ribbon-a"></i>
            </span>
            <span>Chủ nhà siêu cấp</span>
            <span className="mx-2 mr-2">.</span>
            <button>
              <span className="font-semibold underline">
                Pemuteran, Bali, Indonesia
              </span>
            </button>
          </div>
          <div className="flex text-base">
            <button className="flex items-center p-2 mr-1">
              <i className="fa fa-share-square mr-2"></i>
              <span className="font-semibold underline">Chia sẻ</span>
            </button>
            <button className="flex items-center p-2 mr-1">
              <i className="ionicons ion-android-favorite-outline mr-2 text-lg"></i>
              <span className="font-semibold underline">Lưu</span>
            </button>
          </div>
        </div>
      </div>

      {/* image */}
      <div>
        <img
          className="w-full rounded-2xl"
          src="https://airbnb.cybersoft.edu.vn/public/temp/1636703587023_ve-dep-bien-nha-trang.jpg"
          alt=""
        />
      </div>

      {/* content-detail */}
      <div className="flex ">
        <div className="w-7/12">
          <div className="header-content pt-12 pb-6">
            <h3 className="text-2xl font-semibold">
              Toàn bộ Biệt thự Luna tại Sumberkima Hill Retreat
            </h3>
            <div>
              <span>2 khách</span>
              <span> · 1 phòng ngủ</span>
              <span> · 1 giường</span>
              <span> · 1 phòng tắm</span>
            </div>
          </div>
          <hr />
          <div className="py-8">
            <div className="flex items-center text-lg">
              <i className="fa fa-calendar-times "></i>
              <span className="ml-4 font-semibold">
                Hủy miễn phí trong 48 giờ.
              </span>
            </div>
          </div>
          <hr />
          <div className="py-8">
            <img
              className="mb-4"
              style={{ height: "26px" }}
              src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
              alt=""
            />
            <p>
              Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ nhà
              hủy, thông tin nhà/phòng cho thuê không chính xác và những vấn đề
              khác như sự cố trong quá trình nhận phòng.
            </p>
          </div>
          <hr />
          <div className="py-8">
            <p>
              Biệt thự này bao bọc tất cả những gì tuyệt vời về Ubud trong cùng
              một nơi, thiết kế cực kỳ rộng lớn và rộng rãi của nó chi phối tính
              thẳng đứng của cấu trúc tổng thể của nó. Với 6 phòng ngủ nằm ở các
              phần khác nhau của ngôi nhà, biệt thự này phát triển mạnh về không
              gian rộng rãi và hoàn hảo cho các cuộc tụ họp gia đình của bạn.
              Trong mỗi phần của ngôi nhà, bạn sẽ tìm thấy những luồng gió lạnh
              tự nhiên thổi qua và chảy qua toàn bộ biệt thự mà không cần nỗ
              lực.
            </p>
          </div>
          <hr />
          <div className="py-12">
            <h3 className="text-2xl font-semibold pb-6">
              Nơi này có những gì cho bạn
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>elevator</div>
              <div>hotTub</div>
              <div>pool</div>
              <div>indoorFireplace</div>
              <div>dryer</div>
              <div>gym</div>
              <div>kitchen</div>
              <div>wifi</div>
              <div>heating</div>
              <div>cableTV</div>
            </div>
          </div>
        </div>

        <div className="w-4/12 ml-2">
          <div className="mt-12 p-6 border border-solid rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <span>$430</span>
                <span>/đêm</span>
              </div>
              <div>
                <i className="fa fa-star"></i>
                <span> 4,95 · </span>
                <span>199 đánh giá</span>
              </div>
            </div>
            <div className="border-2 border-solid rounded-lg">
                <button className="flex">
                  <div>
                    <p>NHẬN PHÒNG</p>
                    <p>7/6/2022</p>
                  </div>
                </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* Đánh giá */}
      <div className="py-12">
        <div className="flex items-center font-semibold mb-8">
          <i className="fa fa-star"></i>
          <span className="text-2xl ml-2">4,90 · 52 đánh giá</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>Mức độ sạch sẽ</div>
          <div>Độ chính xác</div>
          <div>Giao tiếp</div>
          <div>Vị trí</div>
          <div>Nhận phòng</div>
          <div>Giá trị</div>
        </div>
        <div className="grid grid-cols-2">
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
