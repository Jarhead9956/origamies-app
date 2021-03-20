import React from 'react';
import Header from './components/header';
import Aside from './components/aside';
import Origamies from './components/origamies';
import styles from './app.module.css';


const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <Origamies />
      </div>
    </div>
  );
}

export default App;
