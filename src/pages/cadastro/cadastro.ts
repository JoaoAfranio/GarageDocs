
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CriarVeiculoPage } from '../criar-veiculo/criar-veiculo';
import { CriarPessoaPage } from '../criar-pessoa/criar-pessoa';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  transferirPaginaVeiculo(){
    this.navCtrl.push('CriarVeiculoPage');
  }

  transferirPaginaPessoa(){
    this.navCtrl.push('CriarPessoaPage');
  }
}
