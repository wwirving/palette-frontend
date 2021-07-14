import styles from "./App.module.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes/Routes";

function App() {
  return (
    <div className={styles.main}>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
