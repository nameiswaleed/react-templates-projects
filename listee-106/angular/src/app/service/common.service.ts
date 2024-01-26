import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public base: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public page: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public last: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public isfirstHeader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );
  public isHeaderTwo: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public isHeaderThree: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
    public isHeaderFour: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);  

  constructor() { }
}
