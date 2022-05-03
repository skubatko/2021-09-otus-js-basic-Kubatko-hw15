import { Action } from "@reduxjs/toolkit";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export interface TodosAction extends Action {
  index: number;
  text: string;
}
