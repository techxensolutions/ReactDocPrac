type ProductCategoryProps = {
  category: string;
};

export default function ProductCategory({
  category,
}: ProductCategoryProps) {
  return (
    <tr>
      <th colSpan={2}>
        {category}
      </th>
    </tr>
  );
}