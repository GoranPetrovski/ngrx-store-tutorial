import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  getTutorials(): Observable<Tutorial[]> {
    return this.http.get<any>('https://api.myjson.com/bins/13d3so');
  }
}
