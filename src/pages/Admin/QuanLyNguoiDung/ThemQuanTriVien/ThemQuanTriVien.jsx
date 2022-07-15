import React, { useState } from "react";
import { Form, Input } from "antd";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { themQuanTriVienAction } from "../../../../redux/actions/QuanLyNguoiDungAction";

export default function ThemQuanTriVien() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      // type:"ADMIN",
    },
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(themQuanTriVienAction(values));
    },
  });

  return (
    <Form onSubmitCapture={formik.handleSubmit} className="!ml-5">
      <h1 className="text-xl font-bold">THÊM QUẢN TRỊ VIÊN</h1>
      <Form.Item label="Tên">
        <Input
          name="name"
          style={{ width: 700 }}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Email">
        <Input
          name="email"
          style={{ width: 700 }}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Số điện thoại">
        <Input
          name="phone"
          style={{ width: 700 }}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Mật khẩu">
        <Input
          name="password"
          style={{ width: 700 }}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Địa chỉ">
        <Input
          name="address"
          style={{ width: 700 }}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Chức vụ">
        <Input
          name="type"
          style={{ width: 700 }}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Thêm">
        <button type="submit" className="px-2 py-1 bg-blue-700 text-orange-500">
          Thêm quản trị viên
        </button>
      </Form.Item>
    </Form>
  );
}
