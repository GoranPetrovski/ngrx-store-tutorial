import { OnInit, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Tutorial } from '../models/tutorial.model';
import { AppState } from '../app.state';

@Component({
  selector: 'app-display',
  templateUrl: './display-tutorials.component.html',
  styleUrls: ['./display-tutorials.component.css'],
})
export class DisplayTutorialsComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;
  constructor(private store: Store<AppState>) {
    this.tutorials = this.store.select(state => state.tutorial);
  }

  ngOnInit() {}
}
