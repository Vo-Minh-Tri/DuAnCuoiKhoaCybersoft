import React from "react";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

export default function AntdDatePicker() {
  return (
    
    <Space direction="vertical" size={12} style={{ width: '100%', height: '56px' }}>
      <RangePicker style={{ width: '100%',  height: '56px', borderRadius: "12px" }} />
    </Space>
  );
}
