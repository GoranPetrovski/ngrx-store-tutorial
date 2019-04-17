import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DisplayTutorialsComponent } from './display-tutorials/display-tutorials.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { TutorialEffect } from './effects/tutorial.effect';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, TutorialComponent, DisplayTutorialsComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial: reducer,
    }),
    EffectsModule.forRoot([TutorialEffect]),
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
