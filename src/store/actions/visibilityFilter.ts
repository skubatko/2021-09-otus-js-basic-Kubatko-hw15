import { Action } from "@reduxjs/toolkit";

export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export interface VisibilityFilterAction extends Action {
  filter: string;
}
