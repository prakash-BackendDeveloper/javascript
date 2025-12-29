const ProductForm = ({ handleProductAdd }) => {
  return (
    <input type="text" placeholder="Add Product" onKeyDown={handleProductAdd} />
  );
};

export default ProductForm;
