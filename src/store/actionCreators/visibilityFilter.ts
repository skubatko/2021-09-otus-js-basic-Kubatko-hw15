import { SET_VISIBILITY_FILTER } from "../actions/visibilityFilter";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

export function setVisibilityFilter(filter: string) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
}
