import { Component, OnInit } from '@angular/core';
import {
  faCoffee,
  faUser,
  faSearch,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  faCoffee = faCoffee;
  faUser = faUser;
  faSearch = faSearch;
  faPlayCircle = faPlayCircle;
}
