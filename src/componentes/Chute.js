import styled from "styled-components";
import Button from "../style/Button";

export default function Guess(props) {
  const gameState = props.gameState;
  const state = props.state;
  const guess = props.guess;
  const onChange = props.onChange;
  const onClick = props.onClick;
  const onKeyDown = props.onKeyDown;

  return (
    <GuessContent>
      <p>Já sei a palavras!</p>
      <Input value={guess} onChange={e => onChange(e.target.value)} onKeyDown={e => onKeyDown(e.key)} />
      <GuessButton onClick={onClick} enabled={gameState === state.ongoing} >Chutar</GuessButton>
    </GuessContent>
  );
}


const GuessContent = styled.div`
  width: 676px;
  margin-top: 56px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 20px;
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  padding-left: 15px;
  border: none;
  height: 100%;
  width: 353px;
  font-size: 20px;
  border: 1px solid #CCCCCC;
  border-radius: 3px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;

const GuessButton = styled(Button)`
  width: 100px;
  height: 100%;
`;
