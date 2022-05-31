import React from "react";

export default function HeaderLayout() {
  return (
    <header>
      <div className="container py-3">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="logo" style={{color: '#ff385c'}}>
            <div className="flex justify-center items-center ">
              <i className="fab fa-airbnb mr-2 text-4xl"></i>
              <p className="text-2xl font-bold">airbnb</p>
            </div>
          </div>

          {/*  */}
          <div className="search-tabpanel flex justify-center items-center">
            <div className="py-3.5 px-6">
              <label htmlFor="">
                <p className="text-xs font-semibold">Địa điểm</p>
                <input
                  className="outline-none"
                  placeholder="Bạn sắp đi đâu"
                  type="text"
                />
              </label>
            </div>
            <div className="h-8"></div>
            <div className="py-3.5 px-6">
              <p className="text-xs font-semibold">Thời gian</p>
              <p>1 tuần vào</p>
            </div>
            <div className="h-8"></div>
            <div className="flex justify-center items-center ">
              <div className="py-3.5 px-6">
                <p className="text-xs font-semibold">Khách</p>
                <p>Thêm khách</p>
              </div>
              <div className="pr-2.5">
                <button className="btn btn-danger">
                  <i className="fa fa-search"></i>
                  <span className="pl-2">Tìm kiếm</span>
                </button>
              </div>
            </div>
          </div>

          {/* trở thành chủ nhà */}
          <div className="flex justify-center items-center">
            <div className="p-3">
              <p className="text-sm font-semibold">Trở thành chủ nhà</p>
            </div>
            <div className="p-3">
              <i className="fa fa-globe"></i>
            </div>
            <div className="user py-1.5 pr-1.5 pl-3">
              <button className="flex justify-center items-center" type="button">
                <i className="fa fa-bars mr-3"></i>
                <i className="fa fa-user-circle text-3xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
