import { baseService } from "./baseService";

export class QuanLyViTriService extends baseService {
  constructor() {
    super();
  }
  taoViTri = (formData) => {
    return this.post(`api/locations`, formData);
  };
  xoaViTri = (id) => {
    return this.delete(`api/locations/${id}`);
  };
  layDanhSachViTri = () => {
    return this.get("api/locations");
  };
  layThongTinViTri = (id) => {
    return this.get(`api/locations/${id}`);
  };
  capNhatThongTinViTri = (id, formData) => {
    return this.put(`api/locations/${id}`, formData)
  }
}

export const qlyViTriService = new QuanLyViTriService();
