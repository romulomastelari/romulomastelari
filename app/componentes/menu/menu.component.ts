import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public mostraMenu: boolean = false;

  constructor() {}

  ngOnInit() {}

  abreMenu() {
    this.mostraMenu = !this.mostraMenu
  }
}
