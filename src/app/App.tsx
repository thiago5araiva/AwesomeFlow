import React from "react";

import AppBar from "./components/AppBar";
import Drawer from "./components/Drawer";
import Flow from "./Flow";

import styles from "./app.module.css";
const App = (): JSX.Element => {
  return (
    <div className={styles.flow}>
      <AppBar />
      <Flow />
      <Drawer />
    </div>
  );
};

export default App;
