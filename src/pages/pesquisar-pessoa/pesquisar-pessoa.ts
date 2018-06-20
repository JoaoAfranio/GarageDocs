import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, IonicPage } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { EditarpessoaComponent } from '../../components/editar-pessoa/editar-pessoa';

@IonicPage()
@Component({
  selector: 'page-pesquisar-pessoa',
  templateUrl: 'pesquisar-pessoa.html',
})
export class PesquisarPessoaPage {

  private pessoaCollection: AngularFirestoreCollection<any>;
  public pessoa: Observable<any[]>;

  constructor(
    public db: AngularFirestore,
    public navCtrl: NavController,
    public modal: ModalController) {
    this.pessoaCollection = db.collection<any>('pessoa');
    this.pessoa = this.pessoaCollection.valueChanges();
  }

  deletepessoa(id){
    this.pessoaCollection.doc(id).delete();
  }

  editpessoa(pessoa){
    console.log(pessoa)
    const AlterarpessoaModal = this.modal.create(EditarpessoaComponent, {pessoa: pessoa});
    AlterarpessoaModal.present();
  }
}
