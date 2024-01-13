"use client";
import React from 'react';
import { useCountStore } from '../use-cases/count.state';

const BearCounter = () => {
  const { count, increase } = useCountStore();

  return (
    <div>
        <h1>{count} Contador</h1>
        <button onClick={() => increase(1)}>Increase</button>
    </div>
  );
};

export default BearCounter;
