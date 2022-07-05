import React from "react";
import { Route } from "react-router";
import FooterLayout from "./Layout/FooterLayout/FooterLayout";
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
            <FooterLayout></FooterLayout>
          </div>
        );
      }}
    ></Route>
  );
}
