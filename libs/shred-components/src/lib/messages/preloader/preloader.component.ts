import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PreloaderService } from './preloader.service';
import { Subscription } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'idb-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {
  loading: boolean = false;
  loadingSubscription: Subscription;
  timeLeft: number = 0;
  interval;
  preloadWidth : string;

  ngAfterViewChecked()
  {
    this.cdRef.detectChanges();
  }

  constructor(private preloaderService: PreloaderService, private translocoService : TranslocoService,
    private cdRef:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadingSubscription = this.preloaderService.loadingStatus.subscribe((value) => {
      this.loading = value;
      if(this.loading) {
        this.startTimer();
      } else {
        this.pauseTimer();
      }
    });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft <= 240) {
        this.timeLeft += 10;
      } else {
        this.timeLeft = 0;
      }
      this.preloadWidth = this.timeLeft + "px";
    },100)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
