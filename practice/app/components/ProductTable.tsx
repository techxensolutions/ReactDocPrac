import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";
import { ReactNode } from "react";

type Product = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

type ProductTableProps = {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
};

export default function ProductTable({
  products,
  filterText,
  inStockOnly,
}: ProductTableProps) {

const rows: ReactNode[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategory
          category={product.category}
          key={product.category}
        />
      );
    }

    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    );

    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}