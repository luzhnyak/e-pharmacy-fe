import { useState } from 'react';
import FilterForm from '../../components/FilterForm/FilterForm';
import css from './AllProductsPage.module.css';
import AddNewProduct from '../../components/Products/AddNewProduct/AddNewProduct';
import AllProductsTable from '../../components/Products/AllProductsTable/AllProductsTable';

const AllProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className={css.container}>
      <div className={css.wrapperFilterAndBtn}>
        <FilterForm
          setSearchQuery={setSearchQuery}
          placeholder="Product Name"
        />
        <AddNewProduct />
      </div>

      <AllProductsTable searchQuery={searchQuery} />
    </section>
  );
};

export default AllProductsPage;
