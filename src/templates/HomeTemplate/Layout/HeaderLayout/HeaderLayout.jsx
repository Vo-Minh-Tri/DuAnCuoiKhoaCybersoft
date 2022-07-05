import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_DANH_SACH_PHONG_FILTER } from "../../../../redux/actions/type_action/QuanLyPhongType";

export default function HeaderLayout() {
  const dispatch = useDispatch();

  const findLocation = () => {
    const action = {
      type: SET_DANH_SACH_PHONG_FILTER,
    };
    dispatch(action);
  };
  return (
    <header>
      <div className="container py-3">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="logo" style={{ color: "#ff385c" }}>
            <div className="flex justify-center items-center ">
              <i className="fab fa-airbnb mr-2 text-4xl"></i>
              <div className="text-2xl font-bold">airbnb</div>
            </div>
          </div>

          {/*  */}
          <div className="search-tabpanel flex justify-center items-center">
            <div className="py-3.5 px-6">
              <label htmlFor="">
                <div className="text-xs font-semibold">Địa điểm</div>
                <input
                  id="inputLocation"
                  className="outline-none"
                  placeholder="Bạn sắp đi đâu"
                  type="text"
                />
              </label>
            </div>
            <div className="h-8"></div>
            <div className="py-3.5 px-6">
              <div className="text-xs font-semibold">Thời gian</div>
              <div>1 tuần vào</div>
            </div>
            <div className="h-8"></div>
            <div className="flex justify-center items-center ">
              <div className="py-3.5 px-6">
                <div className="text-xs font-semibold">Khách</div>
                <div>Thêm khách</div>
              </div>
              <div className="pr-2.5">
                <button onClick={findLocation} className="btn btn-airbnb">
                  <i className="fa fa-search"></i>
                  <span className="pl-2">Tìm kiếm</span>
                </button>
              </div>
            </div>
          </div>

          {/* trở thành chủ nhà */}
          <div className="flex justify-center items-center">
            <div className="p-3">
              <div className="text-sm font-semibold">Trở thành chủ nhà</div>
            </div>
            <div className="p-3">
              <i className="fa fa-globe"></i>
            </div>
            <div className="user py-1.5 pr-1.5 pl-3">
              <div>
                <button
                  className="flex justify-center items-center"
                  type="button"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <i className="fa fa-bars mr-3"></i>
                  <i className="fa fa-user-circle text-3xl"></i>
                </button>
              </div>
              {/* <div
                class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    Account settings
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Support
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    License
                  </a>
                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      class="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-3"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
