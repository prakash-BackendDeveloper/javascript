// export const Product = (props) => {
//   return <div>{props.name}</div>;
// };

// Destructure  & named Export and named export can be multiple in one single file
export const Product = ({ name }) => {
  return <div>{name}</div>;
};
