import { SharedModule } from './../shared/shared.module';
import { ComentariosComponent } from './detalhes-animal/comentarios/comentarios.component';
import { DetalhesAnimalComponent } from './detalhes-animal/detalhes-animal.component';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component'
import { AnimalComponent } from './animal/animal.component'
import { CartaoModule } from './../componentes/cartao/cartao.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AnimaisRoutingModule } from './animais-routing.module'
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component'
import { NovoAnimalComponent } from './novo-animal/novo-animal.component';

@NgModule({
  declarations: [
    ListaAnimaisComponent,
    AnimalComponent,
    GradeFotosAnimaisComponent,
    DetalhesAnimalComponent,
    ComentariosComponent,
    NovoAnimalComponent
  ],
  imports: [CommonModule, AnimaisRoutingModule, CartaoModule, SharedModule],
  exports: [],
})
export class AnimaisModule {}
