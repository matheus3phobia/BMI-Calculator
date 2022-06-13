import styles from "./App.module.css";
import { useState } from "react";
import { levels, calculateIMC, Level } from "./helpers/imc";
import { GridItem } from "./components/GridItem";

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculator = () => {
    if (heightField && weightField) {
      setToShow(calculateIMC(weightField, heightField));
    } else {
      alert("Please fill all fields");
    }
  };

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <strong className={styles.Logo}>MH</strong>
          <p className={styles.LogoDesc}>powered by Matheus2phobia</p>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calculate your BMI</h1>
          <p>
            BMI is the abbreviation for Body Mass Index, a parameter used by the World Health Organization to calculate the ideal weight of each person.
          </p>
          <input
            type="number"
            placeholder="Your Height. Ex: 1.7 (meters)"
            value={heightField > 0 ? heightField : ""}
            onChange={(event) => setHeightField(parseFloat(event.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder="Your Weight. Ex: 70 (kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(event) => setWeightField(parseFloat(event.target.value))}
            disabled={toShow ? true : false}
          />
          <button onClick={handleCalculator} disabled={toShow ? true : false}>
            Calculate
          </button>
        </div>
        <div className={styles.rightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={styles.leftBig}>
              <GridItem handleBackButton={handleBackButton} item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
