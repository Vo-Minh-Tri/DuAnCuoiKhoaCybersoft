import { qlyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { GET_USER_DETAIL } from "../type_action/QuanLyNguoiDungType";

export const layThongTinChiTietNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await qlyNguoiDungService.layThongTinUser();
      console.log("result", result);
      dispatch({
        type: GET_USER_DETAIL,
        user: result.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
