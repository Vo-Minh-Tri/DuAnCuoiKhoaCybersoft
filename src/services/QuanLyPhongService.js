import { baseService } from "./baseService";

export class QuanLyPhongService extends baseService {
  constructor() {
    super();
  }
  layDanhSachPhong = () => {
    return this.get(`api/rooms`);
  };

  layThongTinChiTietPhong = (id) => {
    return this.get(`api/rooms/${id}`);
  };
}

export const qlyPhongService = new QuanLyPhongService();
