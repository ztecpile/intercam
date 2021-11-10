import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  private moveStepSubject = new Subject<number>();

  constructor() { }

  public moveStepper(numberStep : number) {
    this.moveStepSubject.next(numberStep);
  }

  public getMoveStepSubject() :Observable<number> {
    return this.moveStepSubject.asObservable();
  }
}
