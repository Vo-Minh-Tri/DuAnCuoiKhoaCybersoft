import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }
  layThongTinUser = (id) => {
    return this.get(`api/users/${id}`);
  };
}
export const qlyNguoiDungService = new QuanLyNguoiDungService();

