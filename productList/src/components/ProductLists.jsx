import { Product } from "./Product";

const ProductLists = () => {
  const products = [
    "product1",
    "product2",
    "product3",
    "product4",
    "product5",
    "product6",
  ];

  return (
    <ul>
      {/* <li>Product 1</li>
      <li>Product 2</li>
      <li>Product 3</li>
      <li>Product 4</li>
      <li>Product 5</li>
      <li>Product 6</li> */}
      {/* <Product name="Product 1" />
      <Product name="Product 2" />
      <Product name="Product 3" />
      <Product name="Product 4" />
      <Product name="Product 5" />
      <Product name="Product 6" /> */}

      {/* {products.forEach((product) => {
        return <Product name={product} />;
      })}

      {console.log("hello")} */}

      {products.map((product) => {
        return <Product name={product} />;
      })}
    </ul>
  );
};

export default ProductLists;
