import React, { useCallback } from "react";
import { useState } from "react";
import {
  ACESSTOKEN,
  TOKENCYBERSOFT,
} from "../../../../util/settings/config";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";

export default function UploadImageDemo(props) {
  const { id, img } = props;
  const [imgRoom, setImgRoom] = useState(img);

  const headerReq = {
    token: localStorage.getItem(ACESSTOKEN),
    tokenByClass: TOKENCYBERSOFT,
  };

  const getBase64 = useCallback((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }, []);

  const handleChange = useCallback(
    async (info) => {
      const { status, name, originFileObj } = info.file;
      if (status === "done") {
        const baseImg64 = await getBase64(originFileObj);
        setImgRoom(baseImg64);
        message.success(`${name} File Update Thành Công`);
        return;
      }

      if (status === "error") {
        message.error(`${name} File Update  Thất Bại`);
      }
    },
    [getBase64]
  );
  return (
    <Upload
      onChange={handleChange}
      className="avatar-uploader"
      accept="image/x-png, image/gif, image/jpeg"
      action={`https://airbnb.cybersoft.edu.vn/api/rooms/upload-image/${id}`}
      headers={headerReq}
    >
      <div>
        <img src={imgRoom} alt="" />
      </div>

      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  );
}
