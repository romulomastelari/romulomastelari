import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showRoutes() {
    return !(this.router.url === '/home' || this.router.url === '/home/novousuario');
  }

}
