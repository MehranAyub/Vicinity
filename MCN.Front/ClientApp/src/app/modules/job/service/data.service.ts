import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public updateData:BehaviorSubject<any>=new BehaviorSubject({id:1,name:'faisal ayub'});
  constructor() { }
}
