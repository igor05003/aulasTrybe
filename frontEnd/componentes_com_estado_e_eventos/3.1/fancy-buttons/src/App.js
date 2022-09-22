import logo from './logo.svg';
import './App.css';
import Button from './components/button';

function App() {
  return (
    <>
      <Button headline="click me" print="clicked" />
      <Button headline="hi" print="hello" />
      <Button headline="How are u?" print="im good" />    
    </>
  );
}

export default App;
