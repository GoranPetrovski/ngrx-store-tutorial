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
import { TutorialService } from '../services/tutorial.service';

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

  ngOnInit() {
    this.store.dispatch(new TutorialActions.LoadTutorial());
  }

  openTutorial(id: number, url: string) {
    this.store.dispatch(new TutorialActions.OpenTutorial(id));
    window.open(url, '_blank');
  }

  completed(id: number) {
    this.store.dispatch(new TutorialActions.CompletedTutorial(id));
  }

  remove(id: number) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(id));
  }
}
