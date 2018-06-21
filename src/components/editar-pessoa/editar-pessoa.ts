import { Component } from '@angular/core';
import { ViewController, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the EditarpessoaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'editar-pessoa',
  templateUrl: 'editar-pessoa.html'
})
export class EditarpessoaComponent {
  private formEditar: FormGroup;
  private pessoa: any;
  public loading: any;
  public resultGetOne: any;
  public resultEdit: any;
  private pessoaCollection: AngularFirestoreCollection<any>;

  constructor(
    public db: AngularFirestore,
    public view: ViewController,
    public fb: FormBuilder,
    public navParams: NavParams,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController)
  {
    this.pessoaCollection = db.collection<any>('pessoa');

    this.formEditar = fb.group({
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
  }
  ionViewDidLoad() {
    this.showLoader()

    this.pessoa = this.navParams.get('pessoa')

    this.formEditar.setValue({
      id: this.pessoa.id,
      bairro: this.pessoa.bairro,
      cep: this.pessoa.cep,
      cidade: this.pessoa.cidade,
      complemento: this.pessoa.complemento,
      cpf: this.pessoa.cpf,
      estado: this.pessoa.estado,
      idade: this.pessoa.idade,
      nome: this.pessoa.nome,
      numero: this.pessoa.numero,
      rua: this.pessoa.rua,
      sexo: this.pessoa.sexo,
      telefone: this.pessoa.telefone,
     
    })

    this.loading.dismiss()
  }

  concluir(){
    this.showLoader();

    this.formEditar.setValue({
      id: this.formEditar.value.id,
      bairro: this.formEditar.value.bairro,
      cep: this.formEditar.value.cep,
      cidade: this.formEditar.value.cidade,
      complemento: this.formEditar.value.complemento,
      cpf: this.formEditar.value.cpf,
      estado: this.formEditar.value.estado,
      idade: this.formEditar.value.idade,
      nome: this.formEditar.value.nome,
      numero: this.formEditar.value.numero,
      rua: this.formEditar.value.rua,
      sexo: this.formEditar.value.sexo,
      telefone: this.formEditar.value.telefone,
    })

    this.pessoaCollection.doc(this.formEditar.value.id).update(this.formEditar.value).then((res)=>{
      this.loading.dismiss()
      this.mostraMenssagem('Pessoa editada com sucesso', 2500)
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
