import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { layThongTinChiTietNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";

export default function Profile(props) {
  const { user } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const dispatch = useDispatch();
  const handleAvatar = () => {
    if (user.avatar) {
      return user.avatar;
    } else {
      console.log("Chưa có ảnh đại diện");
      return "./img/user_pic-225x225.png";
    }
  };
  useEffect(() => {
    // Lấy thông tin param từ url
    let { id } = props.match.params;
    console.log("id", id);
    const action = layThongTinChiTietNguoiDungAction(id);
    dispatch(action);
  }, []);
  return (
    <div className="container flex mx-auto py-10 px-20">
      <div className="basis-1/3 border-solid border-2 rounded-xl border-slate-100 py-5 px-5 mr-14">
        <div className="flex flex-col items-center justify-center">
          <img
            className="rounded-full text-center"
            src={handleAvatar()}
            alt="..."
            width={150}
          />

          <div className="mt-3">
            <NavLink
              className="text-black font-semibold underline hover:text-black"
              to={`/editphoto`}
            >
              Cập nhật ảnh
            </NavLink>
          </div>
        </div>
        <div className="mt-10">
          <i className="fa-solid fa-id-card text-xl"></i>
          <p className="text-xl font-bold mb-2 mt-3">Xác minh danh tính</p>
          <p className="text-lg mb-7">
            Xác thực danh tính của bạn với huy hiệu xác minh danh tính.
          </p>
          <span className="text-lg font-semibold py-3 px-7 border-solid border-2 border-black rounded-xl">
            Nhận huy hiệu
          </span>
          <hr className="mt-12 mb-8" />
          <p className="text-2xl font-bold">{user.name} đã xác nhận</p>
          <i className="fa-solid fa-check font-extrabold"></i>
          <span className="ml-3 text-lg mb-7">Số điện thoại</span>
        </div>
      </div>
      <div className="basis-2/3 px-5">
        <p className="text-4xl font-semibold mb-3">
          Xin chào, tôi là {user.name}
        </p>
        <p className="text-sm text-slate-500">Bắt đầu tham gia vào 2022</p>
        <p className="underline font-semibold">Chỉnh sửa hồ sơ</p>
        <div className="mt-10">
          <i className="fa-solid fa-star mr-2"></i>
          <span className="text-lg font-semibold">0 đánh giá</span>
        </div>
        <hr className="mt-8 mb-8" />
        <p className="text-black font-semibold underline">Đánh giá của bạn</p>
        <hr className="mt-8" />
      </div>
    </div>
  );
}
