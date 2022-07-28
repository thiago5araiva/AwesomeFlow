import { FC } from 'react';
import { Node } from 'react-flow-renderer';
import { v4 as uuid } from 'uuid';
import ButtonTrigger from '../RequestNode/trigger';
import styles from './styles.module.css';

interface IDrawerComponent {
  handleNode(node: Node): void;
}

const nodes: Array<Node> = [
  {
    id: uuid(),
    type: 'RequestNodeType',
    data: {
      label: 'Request',
      fields: {
        name: '',
        url: '',
        method: '',
        token: '',
        headers: '',
        body: '',
      },
    },
    position: { x: 130, y: 130 },
  },
  {
    id: uuid(),
    data: {
      label: 'Condition',
      fields: {
        name: '',
        url: '',
        method: '',
        token: '',
        headers: '',
        body: '',
      },
    },
    position: { x: 5, y: 5 },
  },
];

const DrawerComponent: FC<IDrawerComponent> = ({ handleNode }) => {
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
              {nodes.map((node) => (
                <ButtonTrigger
                  handleNode={handleNode}
                  node={node}
                  key={node.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerComponent;
