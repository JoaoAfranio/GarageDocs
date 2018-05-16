import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, IonicPage } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { EditarveiculoComponent } from '../../components/editar-veiculo/editar-veiculo';

@IonicPage()
@Component({
  selector: 'page-pesquisar',
  templateUrl: 'pesquisar.html',
})
export class PesquisarPage {

  private veiculoCollection: AngularFirestoreCollection<any>;
  public veiculo: Observable<any[]>;

  constructor(
    public db: AngularFirestore,
    public navCtrl: NavController,
    public modal: ModalController) {
    this.veiculoCollection = db.collection<any>('veiculo');
    this.veiculo = this.veiculoCollection.valueChanges();
  }

  deleteveiculo(id){
    this.veiculoCollection.doc(id).delete();
  }

  editveiculo(veiculo){
    console.log(veiculo)
    const AlterarveiculoModal = this.modal.create(EditarveiculoComponent, {veiculo: veiculo});
    AlterarveiculoModal.present();
  }
}
