import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { taoPhongAction } from "../../../../redux/actions/QuanLyPhongAction";

export default function AddNewRoom() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      guests: 1,
      bedRoom: 1,
      bath: 1,
      description: "",
      price: 100000,
      elevator: false,
      hotTub: false,
      pool: false,
      indoorFireplace: false,
      dryer: false,
      gym: false,
      kitchen: false,
      wifi: false,
      heating: false,
      cableTV: false,
      image: "",
      locationId: "",
    },
    onSubmit: (values) => {
      console.log({ values });
      // const formData = new FormData();
      // for (let key in values) {
      //   return formData.append(key, values[key]);
      // }
      // console.log({ formData });
      dispatch(taoPhongAction(values));
    },
  });

  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleSwitch = (name) => {
    return (values) => {
      formik.setFieldValue(name, values);
    };
  };

  const handleInputNumber = (name) => {
    return (values) => {
      formik.setFieldValue(name, values);
    };
  };

  return (
    <Form
      onSubmitCapture={formik.handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      {/* <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item> */}
      <Form.Item label="Name">
        <Input name="name" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Guests">
        <InputNumber onChange={handleInputNumber("guests")} min={1} max={4} />
      </Form.Item>
      <Form.Item label="BedRoom">
        <InputNumber onChange={handleInputNumber("bedRoom")} min={1} max={4} />
      </Form.Item>
      <Form.Item label="Bath">
        <InputNumber onChange={handleInputNumber("bath")} min={1} max={4} />
      </Form.Item>
      <Form.Item label="Description">
        <Input name="description" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Price">
        <InputNumber onChange={handleInputNumber("price")} />
      </Form.Item>
      <Form.Item label="Elevator">
        <Switch onChange={handleSwitch("elevator")} />
      </Form.Item>
      <Form.Item label="Hot Tub">
        <Switch onChange={handleSwitch("hotTub")} />
      </Form.Item>
      <Form.Item label="Pool">
        <Switch onChange={handleSwitch("pool")} />
      </Form.Item>
      <Form.Item label="Indoor Fireplace">
        <Switch onChange={handleSwitch("indoorFireplace")} />
      </Form.Item>
      <Form.Item label="Dryer">
        <Switch onChange={handleSwitch("dryer")} />
      </Form.Item>
      <Form.Item label="Gym">
        <Switch onChange={handleSwitch("gym")} />
      </Form.Item>
      <Form.Item label="Kitchen">
        <Switch onChange={handleSwitch("kitchen")} />
      </Form.Item>
      <Form.Item label="Wifi">
        <Switch onChange={handleSwitch("wifi")} />
      </Form.Item>
      <Form.Item label="Heating">
        <Switch onChange={handleSwitch("heating")} />
      </Form.Item>
      <Form.Item label="CableTV">
        <Switch onChange={handleSwitch("cableTV")} />
      </Form.Item>
      <Form.Item label="Hình ảnh">
        <Input name="image" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="LocationId">
        <Input name="locationId" onChange={formik.handleChange} />
      </Form.Item>
      <div className="text-center">
        <button
          type="submit"
          className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded"
        >
          Tạo phòng mới
        </button>
      </div>
    </Form>
  );
}
