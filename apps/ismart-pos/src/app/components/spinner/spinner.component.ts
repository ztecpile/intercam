import { Component } from '@angular/core';
import { SpinnerService } from '../../core/services/spinner.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'intercam-spinner',
  template: ` <div class="overlay" *ngIf="isLoading$ | async">
    <ng-lottie
      [options]="options"
      (animationCreated)="animationCreated($event)"
    ></ng-lottie>
  </div>`,
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  isLoading$ = this.service.isLoading$;
  private logoAnimado: any;
  private animationSpeed = 2;

  options: AnimationOptions = {
    path: 'assets/animaciones/logo-animado.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    this.logoAnimado = animationItem;
    this.logoAnimado.setSpeed(this.animationSpeed);
  }

  constructor(private service: SpinnerService) {}
}
