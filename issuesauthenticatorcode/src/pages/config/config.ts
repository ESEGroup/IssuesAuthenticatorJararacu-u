import { Component } from "@angular/core";  
import { NavController, AlertController } from 'ionic-angular'; 

@Component({
    selector: 'page-config',
    templateUrl: 'config.html'
})
export class ConfigPage {  

    constructor(private navCtrl: NavController, public alertCtrl: AlertController) {
    }

    getRouters() {
    }

    doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Configuração da Sala',
      message: 'MAC: 00-80-F0-32-0A-7A',
      buttons: ['Ok']
    });
    alert.present()
}
}