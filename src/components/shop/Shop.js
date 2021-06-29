import React from "react";
import ShopCardComponent from "../shopCardComponent/ShopCardComponent";

import Slider from "react-slick";
import classes from "./shop.module.css";

import { useLocation, useHistory } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Shop = ({ docs, settings }) => {
  const location = useLocation();

  const history = useHistory();

  console.log("docssssss", docs);

  return (
    <div>
      {location.pathname === "/" || location.pathname === "/admin/dashboard" ? (
        <div>
          <Slider {...settings} className={classes.slider}>
            {docs?.map((doc, ind) => (
              <div key={ind}>
                <ShopCardComponent key={doc.id} doc={doc} />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div>
          <ShopCardComponent docs={docs} />
        </div>
      )}
    </div>
  );
};

export default Shop;
