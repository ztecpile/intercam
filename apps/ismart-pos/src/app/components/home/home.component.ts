import { Component, OnInit } from '@angular/core';
import { initParameter } from 'apps/ismart-pos/src/assets/js/init';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'intercam-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AuthService]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    initParameter();
  }

}
