import { SET_CHI_TIET_PHONG } from "../actions/type_action/QuanLyPhongType";
import { SET_DANH_SACH_PHONG } from "../actions/type_action/QuanLyPhongType";

const stateDefault = {
  arrRoom: [],
  chiTietPhong: {},
};

export const QuanLyPhongReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHONG: {
      state.arrRoom = action.arrRoom;
      return { ...state };
    }

    case SET_CHI_TIET_PHONG: {
      state.chiTietPhong = action.roomDetail;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
