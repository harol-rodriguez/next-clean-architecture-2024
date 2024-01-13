// pages/index.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import styles from './page.module.css'

const BearCounter = dynamic(() => import('./components/BearCounter'), { 
  ssr: true,
  loading: () => <Skeleton />
});


const HomePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Welcome to Bear Counter!</h1>
        <BearCounter />
      </div>
    </ main>
  );
};

export default HomePage;

const Skeleton = () => (
  <div>
    <p>Cargando...</p>
  </div>
);
