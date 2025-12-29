// const Counter = () => {
//   let count = 2;
//   const increase = () => {
//     count++;
//     console.log(count);
//   };
//   const decrease = () => {
//     count--;
//     console.log(count);
//   };
//   return (
//     <div>
//       <button onClick={decrease}>-</button>
//       <span>{count}</span>
//       <button onClick={increase}>+</button>
//     </div>
//   );
// };
// export default Counter;

// import { useState } from "react";

// const Counter = ({ initialCount }) => {
//   const [count, setCount] = useState(initialCount);
//   const increase = () => {
//     console.log(count);
//     setCount(count + 1);
//     // console.log(count);
//   };
//   const decrease = () => {
//     setCount(count - 1);
//     // console.log(count);
//   };
//   return (
//     <div className="counter">
//       <button onClick={decrease}>-</button>
//       <span>{count}</span>
//       <button onClick={increase}>+</button>
//     </div>
//   );
// };

// export default Counter;

import { useEffect } from "react";
import { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const increase = () => {
    console.log("Before >", count);
    setCount(count + 1);
    console.log("After >", count);
  };

  // const increase = () => {
  //   // console.log("Before >", count);
  //   // setCount(count + 1);
  //   // setCount(count + 1);
  //   // setCount(count + 1);
  //   // setCount(count + 1);
  //   // setCount(count + 1);
  //   // console.log("After >", count);
  //   setCount((prevVal) => {
  //     return prevVal + 1;
  //   });
  //   setCount((prevVal) => {
  //     return prevVal + 1;
  //   });
  //   setCount((prevVal) => {
  //     return prevVal + 1;
  //   });
  //   setCount((prevVal) => {
  //     return prevVal + 1;
  //   });
  //   setCount((prevVal) => {
  //     return prevVal + 1;
  //   });
  // };

  const decrease = () => {
    setCount(count - 1);
    // console.log(count);
  };

  useEffect(() => {
    console.log("Birth : Mount");
  }, []);
  useEffect(() => {
    // console.log("Update : Update");
    console.log("Update : Update", count);
  });
  useEffect(() => {
    return () => {
      console.log("dead : Unmount");
    };
  }, []);

  // rules Not if condition, Not any loop, Not inside nested functions,. Not inside regular JavaScript functions
  // if (true) {
  //   useEffect(() => {
  //     console.log("Birth : Mount");
  //   }, []);
  // }
  return (
    <div className="counter">
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;
