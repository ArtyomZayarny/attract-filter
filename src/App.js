import React, { useEffect, useState } from 'react';
import './App.css';
import Content from './Content';
import Filter from './Filter';
import styles from './App.module.css';
import { AppContext } from './AppContext';

const LS = localStorage;

function App() {
  const [filter, setFilter] = useState({
    city: null,
    category: [],
    price: [],
    filtering: false,
  })

  useEffect(() => {
    //LocalStoraage
    let filterLS = {};

    if (LS.getItem('filter')) {

      let filterLS = JSON.parse(LS.getItem('filter'));

      if (filter.city !== null) {
        filterLS.city = filter.city
      }
      if (filter.category.length > 0) {
        filterLS.category = filter.category
      }

      if (filter.category.length === 0 && filterLS.category.length > 0) {
        filterLS.category = filterLS.category
      }
      if (filter.price.length > 0) {
        filterLS.price = filter.price
      }
      LS.setItem('filter', JSON.stringify({ ...filterLS }));
      if (filterLS.category.length > 0) {
        setFilter({ ...filter, category: filterLS.category })
      }
    } else {
      LS.setItem('filter', JSON.stringify(filter));
    }


  }, [filter.city, filter.category, filter.price])
  return (
    <AppContext.Provider value={{ filter, setFilter }}>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Filter className={styles.filter} />
            <Content className={styles.content} />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
