import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';
  
  


  constructor(private alertCtrl: AlertController) { }


  ngOnInit() {
  }

  

  async presentAlertMultilpeButtonAction() {
    const alert = await this.alertCtrl.create({
    backdropDismiss: false,
    header: 'Prompt!',
    inputs: [
      {
        type: 'text',
        placeholder: 'Nombres',
      },
      {
        type: 'text',
        placeholder: 'Apellidos',
      },
      {
        type: 'text',
        placeholder: 'Descripcion Materia',
      },

      {
        
        type: 'url',
        value: 'https://ionicframework.com',
        
      },
      {
        
        type: 'date',
        
      },

      {
        type: 'password',
          placeholder: 'Clave',
          
        
      },
      {
        placeholder: 'Nickname (max 8 characters)',
        attributes: {
          maxlength: 8,
        },
      },
      {
        
        placeholder: 'Edad',
        
      },

      
    ],
  

    buttons: [
      {
      text: 'Cancelar',
      handler: () => {
      console.log('Click en Cancelar')
      }
      },

      {
        text: 'Ok',
        role: 'Ok',
        cssClass: 'rojo'
        }
        ]
        });
        await alert.present();
      
      };
}
