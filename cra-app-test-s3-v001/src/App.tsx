import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Home.module.scss';

import LsqGrid, { GridColumnType } from './_components/lsq-grid';

function App() {
  const router = useNavigate();

  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState<GridColumnType[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersRes = await axios.get(
          'http://jsonplaceholder.typicode.com/todos?_start=0&_limit=5',
        );
        const firstUserDataKeys = Object.keys(usersRes.data[0]);

        const dashboardCols = firstUserDataKeys.map((colKey) => ({
          id: colKey,
          displayName: colKey,
        }));

        setTimeout(() => {
          setCols(dashboardCols);

          setRows(usersRes.data);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to product dashboard</h1>
        {rows.length > 0 && (
          <LsqGrid
            rows={rows}
            columns={cols}
            rowUniqueId={cols[1]?.id}></LsqGrid>
        )}
        {rows.length === 0 && <p>loading</p>}
        <section className={styles.links}>
          <button type="button" onClick={() => router('/second-page?')}>
            Second Page Button
          </button>
          <Link to="/second-page">Second Page</Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <img src="./vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default App;
