import { ADD_TODO, TodosAction, TOGGLE_TODO } from "../actions/todos";
import { initialState, Todos, TodosState } from "../state";

export function todos(
  state = initialState.todos,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return <Todos[]>[
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
}
