import { Form, Input, InputNumber, Select, Switch } from "antd";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { taoViTriAction } from "../../../../redux/actions/QuanLyViTriAction";

export default function AddNewLocation() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      province: "",
      country: "",
      valueate: 0,
    },
    onSubmit: (values) => {
      dispatch(taoViTriAction(values));
      console.log({ values });
    },
  });

  const handleChange = (name) => {
    return (values) => {
      formik.setFieldValue(name, values);
    };
  };

  return (
    <Form
      onSubmitCapture={formik.handleSubmit}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
    >
      <Form.Item label="Name">
        <Input name="name" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Province">
        <Input name="province" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Country">
        <Input name="country" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="valueate">
        <InputNumber min={0} max={100} onChange={handleChange("valueate")} />
      </Form.Item>

      <div className="text-center">
        <button
          type="submit"
          className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded"
        >
          Tạo vị trí mới
        </button>
      </div>
    </Form>
  );
}
