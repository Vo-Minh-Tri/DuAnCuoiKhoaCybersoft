import React, { useEffect } from "react";
import AntdDatePicker from "./AntdDatePicker";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinChiTietPhong } from "../../redux/actions/QuanLyPhongAction";

export default function Detail(props) {
  const chiTietPhong = useSelector(
    (state) => state.QuanLyPhongReducer.chiTietPhong
  );
  // const locationId = useSelector(
  //   (state) => state.QuanLyPhongReducer.chiTietPhong.locationId
  // );

  // locationId nó lấy từ chi tiết phòng ra mà, chứ sao lại dùng useSelector v ta
  const { locationId } = chiTietPhong; // chỗ này là bóc tách phần tử spread operator, coi lại cái này nha

  console.log(locationId?.image); // chỗ này cần optional channing vì lúc đầu cái chi tiết phòng nó chưa có do đợi lấy từ API về, cái nào mà đợi lấy từ API về thì cho nó cái ? khỏi nó báo lỗi
  // console.log({ chiTietPhong });
  // console.log("props", props);

  // ok rồi đó

  const dispatch = useDispatch();
  let id = props.match.params.id;

  useEffect(() => {
    dispatch(layThongTinChiTietPhong(id));
  }, []);

  return (
    <section className="container">
      {/* header-detail */}
      <div className="header-detail pt-6">
        <h1 className="font-semibold text-3xl">{chiTietPhong.name}</h1>
        <div className="flex justify-between mt-2 text-sm">
          <div className="flex items-center">
            <span className="font-semibold">
              <i className="fa fa-star"></i>
              <span> 5,0 · </span>
              <button>
                <span className="font-semibold underline">
                  {locationId?.valueate} đánh giá
                </span>
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
                {locationId?.name}, {locationId?.province}, {locationId?.country}
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
        <img className="w-full rounded-2xl" src={chiTietPhong.image} alt="" />
      </div>

      {/* content-detail */}
      <div className="flex justify-between">
        <div className="w-7/12">
          <div className="header-content pt-12 pb-6">
            <h3 className="text-2xl font-semibold mb-2">
              Toàn bộ căn hộ {chiTietPhong.name}
            </h3>
            <div className="text-base">
              <span>{chiTietPhong.guests} khách</span>
              <span> · {chiTietPhong.bedRoom} phòng ngủ</span>
              <span> · {chiTietPhong.bedRoom} giường</span>
              <span> · {chiTietPhong.bath} phòng tắm</span>
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
              <div>{chiTietPhong.elevator}elevator</div>
              <div>{chiTietPhong.hotTub}hotTub</div>
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

        {/* Đăt phòng */}
        <div className="w-4/12 ml-2">
          <div className="mt-12 p-6 border border-solid rounded-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-2xl font-semibold">{chiTietPhong.price}đ</span>
                <span className="text-base">/đêm</span>
              </div>
              <div>
                <i className="fa fa-star"></i>
                <span className="font-semibold"> 4,95 · </span>
                <span
                  className="underline font-semibold"
                  style={{ color: "#717171" }}
                >
                  199 đánh giá
                </span>
              </div>
            </div>
            <div className="mb-4">
              <button className="w-full">
                <AntdDatePicker></AntdDatePicker>
              </button>
            </div>
            <button
              className="btn-airbnb w-full font-semibold text-base"
              style={{ padding: "14px 24px", borderRadius: "8px" }}
            >
              Đặt phòng
            </button>

            <div className="mt-4 text-center">Bạn vẫn chưa bị trừ tiền</div>

            <div className="mt-6 text-base">
              <div className="flex justify-between">
                <div className="underline">{chiTietPhong.price}đ x 5 đêm</div>
                <div>$2.150</div>
              </div>
              <div className="pt-4 flex justify-between">
                <div className="underline">Phí dịch vụ</div>
                <div>$273</div>
              </div>
              <div
                className="mt-6 pt-6 font-semibold text-base flex justify-between"
                style={{ borderTop: "1px solid rgb(221, 221, 221)" }}
              >
                <div>Tổng trước thuế</div>
                <div>$1.884</div>
              </div>
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
