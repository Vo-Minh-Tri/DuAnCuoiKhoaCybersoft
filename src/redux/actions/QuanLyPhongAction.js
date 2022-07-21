import { history } from "../../App";
import { qlyPhongService } from "../../services/QuanLyPhongService";
import {
  SET_CHI_TIET_PHONG,
  SET_DANH_SACH_PHONG,
} from "../type_action/QuanLyPhongType";
import { message } from "antd";

export const layDanhSachPhongAction = () => {
  return async (dispatch) => {
    try {
      const result = await qlyPhongService.layDanhSachPhong();
      // console.log("result", result);
      dispatch({
        type: SET_DANH_SACH_PHONG,
        arrRoom: result.data,
      });
    } catch (error) {
      console.log("ERROR:", error);
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

export const capNhatThongTinPhongAction = (id, formData) => {
  return async (dispatch) => {
    try {
      const result = await qlyPhongService.capNhatThongTinPhong(id, formData);
      message.success("CẬP NHẬT PHÒNG THÀNH CÔNG");

      history.push("/admin/rooms");
      dispatch(layDanhSachPhongAction());
    } catch (error) {
      console.log({ error });
    }
  };
};

export const xoaPhongChoThueAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await qlyPhongService.xoaPhongChoThue(id);
      message.success("ĐÃ XÓA PHÒNG THÀNH CÔNG");
      dispatch(layDanhSachPhongAction());
    } catch (error) {
      console.log({ error });
    }
  };
};

export const datPhongAction = (thongTinDatPhong) => {
  return async (dispatch) => {
    try {
      const result = await qlyPhongService.datPhong(thongTinDatPhong);
      message.success("ĐẶT PHÒNG THÀNH CÔNG");
    } catch (error) {
      console.log("ERROR:", error);
      message.error("ĐẶT PHÒNG THẤT BẠI");
    }
  };
};

export const taoPhongAction = (formData) => {
  return async () => {
    try {
      const result = await qlyPhongService.taoPhongChoThue(formData);
      // console.log({ result });
    } catch (error) {
      console.log("ERROR:", error);
    }
  };
};

export const capNhatHinhAnhPhongAction = (id, fileData) => {
  return async (dispatch) => {
    try {
      const result = await qlyPhongService.capNhatHinhAnhPhong(id, fileData);
      console.log({ result });
      message.success("CẬP NHẬT HÌNH THÀNH CÔNG");
    } catch (error) {
      console.log({ error });
    }
  };
};
