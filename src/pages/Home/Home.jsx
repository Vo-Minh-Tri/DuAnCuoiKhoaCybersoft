import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MoonLoader from "react-spinners/MoonLoader";
import Room from "../../components/Room/Room";
import { layDanhSachPhongAction } from "../../redux/actions/QuanLyPhongAction";

export default function Home(props) {
  const { arrRoom } = useSelector((state) => state.QuanLyPhongReducer);

  const [list, setList] = useState(12);
  const [loading, setLoading] = useState(false);
  const arrListRoomSlice = arrRoom.slice(0, list);
  const override = {
    marginTop: "40px",
  };
  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 500
      ) {
        setLoading(true);
        setList(list + 8);
        if (arrListRoomSlice.length === arrRoom.length) {
          setLoading(false);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  window.addEventListener("scroll", handleInfiniteScroll);
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const action = layDanhSachPhongAction();
    dispatch(action);
  }, []);
  const renderRooms = () => {
    return arrListRoomSlice.map((room, index) => {
      return <Room key={index} room={room} />;
    });
  };
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col items-center">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
          {renderRooms()}
        </div>
        <MoonLoader
          loading={loading}
          cssOverride={override}
          color="#ff4d00"
          size={60}
          speedMultiplier={0.5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}
