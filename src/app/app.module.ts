import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { addCoinReducer } from './reducers/blockchain.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    BlockchainComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial: reducer,
      blockchain: addCoinReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
