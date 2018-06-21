import { Component } from '@angular/core';
import { ViewController, NavController, NavParams, LoadingController, ToastController, Select } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the VincularComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'vincular',
  templateUrl: 'vincular.html'
})
export class VincularComponent {
  private formEditar: FormGroup;
  private veiculo: any;
  private pessoa: any;
  public loading: any;
  public resultGetOne: any;
  public resultEdit: any;
  private formVincular: FormGroup;
 

  
  public selectedCarro: any;
  public selectedPessoa: any;

  private veiculoCollection: AngularFirestoreCollection<any>;
//  public veiculo: Observable<any[]>;

  private pessoaCollection: AngularFirestoreCollection<any>;
//  public pessoa: Observable<any[]>;

  constructor(
    public view: ViewController,
    public db: AngularFirestore,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public navCtrl: NavController,
    public fb: FormBuilder,
    public toastCtrl: ToastController
  ) {
    this.veiculoCollection = db.collection<any>('veiculo');
    this.veiculo = this.veiculoCollection.valueChanges();

    this.pessoaCollection = db.collection<any>('pessoa');
    this.pessoa = this.pessoaCollection.valueChanges();

    this.formVincular = fb.group({
      id: [null],
      pessoa_vinculada: [null],
    })


  }
/*
  ionViewDidLoad() {

    this.showLoader();

    this.veiculo = this.navParams.get('veiculo')

    this.formVincular.setValue({
      id: this.veiculo.id,
      pessoa_vinculada: this.veiculo.pessoa_vinculada,

    })
    this.loading.dismiss()
    
  }
*/
/*
onChangePessoa(){
  this.veiculo = this.navParams.get('veiculo')

  this.formVincular.setValue({
    id: this.veiculo.id,
    pessoa_vinculada: this.veiculo.pessoa_vinculada,

  })
}
*/

  concluir(){
      this.showLoader();
      this.loading.dismiss()
      this.mostraMenssagem('Veículo vinculado com sucesso', 2500)
  }

  closeModal(){
    this.view.dismiss();
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Aguarde...'
  });
  }

  mostraMenssagem(message: string, duration?: number) {
    let menssagem = this.toastCtrl.create({
      message: message,
      duration: duration,
      showCloseButton: true,
      closeButtonText: "Ok"
    });
    menssagem.present();
  }
}
