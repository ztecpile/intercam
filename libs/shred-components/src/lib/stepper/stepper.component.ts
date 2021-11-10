import { ChangeDetectorRef } from '@angular/core';
import { Component, Input } from '@angular/core';

import { Step } from './step.model';
import { StepperService } from './stepper.service';

@Component({
  selector: 'idb-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent {
  @Input() steps: Step[];

  constructor(private service : StepperService, private cdRef : ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.service.getMoveStepSubject().subscribe(numberStep => {
      this.steps[this.steps.length - (1+numberStep)].active = true;
      this.cdRef.detectChanges();
    });
  }
}
