import React from "react";
import CommomShopForm from "./CommonShopForm";

const ShopForm = ({
  edit,
  s,
  dispatch,
  index,
  shopImageState,
  shopImageDispatch,
  register,
  errors,
}) => {
  const closeShopForm = () => {
    dispatch({
      type: "REMOVE_SHOP_FORM",
      payload: {
        s,
      },
    });
  };

  return (
    <CommomShopForm
      {...{
        edit,
        s,
        dispatch,
        index,
        shopImageState,
        shopImageDispatch,
        closeShopForm,
        register,
        errors,
      }}
    />
  );
};

export default ShopForm;
