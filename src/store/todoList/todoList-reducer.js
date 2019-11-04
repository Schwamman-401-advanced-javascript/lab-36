export const initialState = { todoList: [] };

export function reducer(state = initialState, action = {}) {
  console.log('reducer', state, action);

  switch(action.type) {
    case 'addItem':
      return { todoList: [...state.todoList, action.payload] };
    case 'deleteItem': 
      return { 
          todoList: state.todoList
              .filter(item => item._id !== action.payload) 
      };
    case 'toggleComplete':
      return {
        todoList: state.todoList
          .map(item =>
            item._id === action.payload ? { ...item, complete: !item.complete, } : item
        )
    }
  }
}

export function addItem(item) {
  return { 
    type: 'addItem', 
    payload: item,
  };
}

export function deleteItem(id) {
  return {
    type: 'deleteItem',
    payload: id,
  }
}

export function toggleComplete(id) {
  return {
    type: 'toggleComplete',
    payload: id,
  }
}