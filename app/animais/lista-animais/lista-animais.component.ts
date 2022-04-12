import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AnimaisService } from './../animais.service'
import { UsuarioService } from './../../autenticacao/usuario/usuario.service'
import { Component, OnInit } from '@angular/core'
import { Animais } from '../animais'

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  animais!: Animais;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params =>{
      this.animais = this.activatedRoute.snapshot.data['animais']
    })
  }
}
