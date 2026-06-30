
type Product = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

type ProductRow = {
  product: Product;
};

export default function ProductRow({ product }:ProductRow) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}