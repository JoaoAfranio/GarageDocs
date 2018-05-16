import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { HomePage } from '../home/home'
/**
 * Generated class for the CriarveiculoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-veiculo', 
  templateUrl: 'criar-veiculo.html',
})
export class CriarVeiculoPage {
  private formVeiculo: FormGroup;
  public loading
  public resultCreate: any;
  private veiculoCollection: AngularFirestoreCollection<any>;

  constructor(
    public db: AngularFirestore,
    public fb: FormBuilder,
    public navParams: NavParams,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController)
  {
    this.formVeiculo = fb.group({
      id: [null],
      ano_fabricacao: [null, [Validators.required]],
      ano_modelo: [null, [Validators.required]],
      chassi: [null, [Validators.required]],
      cor: [null, [Validators.required]],
      marca: [null, [Validators.required]],
      modelo: [null, [Validators.required]],
      pessoa_vinculada: [null, [Validators.required]],
      placa: [null, [Validators.required]],
      renavam: [null, [Validators.required]],
      valor: [null, [Validators.required]],
      valor_compra: [null, [Validators.required]],
      valor_venda: [null, [Validators.required]]
    })
    this.veiculoCollection = db.collection<any>('veiculo');
  }

  ionViewDidLoad() {
  }

  submit(){
    this.showLoader();

    const id = this.db.createId();

    this.formVeiculo.setValue({
      id: id,
      ano_fabricacao: this.formVeiculo.value.ano_fabricacao,
      ano_modelo: this.formVeiculo.value.ano_modelo,
      chassi: this.formVeiculo.value.chassi,
      cor: this.formVeiculo.value.cor,
      marca: this.formVeiculo.value.marca,
      modelo: this.formVeiculo.value.modelo,
      pessoa_vinculada: this.formVeiculo.value.pessoa_vinculada,
      placa: this.formVeiculo.value.placa,
      renavam: this.formVeiculo.value.renavam,
      valor: this.formVeiculo.value.valor,
      valor_compra: this.formVeiculo.value.valor_compra,
      valor_venda: this.formVeiculo.value.valor_venda
    })

    this.veiculoCollection.doc(id).set(this.formVeiculo.value).then((res)=>{
      this.loading.dismiss()
      this.mostraMenssagem('veiculo criado com sucesso', 2500)
      this.navCtrl.setRoot(HomePage)
    })
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Aguarde...'
    });

    this.loading.present();
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
