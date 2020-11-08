import './App.css';
import Content from './Content';
import Filter from './Filter';
import styles from './App.module.css';

function App() {
  return (

    <div className="App">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Filter className={styles.filter} />
          <Content className={styles.content} />
        </div>
      </div>
    </div>
  );
}

export default App;
