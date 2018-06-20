import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesquisarPessoaPage } from './pesquisar-pessoa';

@NgModule({
  declarations: [
    PesquisarPessoaPage,
  ],
  imports: [
    IonicPageModule.forChild(PesquisarPessoaPage),
  ],
})
export class PesquisarPessoaPageModule {}
