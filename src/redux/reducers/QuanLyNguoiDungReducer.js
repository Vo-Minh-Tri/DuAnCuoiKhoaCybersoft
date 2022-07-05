import { GET_USER_DETAIL } from "../actions/type_action/QuanLyNguoiDungType";

const stateDefault = {
  user: {},
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_USER_DETAIL: {
      state.user = action.user;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
