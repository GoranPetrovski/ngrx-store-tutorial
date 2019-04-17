import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { TutorialService } from '../services/tutorial.service';
import { Observable, EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as TutorialActions from './../actions/tutorial.actions';

@Injectable()
export class TutorialEffect {
  @Effect()
  public loadTutorials$: Observable<
    TutorialActions.LoadSuccessTutorial
  > = this.actions$.pipe(
    ofType<any>(TutorialActions.LOAD_TUTORIALS),
    mergeMap(() =>
      this.tutorialService.getTutorials().pipe(
        map(tutorials => new TutorialActions.LoadSuccessTutorial(tutorials)),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(private tutorialService: TutorialService, private actions$: Actions) {}
}
