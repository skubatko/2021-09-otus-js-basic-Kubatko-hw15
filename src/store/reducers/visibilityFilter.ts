import {
  SET_VISIBILITY_FILTER,
  VisibilityFilterAction,
} from "../actions/visibilityFilter";
import { initialState, VisibilityFilterState } from "../state";

export function visibilityFilter(
  state = initialState.visibilityFilter,
  action: VisibilityFilterAction
): VisibilityFilterState {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
