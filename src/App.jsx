// src/App.jsx
import { useState } from 'react';
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  //  guarda a lista de tarefas
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: 'Estudar React' },
    { id: 2, texto: 'Fazer o desafio técnico' }
  ]);

  // guarda o texto que o usuário está digitando
  const [textoDigitado, setTextoDigitado] = useState('');

  // Função para adicionar tarefa
  function adicionarTarefa() {
    if (textoDigitado.trim() === '') return; // não adiciona vazio

    const novaTarefa = {
      id: Date.now(), // ID único 
      texto: textoDigitado
    };

    setTarefas([...tarefas, novaTarefa]); // cria novo array (nunca mutar o state)
    setTextoDigitado(''); // limpa o input
  }

  // Função para remover tarefa (passada via props para o filho)
  function removerTarefa(id) {
    const tarefasFiltradas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(tarefasFiltradas);
  }

  return (
    <div className="container">
      <h1>Minha Lista de Tarefas</h1>

      {} 
      <div className="input-area">
        <input
          type="text"
          value={textoDigitado}
          onChange={(e) => setTextoDigitado(e.target.value)}
          placeholder="Digite uma tarefa..."
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      {}
      <ul className="lista">
        {tarefas.map((tarefa) => (
          <TodoItem
            key={tarefa.id}
            tarefa={tarefa}
            aoRemover={removerTarefa}
          />
        ))}
      </ul>

      {}
      {tarefas.length === 0 && <p>Nenhuma tarefa cadastrada.</p>}
    </div>
  );
}

export default App;