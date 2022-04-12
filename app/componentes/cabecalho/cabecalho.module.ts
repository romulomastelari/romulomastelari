import { MenuModule } from './../menu/menu.module';
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CabecalhoComponent } from './cabecalho.component'

@NgModule({
  imports: [CommonModule, RouterModule, MenuModule],
  declarations: [CabecalhoComponent],
  exports: [CabecalhoComponent],
})
export class CabecalhoModule {}


