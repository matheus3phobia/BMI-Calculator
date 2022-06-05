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
      alert("Por favor preencha os campos corretamente");
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
          <h1>Calcule o seu IMC</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>
          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.7 (em metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(event) => setHeightField(parseFloat(event.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 70 (em quilos)"
            value={weightField > 0 ? weightField : ""}
            onChange={(event) => setWeightField(parseFloat(event.target.value))}
            disabled={toShow ? true : false}
          />
          <button onClick={handleCalculator} disabled={toShow ? true : false}>
            Calcular
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
