import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../../App";
import {
  layDanhSachViTriAction,
  xoaViTriAction,
} from "../../../redux/actions/QuanLyViTriAction";

export default function ManagerLocations() {
  const { arrViTri } = useSelector((state) => state.QuanLyViTriReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachViTriAction());
  }, []);
  const data = arrViTri;
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div key={2} style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex]?.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "Mã vị trí",
      dataIndex: "_id",
      width: "15%",
      align: "center",
      sorter: (a, b) => {
        let idA = a._id.toLowerCase().trim();
        let idB = b._id.toLowerCase().trim();
        if (idA > idB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Tên vị trí",
      dataIndex: "name",
      width: "20%",
      align: "center",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      width: "25%",
      align: "center",
      render: (text, viTri, index) => {
        return (
          <div>
            <img src={viTri.image} alt="" />
            <button
              onClick={() => {
                history.push(`/admin/locations/uploadimage/${viTri._id}`);
              }}
            >
              Upload Image
            </button>
          </div>
        );
      },
    },
    {
      title: "Địa điểm",
      width: "22%",
      align: "center",
      render: (viTri) => {
        return <span>{viTri.province}</span>;
      },
    },
    {
      title: "Thao tác",
      dataIndex: "_id",
      align: "center",

      render: (text, viTri) => {
        return (
          <Fragment>
            <button
              onClick={() => {
                history.push(`/admin/locations/edit/${viTri._id}`);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              <i className="fa fa-pencil-alt"></i>
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={() => {
                if (window.confirm("Bạn có muốn xóa" + viTri.name)) {
                  dispatch(xoaViTriAction(viTri._id));
                }
              }}
            >
              <i className="fa fa-trash-alt"></i>
            </button>
          </Fragment>
        );
      },
    },
  ];

  return (
    <div>
      <button
        onClick={() => {
          history.push("/admin/locations/addnewlocation");
        }}
        className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded mb-5"
      >
        Thêm vị trí
      </button>
      <Table columns={columns} dataSource={data} rowKey={"_id"} />
    </div>
  );
}
