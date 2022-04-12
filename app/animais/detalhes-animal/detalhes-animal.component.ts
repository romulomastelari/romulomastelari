import { Observable } from 'rxjs'
import { AnimaisService } from './../animais.service'
import { Animal } from './../animais'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-detalhes-animal',
  templateUrl: './detalhes-animal.component.html',
  styleUrls: ['./detalhes-animal.component.scss'],
})
export class DetalhesAnimalComponent implements OnInit {
  animal$!: Observable<Animal>
  animalId!: number

  constructor(
    private animaisService: AnimaisService,
    private actitedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.animalId = this.actitedRoute.snapshot.params.animalId
    this.animal$ = this.animaisService.buscarId(this.animalId)
  }
  curtir() {
    this.animaisService.curtirFotos(this.animalId).subscribe(curtida => {
      if(curtida){
        this.animal$ = this.animaisService.buscarId(this.animalId) // busca da contagem dos likes do animais
      }
    })
  }

  excluir() {
    this.animaisService.excluirAnimal(this.animalId).subscribe(
      () => {
        this.router.navigate(['/animais'])
      },
      (erro) => console.log(erro),
    )
  }
}
