import React from "react";

export default function Header() {
  return (
    <header>
      <div className="py-3">
        <div className="logo" style={{ color: "#ff385c" }}>
          <div className="flex items-center ">
            <i className="fab fa-airbnb mr-2 text-4xl"></i>
            <p className="text-2xl font-bold">airbnb</p>
          </div>
        </div>
      </div>
    </header>
  );
}
