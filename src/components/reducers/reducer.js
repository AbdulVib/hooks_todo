export const initialState = {
    todos: [
      { id: 1, text: "one", completed: false },
      { id: 2, text: "two", completed: false },
      { id: 3, text: "three", completed: false }
    ],
    currentTodo: {}
  };
  

const reducer = (state, action) => {
    switch (action.type) {

        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, {id: Math.random(), text: action.payload, completed: false } ]
            }
        case 'SET_CURRENT_TODO':
            return {
                ...state,
                currentTodo: action.payload
            }
        case 'UPDATE_TODO':
            const updatedTodo = { ...state.currentTodo, text: action.payload }
            const updatedTodoIndex = state.todos.findIndex( t => t.id === state.currentTodo.id )
            const updatedTodos = [
                ...state.todos.slice(0, updatedTodoIndex),
                updatedTodo,
                ...state.todos.slice(updatedTodoIndex + 1)
            ]
            return {
                ...state,
                currentTodo: {},
                todos: updatedTodos
            }
        case 'TOGGLE_TODO':
            const toggleTodos = state.todos.map(i => i.id === action.payload.id ? { ...action.payload, completed: !action.payload.completed } : i)
            // console.log('TOGGLE CLICKED')
            return {
                todos: toggleTodos
            }
        case 'DELETE':
            const filterData = state.todos.filter(i => i.id !== action.payload)
            return {
                ...state,
                todos: filterData
            }
        default:
            return state
    }
}

export default reducer
