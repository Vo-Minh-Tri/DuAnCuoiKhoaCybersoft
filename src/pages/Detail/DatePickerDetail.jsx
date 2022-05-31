import React from "react";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

export default function DatePickerDetail() {
  return (
    <Space direction="vertical" >
      <RangePicker />
      <RangePicker showTime />
      <RangePicker picker="week" />
      <RangePicker picker="month" />
      <RangePicker picker="quarter" />
      <RangePicker picker="year" />
    </Space>
  );
}
