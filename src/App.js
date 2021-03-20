import React from 'react';
import Header from './components/header';
import Aside from './components/aside';
import Origamies from './components/origamies';
import Footer from './components/footer';
import styles from './app.module.css';


const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <Origamies />
        <Footer />
      </div>
    </div>
  );
}

export default App;
