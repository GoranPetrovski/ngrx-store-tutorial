import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Blockchain } from '../models/blockchain.model';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';
import { ADD_TUTORIAL } from '../actions/tutorial.actions';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css'],
})
export class TutorialComponent implements OnInit {
  angForm: FormGroup;
  tutorial: Tutorial;

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
      price: ['', Validators.required],
    });
  }

  addCoin(name, price) {
    this.store.dispatch({
      type: 'ADD_COIN',
      payload: <Blockchain>{ name, price },
    });
  }

  ngOnInit() {
    this.tutorial = {
      name: '',
      category: '',
      url: '',
    };
  }
}
