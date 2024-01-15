// pages/index.tsx
import React from 'react';
import styles from '../assets/page.module.css'

async function getExample () {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Harol R.");
    }, 1000);
  });
};
const HomePage  = async () => {
  const exampleData = await getExample() as string;

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Carga de componente de lado servidor</h1>
      </div>

      <div className={styles.description}>
        <h1>Carga de datos de lado servidor</h1>
        <p>-{exampleData}</p>
      </div>
    </ main>
  );
};

export default HomePage;