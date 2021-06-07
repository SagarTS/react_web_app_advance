import classes from "./modal.module.css";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import Button from "../Button/Button";
import { useState } from "react";

const AddShopCategoryModal = ({ setShowModal }) => {
  const [subCategories, setSubCategories] = useState([]);

  return (
    <>
      <div className={classes.modalBackground} onClick={setShowModal}></div>
      <div className={classes.modal}>
        <h3 className={classes.title}>Add New Category</h3>
        <form className={classes.form}>
          <input
            type="text"
            className={classes.input}
            placeholder="Category Name"
          />
          {subCategories.length > 0 &&
            subCategories.map((category) => (
              <div className={classes.form__subcategory} key={category.id}>
                <input
                  type="text"
                  className={classes.input}
                  placeholder="Sub-Category Name"
                />
                <span
                  onClick={() =>
                    setSubCategories(
                      subCategories.filter((data) => data.id !== category.id)
                    )
                  }
                >
                  <AiOutlineClose />
                </span>
              </div>
            ))}
          <p
            className={classes.form__span}
            onClick={() =>
              setSubCategories([
                ...subCategories,
                { id: Date.now(), subCategory: "" },
              ])
            }
          >
            Add Sub Category{" "}
            <span>
              <AiOutlinePlus />
            </span>
          </p>

          <Button type="submit">Save</Button>
        </form>
      </div>
    </>
  );
};

export default AddShopCategoryModal;
