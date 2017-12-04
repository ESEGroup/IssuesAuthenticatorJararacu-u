import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  forgotPassword() {
    let alert = this.alertCtrl.create({
      title: 'Esqueceu sua senha?',
      message: 'Entre em contato com o administrador do seu laboratório',
      buttons: ['Ok']
    });
    alert.present()
    }
}