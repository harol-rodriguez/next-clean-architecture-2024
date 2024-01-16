"use client";
import React, { useEffect, useState } from 'react';
import { useCountStore } from '../use-cases/count.state';
import dynamic from 'next/dynamic';

const BearCounter = () => {
  const { count, increase } = useCountStore();
  return (
    <div style={{display: "flex"}}>
        <h1>Contador {count}
        </h1>
        <button onClick={() => increase(1)}>Increase</button>
    </div>
  );
};

export default BearCounter;


// const BearCounter = dynamic(() => ResponseComponent, { 
//   ssr: true,
//   loading: () => <Skeleton />
// });
