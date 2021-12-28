import { Component, Input } from '@angular/core';
import { MenuItem } from "../app.component";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {

  @Input() itemData!: MenuItem

}
