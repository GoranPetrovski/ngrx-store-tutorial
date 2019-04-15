import { OnInit, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Tutorial } from '../models/tutorial.model';
import { AppState } from '../app.state';
import * as TutorialActions from './../actions/tutorial.actions';
import {
  faEye,
  faEyeSlash,
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-display',
  templateUrl: './display-tutorials.component.html',
  styleUrls: ['./display-tutorials.component.css'],
})
export class DisplayTutorialsComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;
  constructor(private store: Store<AppState>) {
    this.tutorials = this.store.select(state => state.tutorial);
  }

  ngOnInit() {}

  openTutorial(id: number) {
    this.store.dispatch(new TutorialActions.OpenTutorial(id));
  }

  completed(id: number) {
    this.store.dispatch(new TutorialActions.CompletedTutorial(id));
  }
}
