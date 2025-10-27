import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// O que fazer na aplicação de lista de tarefas: usando React e Tailwind CSS
// Adicionar tarefa - estado
// Listar tarefas - estado
// Filtrar tarefas - estado
// Marcar como concluido - estado
// Remover tarefa - estado
// Editar tarefa - estado
// Salvar tarefas no localStorage - useEffect
