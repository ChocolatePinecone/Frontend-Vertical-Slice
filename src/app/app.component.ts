import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Slice';
  menuItems: MenuItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Call to API is placed here
    this.http.get<MenuItemsResponse>("http://localhost:3001/menu-items", {observe: "body", responseType: "json"}).subscribe((resp: MenuItemsResponse) => {
      this.menuItems = resp.menuItems;
    })
  }
}

export interface MenuItem {
  dish: string,
  description: string,
  price: string,
}

interface MenuItemsResponse {
  menuItems: MenuItem[],
}