import FirstComponent from './components/TestComponents/FirstComponent'
import SecondComponent from './components/TestComponents/SecondComponent'
import TemplateExpressions from './components/TestComponents/TemplateExpressions'
import HandleDiceRoller from './components/Dices/HandleDiceRoller'
import HandleCharSheet from './components/CharSheet/HandleCharSheet'
import Events from './components/TestComponents/HandleEvents'
import ManageData from './components/TestComponents/ManageData'
import ListRender from './components/TestComponents/ListRender'
import ConditionalRender from './components/TestComponents/ConditionalRender'
import ShowUserName from './components/TestComponents/ShowUserName'
import CarDetails from './components/TestComponents/CarDetails'

import d20 from './assets/d20.png'


import './App.css'
import { useState } from 'react'


function App() {
  const name = "Lessa"
  const [userName] = useState("Souza")

  return (
    <>
      <div className="card">

        <FirstComponent/>
        <SecondComponent/>
        <TemplateExpressions/>
        <Events/>

        {/*
        <HandleCharSheet/>
        <HandleDiceRoller/>
        */}
          {/*Imagem em public.*/}
          <div>
            <img src="/dices.png" alt="Dados."/>
          </div>
          {/*Imagem em assets.*/}
          <div>
            <img src={d20} alt="Dado de vinte lados."/>
          </div>

          <div>
            <ManageData/>
            <ListRender/>
            <ConditionalRender/>
            {/*Props.*/}
            <ShowUserName name={userName}/>
            {/*Destructuring.*/}
            <CarDetails brand="VW" km={100000} color="Blue"/>
          </div>
      </div>
    </>
  )
}

export default App
