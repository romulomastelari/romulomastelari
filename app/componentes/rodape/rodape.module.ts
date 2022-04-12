import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RodapeComponent } from './rodape.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [RodapeComponent],
  exports: [RodapeComponent],
})
export class RodapeModule {}
