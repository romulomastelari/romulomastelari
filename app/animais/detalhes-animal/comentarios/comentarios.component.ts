import { switchMap, tap } from 'rxjs/operators'
import { ComentariosService } from './comentarios.service'
import { Observable } from 'rxjs'
import { Component, Input, OnInit } from '@angular/core'
import { Comentarios } from './comentarios'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss'],
})
export class ComentariosComponent implements OnInit {
  @Input() id!: number

  comentarios$!: Observable<Comentarios>
  comentarioForm!: FormGroup

  constructor(
    private comentariosService: ComentariosService,
    public formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.comentarios$ = this.comentariosService.buscarComentario(this.id)
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', Validators.maxLength(300)],
    })
  }

  gravar(): void {
    const comentario = this.comentarioForm.get('comentario')?.value ?? ''
    this.comentarios$ = this.comentariosService
      .incluirComentario(this.id, comentario)
      .pipe(
        switchMap(() => this.comentariosService.buscarComentario(this.id)), // retornar o comentario dentro do componente com o swithmap
        tap(() => {
          // resetar o formulario com o tap
          this.comentarioForm.reset()
          alert('Comentário salvo!')
        }),
      )
  }
}
