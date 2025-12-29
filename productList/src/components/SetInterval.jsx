import React, { useEffect, useState } from "react";

const TimerComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
      
    // 🔴 Cleanup function:
    return () => {
      clearInterval(timer);
      console.log("Timer cleared");
    };
  }, []);

  return <h1>Timer: {count}</h1>;
};

export default TimerComponent;
