import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DisplayTutorialsComponent } from './display-tutorials/display-tutorials.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, TutorialComponent, DisplayTutorialsComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial: reducer,
    }),
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
