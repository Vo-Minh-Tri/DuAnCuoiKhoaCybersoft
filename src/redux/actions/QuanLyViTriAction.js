import { history } from "../../App";
import { qlyViTriService } from "../../services/QuanLyViTriService";
import {
  SET_DANH_SACH_VI_TRI,
  SET_THONG_TIN_VI_TRI,
} from "../type_action/QuanLyViTriType";
import { message } from 'antd';

export const taoViTriAction = (formData) => {
  return async (dispatch) => {
    try {
      const result = await qlyViTriService.taoViTri(formData);
      console.log({ result });
      message.success("TẠO VỊ TRÍ THÀNH CÔNG");
      history.push("/admin/locations");
    } catch (error) {
      console.log({ error });
    }
  };
};

export const xoaViTriAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await qlyViTriService.xoaViTri(id);
      message.success("ĐÃ XÓA VỊ TRÍ THÀNH CÔNG");
      dispatch(layDanhSachViTriAction());
    } catch (error) {
      console.log({ error });
    }
  };
};

export const layDanhSachViTriAction = () => {
  return async (dispatch) => {
    try {
      const result = await qlyViTriService.layDanhSachViTri();
      // console.log({ result });
      dispatch({
        type: SET_DANH_SACH_VI_TRI,
        arrViTri: result.data,
      });
    } catch (error) {
      console.log({ error });
    }
  };
};

export const layThongTinViTriAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await qlyViTriService.layThongTinViTri(id);
      // console.log("result", result);
      dispatch({
        type: SET_THONG_TIN_VI_TRI,
        locationDetail: result.data,
      });
    } catch (error) {
      console.log({ error });
    }
  };
};

export const capNhatThongTinViTriAction = (id, formData) => {
  return async (dispatch) => {
    try {
      const result = await qlyViTriService.capNhatThongTinViTri(id, formData);
      message.success("CẬP NHẬT VỊ TRÍ THÀNH CÔNG");
      history.push("/admin/locations");
      dispatch(layDanhSachViTriAction());
    } catch (error) {
      console.log({ error });
    }
  };
};
