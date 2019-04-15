import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';

export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove';
export const OPEN_TUTORIAL = '[TUTORIAL] Open';
export const COMPLETED_TUTORIAL = '[TUTORIAL] Completed';

export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL;

  constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL;

  constructor(public payload: number) {}
}

export class OpenTutorial implements Action {
  readonly type = OPEN_TUTORIAL;

  constructor(public payload: number) {}
}

export class CompletedTutorial implements Action {
  readonly type = COMPLETED_TUTORIAL;

  constructor(public payload: number) {}
}

export type Actions = AddTutorial | RemoveTutorial | OpenTutorial | CompletedTutorial;
