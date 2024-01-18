// pages/index.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import styles from './_/assets/page.module.css'
import BearCounter from './_/components/BearCounter';

const BearCounterServer = dynamic(() => import('./_/components/BearCounter'), { 
  ssr: false,
  loading: () => <Skeleton />
});

async function getExample () {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Harol R.");
    }, 1000);
  });
};
const HomePage  = async () => {
  // const exampleData = await getExample() as string;

  return (
    <main className={styles.main}>
      <div style={{width: "100%"}}>

        <div className={styles.description}>
          <h1>Carga de componente de lado servidor</h1>
          <BearCounter />
        </div>

        <br />

        <div className={styles.description}>
          <h1>Carga de componente de lado cliente </h1>
          <BearCounterServer />
        </div>

      </div>

      <div className={styles.description}>
        <h1>Carga de datos de lado servidor</h1>
        {/* <p>-{exampleData}</p> */}
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
