import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";

type GridItemProps = {
  item: Level;
  handleBackButton?: () => void;
};

export const GridItem = ({ item, handleBackButton }: GridItemProps) => {
  return (
    <div className={styles.wrapper}>
      {!!handleBackButton && (
        <div className={styles.leftArrow} onClick={handleBackButton}>
          <img src={"assets/leftarrow.png"} alt="" width={25} />
        </div>
      )}
      <div className={styles.main} style={{ backgroundColor: item.color }}>
        <div className={styles.gridIcon}>
          <img
            src={item.icon === "up" ? "assets/up.png" : "assets/down.png"}
            alt=""
            width={30}
          />
        </div>
        <div className={styles.gridTitle}>{item.title}</div>
        {item.yourIMC && (
          <div className={styles.yourIMC}>
            IMC is between {item.yourIMC} kg/m²
          </div>
        )}
        <div className={styles.gridInfo}>
          <>
            IMC is between <strong>{item.imc[0]}</strong> e{" "}
            <strong>{item.imc[1]}</strong>
          </>
        </div>
      </div>
    </div>
  );
};
