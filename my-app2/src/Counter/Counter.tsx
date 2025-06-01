import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <main className='container'>
      <h1>counter 예제</h1>
      <h2>현재 카운트 : {count}</h2>
      <button onClick={()=>{setCount(count + 1)}}>증가</button>
      <button onClick={()=>{setCount(count - 1)}}>감소</button>
      
    </main>
  );
}


