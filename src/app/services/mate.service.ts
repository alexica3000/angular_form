import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Mate} from '../models/mate.model';

@Injectable({
  providedIn: 'root'
})

export class MateService {
  baseUrl = 'http://localost:3000';

  constructor(private http: HttpClient) {}

  saveMate(model: Mate): void {
    console.log(JSON.stringify(model, null, 4));
  }
}
