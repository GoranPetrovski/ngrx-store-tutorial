import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';
import { ReadComponent } from './read/read.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { addCoinReducer } from './reducers/blockchain.reducer';
import { DisplayTutorialsComponent } from './display-tutorials/display-tutorials.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    TutorialComponent,
    DisplayTutorialsComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial: reducer,
      blockchain: addCoinReducer,
    }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
