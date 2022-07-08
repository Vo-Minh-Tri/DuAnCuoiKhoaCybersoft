import React from "react";
import { Route } from "react-router-dom";
import AdminLayout from "./AdminLayout/AdminLayout";

export default function AdminTemplateNew(props) {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div>
            <AdminLayout Component={Component} propsRoute={propsRoute} />
          </div>
        );
      }}
    />
  );
}
