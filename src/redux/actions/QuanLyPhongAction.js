import { qlyPhongService } from "../../services/QuanLyPhongService";
import {
  SET_CHI_TIET_PHONG,
  SET_DANH_SACH_PHONG,
} from "./type_action/QuanLyPhongType";

export const layDanhSachPhongAction = () => {
  return async (dispatch) => {
    try {
      const result = await qlyPhongService.layDanhSachPhong();
      console.log("result", result);
      dispatch({
        type: SET_DANH_SACH_PHONG,
        arrRoom: result.data,
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export const layThongTinChiTietPhong = (id) => {
  return async (dispatch) => {
    try {
      const result = await qlyPhongService.layThongTinChiTietPhong(id);
      // console.log("result", result);
      // Sau khi lấy được dữ liệu thành công từ api về, ta đưa dữ liệu lên reducer
      dispatch({
        type: SET_CHI_TIET_PHONG,
        roomDetail: result.data,
      });
    } catch (err) {
      console.log("ERROR", err.reponse?.data);
    }
  };
};
