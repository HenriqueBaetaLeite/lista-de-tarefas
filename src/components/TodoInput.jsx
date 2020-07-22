import React from 'react';

const TodoInput = ({ item, handleChange, handleSubmit, editedItem }) => {
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-list-ul" />
            </div>
          </div>
          <input
            value={item}
            onChange={handleChange}
            className="form-control"
            type="text"
            placeholder="digite uma tarefa"
          />
        </div>
        <button
          disabled={item ? false : true}
          type="submit"
          className={
            editedItem
              ? 'btn btn-success btn-block mt-3 text-capitalize font-weight-bold'
              : 'btn btn-info btn-block mt-3 text-capitalize font-weight-bold'
          }
        >
          {editedItem ? 'editar' : 'adicionar'}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
