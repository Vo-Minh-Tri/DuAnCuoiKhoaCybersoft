import { Form, Input, InputNumber, Select, Switch } from "antd";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  layThongTinChiTietPhong,
  taoPhongAction,
} from "../../../../redux/actions/QuanLyPhongAction";
import { layDanhSachViTriAction } from "../../../../redux/actions/QuanLyViTriAction";

const { Option } = Select;

export default function EditRoom(props) {
  const { arrViTri } = useSelector((state) => state.QuanLyViTriReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachViTriAction());
  }, []);
  const renderViTri = () => {
    return arrViTri.map((viTri, index) => {
      return (
        <Option value={viTri._id} key={index}>
          {viTri.province}
        </Option>
      );
    });
  };

  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layThongTinChiTietPhong(id));
  }, []);
  const { chiTietPhong } = useSelector((state) => state.QuanLyPhongReducer);

  const provinceDefault = chiTietPhong.locationId?.province;
  const index = arrViTri.findIndex((viTri) => {
    return viTri.province === provinceDefault;
  });
  const locationDefault = arrViTri[index];
  console.log({ locationDefault });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: chiTietPhong.name,
      guests: chiTietPhong.guests,
      bedRoom: chiTietPhong.bedRoom,
      bath: chiTietPhong.bath,
      description: chiTietPhong.description,
      price: chiTietPhong.price,
      elevator: chiTietPhong.elevator,
      hotTub: chiTietPhong.hotTub,
      pool: chiTietPhong.pool,
      indoorFireplace: chiTietPhong.indoorFireplace,
      dryer: chiTietPhong.dryer,
      gym: chiTietPhong.gym,
      kitchen: chiTietPhong.kitchen,
      wifi: chiTietPhong.wifi,
      heating: chiTietPhong.heating,
      cableTV: chiTietPhong.cableTV,
      image: chiTietPhong.image,
      locationId: locationDefault?._id,
    },
    onSubmit: (values) => {
      dispatch(taoPhongAction(values));
    },
  });

  const handleSwitch = (name) => {
    return (values) => {
      formik.setFieldValue(name, values);
    };
  };

  return (
    <div>
      <h3 className="text-center text-2xl text-rose-600 mb-5">
        Chỉnh sửa thông tin chi tiết phòng
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
        <Form.Item label="Guests">
          <InputNumber
            onChange={handleSwitch("guests")}
            value={formik.values.guests}
            min={1}
            max={4}
          />
        </Form.Item>
        <Form.Item label="BedRoom">
          <InputNumber
            onChange={handleSwitch("bedRoom")}
            value={formik.values.bedRoom}
            min={1}
            max={4}
          />
        </Form.Item>
        <Form.Item label="Bath">
          <InputNumber
            onChange={handleSwitch("bath")}
            value={formik.values.bath}
            min={1}
            max={4}
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </Form.Item>
        <Form.Item label="Price">
          <InputNumber
            onChange={handleSwitch("price")}
            value={formik.values.price}
          />
        </Form.Item>
        <Form.Item label="Elevator">
          <Switch
            onChange={handleSwitch("elevator")}
            checked={formik.values.elevator}
          />
        </Form.Item>
        <Form.Item label="Hot Tub">
          <Switch
            onChange={handleSwitch("hotTub")}
            checked={formik.values.hotTub}
          />
        </Form.Item>
        <Form.Item label="Pool">
          <Switch
            onChange={handleSwitch("pool")}
            checked={formik.values.pool}
          />
        </Form.Item>
        <Form.Item label="Indoor Fireplace">
          <Switch
            onChange={handleSwitch("indoorFireplace")}
            checked={formik.values.indoorFireplace}
          />
        </Form.Item>
        <Form.Item label="Dryer">
          <Switch
            onChange={handleSwitch("dryer")}
            checked={formik.values.dryer}
          />
        </Form.Item>
        <Form.Item label="Gym">
          <Switch onChange={handleSwitch("gym")} checked={formik.values.gym} />
        </Form.Item>
        <Form.Item label="Kitchen">
          <Switch
            onChange={handleSwitch("kitchen")}
            checked={formik.values.kitchen}
          />
        </Form.Item>
        <Form.Item label="Wifi">
          <Switch
            onChange={handleSwitch("wifi")}
            checked={formik.values.wifi}
          />
        </Form.Item>
        <Form.Item label="Heating">
          <Switch
            onChange={handleSwitch("heating")}
            checked={formik.values.heating}
          />
        </Form.Item>
        <Form.Item label="CableTV">
          <Switch
            onChange={handleSwitch("cableTV")}
            checked={formik.values.cableTV}
          />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <Input
            name="image"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
        </Form.Item>
        <Form.Item name="locationId" label="Location">
          <Select
            style={{
              width: "100%",
            }}
            onChange={handleSwitch("locationId")}
            defaultActiveFirstOption={true}
            defaultValue={formik.values.locationId}
            allowClear
          >
            {renderViTri()}
          </Select>
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
