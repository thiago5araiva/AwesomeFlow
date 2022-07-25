import React from "react";
import styles from "./styles.module.css";

import BTCQuery from "../BDCNode/BDCQuery";
const DrawerComponent = (): JSX.Element => {
  return (
    <div className={styles.drawer}>
      <div className={styles.drawer__children}>
        <h2 className={styles.drawer__title}>
          Clique e adicione um nó para inserir no fluxo.
        </h2>
        <div className={styles.drawer__categories}>
          <div className={styles.categories__header}>Ações</div>
          <div className={styles.drawer__options}>
            <div>
              <BTCQuery />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerComponent;
