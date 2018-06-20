import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarPessoaPage } from './criar-pessoa';

@NgModule({
  declarations: [
    CriarPessoaPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarPessoaPage),
  ],
})
export class CriarVeiculoPageModule {}
