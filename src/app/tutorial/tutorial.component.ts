import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';
import { ADD_TUTORIAL } from '../actions/tutorial.actions';
import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css'],
})
export class TutorialComponent implements OnInit {
  angForm: FormGroup;
  tutorial: Tutorial;
  ID = 1;
  title = 'Add new Tutorial';

  tutorialCategories: { title: string; image: string }[] = [
    { title: 'Choose type of tutorial', image: '' },
    { title: 'Java', image: 'assets/imgs/java.png' },
    { title: 'Node JS', image: 'assets/imgs/nodejs.jpg' },
    { title: 'Angular', image: 'assets/imgs/angular.png' },
    { title: 'React', image: 'assets/imgs/react.png' },
  ];

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      url: ['', Validators.required],
    });
  }

  addTutorial(newTutorial) {
    this.store.dispatch(new TutorialActions.AddTutorial(newTutorial));
    //this.angForm.reset();
    this.resetTutorial();
  }

  ngOnInit() {
    this.resetTutorial();
  }

  resetTutorial() {
    this.tutorial = {
      id: this.ID++,
      name: '',
      category: '',
      url: '',
      isOpened: false,
      isCompleted: false,
    };
  }
}
