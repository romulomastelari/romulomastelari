import { Component, Input, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'

const API = environment.apiURL

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
  @Input() descricao = ''
  @Input() set url(url: string) {
    if (url.startsWith('data')) { // se o começa da url começar com data faça ...
      this.urlOriginal = url
    } else {
      this.urlOriginal = `${API}/imgs/${url}` // se não pega url competa da api..
    }
  }

  get url(): string {
    return this.urlOriginal
  }

  private urlOriginal = ''

  constructor() {}

  ngOnInit() {}
}
