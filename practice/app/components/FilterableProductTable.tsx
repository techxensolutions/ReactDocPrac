"use client";
import { useState } from 'react';
import SearchBar from './Searchbar';
import ProductTable from './ProductTable';

type Product = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

type FilterableProductTableProps = {
  products: Product[];
};

export default function FilterableProductTable({
  products,
}: FilterableProductTableProps) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}







