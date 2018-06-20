import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CriarVeiculoPage } from '../criar-veiculo/criar-veiculo';
import { CriarPessoaPage } from '../criar-pessoa/criar-pessoa';

@IonicPage()
@Component({
  selector: 'home-cadastro',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  transferirPaginaPesquisarPessoa(){
    this.navCtrl.push('PesquisarPessoaPage');
  }

  transferirPaginaPesquisarVeiculo(){
    this.navCtrl.push('PesquisarPage');
  }
}