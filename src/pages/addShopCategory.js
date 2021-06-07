import { useState } from "react";
import Button from "../components/Button/Button";
import AddShopCategoryModal from "../components/single/AddShopCategoryModal";
import Table from "../components/table";
import styles from "../styles/addShopCategories.module.css";

const AddShopCategory = () => {
  const categories = [
    {
      id: 1,
      category: "Food",
      rowContent: (
        <Table
          rowData={[
            {
              subCategory: "KFC",
              id: 1,
            },
            {
              subCategory: "Burger House",
              id: 2,
            },
            {
              subCategory: "Pizza",
              id: 3,
            },
          ]}
          fields={[
            {
              field: "subCategory",
              headerText: "Sub Category",
            },
          ]}
          onClick={() => {}}
          hasAction={false}
          width={100}
        />
      ),
    },
    { id: 2, category: "Movies" },
    {
      id: 3,
      category: "Shopping",
      rowContent: (
        <Table
          rowData={[
            {
              subCategory: "Adidas",
              id: 1,
            },
            {
              subCategory: "Dell",
              id: 2,
            },
            {
              subCategory: "Nike",
              id: 3,
            },
          ]}
          fields={[
            {
              field: "subCategory",
              headerText: "Sub Category",
            },
          ]}
          onClick={() => {}}
          hasAction={false}
          width={100}
        />
      ),
    },
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <h1>Shop Categories</h1>
      <Button onClick={() => setShowModal(true)} type="button">
        Add New Category
      </Button>

      <Table
        rowData={categories}
        fields={[{ headerText: "Category", field: "category", width: 250 }]}
        onClick={() => {}}
        width={100}
        hasAction={true}
        isNestedTable={true}
      />
      {showModal && (
        <AddShopCategoryModal setShowModal={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default AddShopCategory;
