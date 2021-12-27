import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Slice';
  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    // Call to API is placed here
  }
}

interface MenuItem {
  dish: string,
  description: string,
  price: number,
}