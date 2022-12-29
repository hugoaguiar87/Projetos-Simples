import { useState } from "react";

import * as S from "./AppStyles";
import leftArrowImage from './assets/leftarrow.png';
import { levels, calculateImc } from "./helpers/imc";
import GridItem from "./components/GridItem";

const App = () => {
  const [stature, setStature] = useState(0)
  const [weight, setWeight] = useState(0)
  const [showItem, setShowItem] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const handleCalculateButton = () => {
    if(stature && weight) {
      const data = calculateImc(stature, weight)
      setShowItem(data)
      setDisabled(true)
    } else {
      alert("Preencha todos os campos.")
    }    
  }

  const handleBackButton = () => {
    setShowItem(null)
    setStature(0)
    setWeight(0)
    setDisabled(false)
  }

  return (
    <div>
      <header>
        <S.HeaderContainer>
          <S.Logo>IMC</S.Logo>
          <em>powered by Hugo Aguiar</em>
        </S.HeaderContainer>
      </header>

      <S.Container>
        <S.LeftSide>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro 
            adotado pela Organização Mundial da Saúde para calcular 
            o peso ideal de cada pessoa.
          </p>

          <input 
            placeholder="Digite a sua altura. Ex.: 1.8 (em metros)"
            type="number"
            value={stature > 0 ? stature : ''}
            onChange={(e) => setStature(e.target.value)}
            disabled= {disabled}
          />

          <input 
            placeholder="Digite seu peso. Ex.: 86.5 (em kg)"
            type="number"
            value={weight > 0 ? weight : ''}
            onChange={(e) => setWeight(e.target.value)}
            disabled= {disabled}
          />

          <button onClick={handleCalculateButton} disabled={disabled}>
            Calcular
          </button>
        </S.LeftSide>

        <S.RightSide>
          {!showItem &&
            <div className="grid">
              {levels.map((iten, key) => {
                return (
                  <GridItem key={key} data={iten} />
                )
              })}
            </div>
          }

          {showItem && 
            <div className="bigItem">
              <div className="rightArrow" onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25}/>
              </div>
              <GridItem data={showItem}/>
            </div>
          }
        </S.RightSide>
      </S.Container>
    </div>
  )
}
export default App;
