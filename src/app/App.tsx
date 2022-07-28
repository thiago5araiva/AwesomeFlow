import AppBar from './components/AppBar';
import Flow from './Flow';

import styles from './app.module.css';
const App = (): JSX.Element => {
  return (
    <div className={styles.flow}>
      <AppBar />
      <Flow />
    </div>
  );
};

export default App;
