import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ items, clearList, handleDelete, handleEdit }) => {
  return (
    <div>
      <ul className="list-group">
        <h3 className="text-center">Lista de tarefas</h3>

        {items.map(({ id, item }) => (
          <TodoItem
            key={id}
            title={item}
            handleEdit={() => handleEdit(id)}
            handleDelete={() => handleDelete(id)}
          />
        ))}
        <button
          disabled={items.length === 0 ? true : false}
          type="button"
          onClick={clearList}
          className="btn btn-danger btn-block my-4 font-weight-bold"
        >
          Apagar tudo
        </button>
      </ul>
    </div>
  );
};

export default TodoList;
