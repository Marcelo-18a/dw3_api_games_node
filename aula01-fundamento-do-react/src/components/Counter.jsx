import { useState } from "react";

const Counter = () => {
  //   let x = 0;
  //   return (
  //     <>
  //       <div>
  //         <p>Contador: {x}</p>
  //         <button onClick={() => (x = x + 1)}>Aumentar</button>
  //       </div>
  // </>
  //   );

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
      </div>
    </>
  );
};
export default Counter;
