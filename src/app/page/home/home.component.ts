import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ispageLoad: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  animesLoaded(valor: boolean) {
    this.ispageLoad = valor;
  }
}
