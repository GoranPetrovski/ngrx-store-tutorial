import { Tutorial } from './models/tutorial.model';
import { Blockchain } from './models/blockchain.model';

export interface AppState {
  readonly tutorial: Tutorial[];
  readonly blockchain: Blockchain[];
}
