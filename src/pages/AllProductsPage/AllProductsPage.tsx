import { useState } from "react";
import FilterForm from "../../components/FilterForm/FilterForm";
import css from "./AllProductsPage.module.css";
import AddNewProduct from "../../components/AllProducts/AddNewProduct/AddNewProduct";
import AllProductsTable from "../../components/AllProducts/AllProductsTable/AllProductsTable";

const AllProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className={css.container}>
      <FilterForm setSearchQuery={setSearchQuery} placeholder="Product Name" />
      <AddNewProduct />
      <AllProductsTable searchQuery={searchQuery} />
    </section>
  );
};

export default AllProductsPage;