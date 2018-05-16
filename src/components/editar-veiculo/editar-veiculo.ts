import { Component } from '@angular/core';
import { ViewController, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the EditarveiculoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'editar-veiculo',
  templateUrl: 'editar-veiculo.html'
})
export class EditarveiculoComponent {
  private formEditar: FormGroup;
  private veiculo: any;
  public loading: any;
  public resultGetOne: any;
  public resultEdit: any;
  private veiculoCollection: AngularFirestoreCollection<any>;

  constructor(
    public db: AngularFirestore,
    public view: ViewController,
    public fb: FormBuilder,
    public navParams: NavParams,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController)
  {
    this.veiculoCollection = db.collection<any>('veiculo');

    this.formEditar = fb.group({
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
  }
  ionViewDidLoad() {
    this.showLoader()

    this.veiculo = this.navParams.get('veiculo')

    this.formEditar.setValue({
      id: this.veiculo.id,
      ano_fabricacao: this.veiculo.ano_fabricacao,
      ano_modelo: this.veiculo.ano_modelo,
      chassi: this.veiculo.chassi,
      cor: this.veiculo.cor,
      marca: this.veiculo.marca,
      modelo: this.veiculo.modelo,
      pessoa_vinculada: this.veiculo.pessoa_vinculada,
      placa: this.veiculo.placa,
      renavam: this.veiculo.renavam,
      valor: this.veiculo.valor,
      valor_compra: this.veiculo.valor_compra,
      valor_venda: this.veiculo.valor_venda
     
    })

    this.loading.dismiss()
  }

  concluir(){
    this.showLoader();

    this.formEditar.setValue({
      id: this.formEditar.value.id,
      ano_fabricacao: this.formEditar.value.ano_fabricacao,
      ano_modelo: this.formEditar.value.ano_modelo,
      chassi: this.formEditar.value.chassi,
      cor: this.formEditar.value.cor,
      marca: this.formEditar.value.marca,
      modelo: this.formEditar.value.modelo,
      pessoa_vinculada: this.formEditar.value.pessoa_vinculada,
      placa: this.formEditar.value.placa,
      renavam: this.formEditar.value.renavam,
      valor: this.formEditar.value.valor,
      valor_compra: this.formEditar.value.valor_compra,
      valor_venda: this.formEditar.value.valor_venda
    })

    this.veiculoCollection.doc(this.formEditar.value.id).update(this.formEditar.value).then((res)=>{
      this.loading.dismiss()
      this.mostraMenssagem('veiculo editado com sucesso', 2500)
      this.view.dismiss();
    })
  }
  closeModal(){
    this.view.dismiss();
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
