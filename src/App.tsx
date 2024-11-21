import SearchIcon from './assets/icons/search-svgrepo-com.svg';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles['weather']}>
      <h1>The weather</h1>
      <form className={styles['weather__form']}>
        <input className={styles['weather__input']} type='text' placeholder='Your city'></input>
        <button className={styles['weather__button']}>
          <img src={SearchIcon} className={styles['weather__button-icon']} />
        </button>
      </form>
      <h2 className={styles['weather__city']}>Moscow</h2>
      <p className={styles['weather__temperature']}>4</p>
      <p className={styles['weather__info']}>rainy</p>
    </div>
  );
}

export default App;
