import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./BaiTapThucHanhLayout/Header";
import Banner from "./BaiTapThucHanhLayout/Body/Banner";
import Item from "./BaiTapThucHanhLayout/Body/Item";
import Footer from "./BaiTapThucHanhLayout/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <div className="body">
      <Banner />
      <Item />
    </div>
    <Footer />
  </div>
);
