import React from "react";
import { Route } from "react-router";
import HeaderLayout from "./Layout/HeaderLayout/HeaderLayout";

export default function HomeTemplate(props) {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div>
            <HeaderLayout></HeaderLayout>
            <hr />
            <Component {...propsRoute}></Component>
            <footer>Footer</footer>
          </div>
        );
      }}
    ></Route>
  );
}
