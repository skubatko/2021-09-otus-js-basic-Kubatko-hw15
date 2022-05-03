import { VisibilityFilters } from "./actionCreators/visibilityFilter";

export type VisibilityFilterState = string;

export interface Todos {
  index: number;
  completed: boolean;
}

export type TodosState = Todos[];

export interface State {
  visibilityFilter: VisibilityFilterState;
  todos: TodosState;
}

export const initialState: State = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [],
};
