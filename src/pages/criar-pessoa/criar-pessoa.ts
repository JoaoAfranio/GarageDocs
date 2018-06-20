import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { HomePage } from '../home/home'
/**
 * Generated class for the CriarPessoaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-pessoa', 
  templateUrl: 'criar-pessoa.html',
})
export class CriarPessoaPage {
  private formPessoa: FormGroup;
  public loading;
  public resultCreate: any;
  private pessoaCollection: AngularFirestoreCollection<any>;

  constructor(
    public db: AngularFirestore,
    public fb: FormBuilder,
    public navParams: NavParams,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController)
  {
    this.formPessoa = fb.group({
      id: [null],
      bairro: [null, [Validators.required]],
      cep: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      complemento: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      estado: [null, [Validators.required]],
      idade: [null, [Validators.required]],
      nome: [null, [Validators.required]],
      numero: [null, [Validators.required]],
      rua: [null, [Validators.required]],
      sexo: [null, [Validators.required]],
      telefone: [null, [Validators.required]]
    })
    this.pessoaCollection = db.collection<any>('pessoa');
  }

  ionViewDidLoad() {
  }

  submit(){
    this.showLoader();

    const id = this.db.createId();

    this.formPessoa.setValue({
      id: id,
      bairro: this.formPessoa.value.bairro,
      cep: this.formPessoa.value.cep,
      cidade: this.formPessoa.value.cidade,
      complemento: this.formPessoa.value.complemento,
      cpf: this.formPessoa.value.cpf,
      estado: this.formPessoa.value.estado,
      idade: this.formPessoa.value.idade,
      nome: this.formPessoa.value.nome,
      numero: this.formPessoa.value.numero,
      rua: this.formPessoa.value.rua,
      sexo: this.formPessoa.value.sexo,
      telefone: this.formPessoa.value.telefone,
    })

    this.pessoaCollection.doc(id).set(this.formPessoa.value).then((res)=>{
      this.loading.dismiss()
      this.mostraMenssagem('Pessoa criada com sucesso', 2500)
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
