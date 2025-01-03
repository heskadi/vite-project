import { useState } from "react";

const DiceRoller = () => {
  const [d100, countd100] = useState(0);
  const [d20, countd20] = useState(0);
  const [d12, countd12] = useState(0);
  const [d10, countd10] = useState(0);
  const [d8, countd8] = useState(0);
  const [d6, countd6] = useState(0);
  const [d4, countd4] = useState(0);

  // Função para gerar o valor aleatório para qualquer dado
  const rollDice = (sides) => {
    return Math.floor(Math.random() * sides) + 1;
  };

  // Função de clique para o dado d100
  const handleD100Click = () => {
    const result = rollDice(100);
    countd100(result); // Atualiza o estado do d100
  };

  return (
    <div>
      <div className="card">
        <button onClick={handleD100Click}>
          d100: {d100}
        </button>
        <button onClick={() => countd20(rollDice(20))}>
          d20: {d20}
        </button>
        <button onClick={() => countd12(rollDice(12))}>
          d12: {d12}
        </button>
        <button onClick={() => countd10(rollDice(10))}>
          d10: {d10}
        </button>
        <button onClick={() => countd8(rollDice(8))}>
          d8: {d8}
        </button>
        <button onClick={() => countd6(rollDice(6))}>
          d6: {d6}
        </button>
        <button onClick={() => countd4(rollDice(4))}>
          d4: {d4}
        </button>
      </div>
    </div>
  );
};

export default DiceRoller;
