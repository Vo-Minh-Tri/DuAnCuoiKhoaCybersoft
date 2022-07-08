import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }
  layThongTinUser = () => {
    return this.get(`api/users`);
  };
}
export const qlyNguoiDungService = new QuanLyNguoiDungService();

