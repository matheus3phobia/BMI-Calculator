import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";

type Props = {
  item: Level;
};

export const GridItem = ({ item }: Props) => {
  return (
    <div>
      <div className={styles.main} style={{ backgroundColor: item.color }}>
        <div className={styles.gridIcon}>
          <img
            src={item.icon === "up" ? 'assets/up.png' : 'assets/down.png'}
            alt=""
            width={30}
          />
        </div>
        <div className={styles.gridTitle}>{item.title}</div>
        {item.yourIMC && (
          <div className={styles.yourIMC}>
            Seu IMC é de {item.yourIMC} kg/m²
          </div>
        )}
        <div className={styles.gridInfo}>
          <>
            Seu IMC está entre <strong>{item.imc[0]}</strong> e{" "}
            <strong>{item.imc[1]}</strong>
          </>
        </div>
      </div>
    </div>
  );
};
