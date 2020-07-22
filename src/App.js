import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import MyFooter from './components/MyFooter';

import './App.css';

import { v1 as uuid } from 'uuid';

class App extends Component {
  state = {
    items: JSON.parse(localStorage.getItem('listItem')) || [],
    id: uuid(),
    item: '',
    editedItem: false,
    theme: true,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      item: this.state.item,
    };

    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editedItem: false,
    });
    localStorage.setItem('listItem', JSON.stringify(updatedItems));
  };

  clearList = () => {
    this.setState({
      items: [],
    });

    localStorage.clear();
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });

    localStorage.setItem('listItem', JSON.stringify(filteredItems));
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.item,
      editedItem: true,
    });
  };

  handleTheme = () => {
    this.setState((prevState) => ({ ...prevState, theme: !prevState.theme }));
  };

  render() {
    const { item, items, editedItem, theme } = this.state;
    const lightTheme = null;
    const darkTheme = {
      backgroundColor: 'black',
      color: 'red',
    };
    return (
      <div style={theme ? lightTheme : darkTheme} className="container principal">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 nt-4">
            <div className="d-flex justify-content-center align-items-center">
              <h3 className="mt-3">Adicione suas Tarefas</h3>
              {/* <p style={{ cursor: 'pointer' }} className="mt-3" onClick={this.handleTheme}>
                {theme ? 'Dark Theme ' : 'Light Theme '}
              </p> */}
            </div>

            <TodoInput
              item={item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editedItem={editedItem}
            />
            <TodoList
              clearList={this.clearList}
              items={items}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
            <MyFooter />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
