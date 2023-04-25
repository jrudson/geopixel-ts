import './App.css';
import Clock from './components/clock/Clock';
import Form from './components/form/Form';
import Ball from './components/ball/Ball';

function App() {
  return (
    <div className="App">
      <div className='telaLadoEsquerdo'>
        <div className='relogio'>
          <Clock />
        </div>
        <div className='manipuladorDeItems'>
          <Form />
        </div>
      </div>
      <div className='telaLadoDireito'>
        <Ball />
      </div>
    </div>
  );
}

export default App;