import React, { useEffect } from "react";
import { Form, Input, InputNumber, Select, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  capNhatThongTinViTriAction,
  layThongTinViTriAction,
} from "../../../../redux/actions/QuanLyViTriAction";
import { useFormik } from "formik";

export default function EditLocation(props) {
  const { thongTinViTri } = useSelector((state) => state.QuanLyViTriReducer);

  console.log({ thongTinViTri });

  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layThongTinViTriAction(id));
    console.log({ id });
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      _id: thongTinViTri._id,
      name: thongTinViTri.name,
      province: thongTinViTri.province,
      country: thongTinViTri.country,
      valueate: thongTinViTri.valueate,
    },
    onSubmit: (values) => {
      console.log({ values });
      dispatch(capNhatThongTinViTriAction(values._id, values));
    },
  });

  const handleChange = (name) => {
    return (values) => {
      formik.setFieldValue(name, values);
    };
  };
  return (
    <div>
      <h3 className="text-center text-2xl text-rose-600 mb-5">
        Chỉnh sửa thông tin vị trí
      </h3>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Form.Item label="Name">
          <Input
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </Form.Item>
        <Form.Item label="Province">
          <Input
            name="province"
            onChange={formik.handleChange}
            value={formik.values.province}
          />
        </Form.Item>

        <Form.Item label="Country">
          <Input
            name="country"
            onChange={formik.handleChange}
            value={formik.values.country}
          />
        </Form.Item>
        <Form.Item label="Valueate">
          <InputNumber
            name="valueate"
            onChange={handleChange("valueate")}
            value={formik.values.valueate}
            min={0}
            max={100}
          />
        </Form.Item>
        <div className="text-center">
          <button
            type="submit"
            className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded"
          >
            Cập nhật
          </button>
        </div>
      </Form>
    </div>
  );
}
