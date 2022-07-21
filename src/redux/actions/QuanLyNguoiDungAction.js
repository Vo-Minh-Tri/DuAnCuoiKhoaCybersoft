import { history } from "../../App";
import { qlyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { GET_USER_DETAIL, GET_USER_LIST } from "../type_action/QuanLyNguoiDungType";
import { message } from "antd";

export const layThongTinChiTietNguoiDungAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await qlyNguoiDungService.layThongTinUser(id);

      dispatch({
        type: GET_USER_DETAIL,
        user: result.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const layDanhSachNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await qlyNguoiDungService.layDanhSachUser();
      // console.log('result',result);
      dispatch({
        type: GET_USER_LIST,
        userList: result.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const themQuanTriVienAction = (values) => {
  return async (dispatch) => {
    try {
      const result = await qlyNguoiDungService.themQuanTriVien(values);
      message.success("THÊM QUẢN TRỊ VIÊN THÀNH CÔNG");
      console.log("result", result);
      dispatch(layDanhSachNguoiDungAction());
      history.push("/admin/user");
    } catch (error) {
      console.log("error", error.response);
    }
  };
};

export const capNhatNguoiDungAction = (id,values) => {
  return async (dispatch) => {
    try {
      const result = await qlyNguoiDungService.capNhatNguoiDung(id,values);
      message.success("CẬP NHẬT THÀNH CÔNG");
      console.log("result", result);
      dispatch(layDanhSachNguoiDungAction());
      history.push("/admin/user");
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const xoaNguoiDungAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await qlyNguoiDungService.xoaNguoiDung(id);
      console.log("result", result);
      message.success("XÓA NGƯỜI DÙNG THÀNH CÔNG");
      dispatch(layDanhSachNguoiDungAction());
      history.push("/admin/user");
    } catch (error) {
      console.log("error", error);
    }
  };
};
