import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.actions';

const initialState: Tutorial = {
  id: 0,
  name: 'Initial tutorial',
  url: 'http://google.com',
  category: 'assets/imgs/java.png',
  isOpened: false,
  isCompleted: false,
};

export function reducer(
  state: Tutorial[] = [initialState],
  action: TutorialActions.Actions
) {
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];
    case TutorialActions.REMOVE_TUTORIAL:
      const filteredState = state.filter(s => s.id !== action.payload);
      return filteredState;
    case TutorialActions.OPEN_TUTORIAL:
      const selectedTutorial = state.find(t => t.id === action.payload);
      selectedTutorial ? (selectedTutorial.isOpened = true) : selectedTutorial;
      return state;
    case TutorialActions.COMPLETED_TUTORIAL:
      const selected = state.find(t => t.id === action.payload);
      selected ? (selected.isCompleted = true) : selected;
      return state;
    default:
      return state;
  }
}
