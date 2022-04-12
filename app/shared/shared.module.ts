import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, MensagemModule,
  ],
  exports: [ReactiveFormsModule, MensagemModule],
  declarations: []
})
export class SharedModule { }
