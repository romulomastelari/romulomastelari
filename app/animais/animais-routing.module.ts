import { NovoAnimalComponent } from './novo-animal/novo-animal.component'
import { ListaAnimaisResolver } from './lista-animais/lista-animais.resolver'
import { DetalhesAnimalComponent } from './detalhes-animal/detalhes-animal.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component'

const routes: Routes = [
  {
    path: '',
    component: ListaAnimaisComponent,
    resolve: {
      animais: ListaAnimaisResolver,
    },
  },
  {
    path: 'novo',
    component: NovoAnimalComponent,
  },
  {
    path: ':animalId',
    component: DetalhesAnimalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisRoutingModule {}
