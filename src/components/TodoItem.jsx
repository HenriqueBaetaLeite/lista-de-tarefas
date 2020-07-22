import React, { useState } from 'react';

const TodoItem = ({ title, handleDelete, handleEdit }) => {
  const [checkbox, setCheckbox] = useState(false);
  const check = () => setCheckbox((prevState) => !prevState);

  const styleCursor = { cursor: 'pointer' };
  const styleFont = { textDecoration: 'line-through' };

  return (
    <div>
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6 style={checkbox ? styleFont : null} className={checkbox ? 'ml-4 text-info' : 'ml-4'}>
          {title}
        </h6>
        <input
          style={styleCursor}
          onClick={check}
          type="checkbox"
          className="form-check-input ml-1"
        />
        <div className="todo-icon">
          <span style={styleCursor} onClick={handleEdit} className="mx-2 text-success">
            <i className="fas fa-edit" />
          </span>
          <span style={styleCursor} onClick={handleDelete} className="mx-2 text-danger">
            <i className="fa fa-trash-o" />
          </span>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
