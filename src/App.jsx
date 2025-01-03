import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import TemplateExpressions from './components/TemplateExpressions'
import DiceRoller from './components/DiceRoller'
import './App.css'


function App() {
  const ComponentApp = () => {
    return (
      <div>
        <h1>Componente de App</h1>
      </div>
    )
  }

  return (
    <>
      <div className="card">
        <ComponentApp/>
        <FirstComponent/>
        <SecondComponent/>
        <TemplateExpressions/>
        <DiceRoller/>
      </div>
    </>
  )
}

export default App
