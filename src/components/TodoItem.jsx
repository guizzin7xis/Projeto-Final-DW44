// src/components/TodoItem.jsx
function TodoItem({ tarefa, aoRemover }) {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
      <span>{tarefa.texto}</span>
      <button onClick={() => aoRemover(tarefa.id)}>Remover</button>
    </li>
  );
}

export default TodoItem;